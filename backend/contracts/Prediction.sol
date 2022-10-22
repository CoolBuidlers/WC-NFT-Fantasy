//Use Price Feeds For Players to Consistenly Pay $100 in ETH Using ETH and USDC Price Feeds
//Chainlink Adapters to Call API To Check the current Round and Obtain Final World Cup Winners
//Chainlink Keepers to call Chainlink Adapters function every 24 hours and have a 5 minute gap for Chainlink Adapters to submit data from API
//Use Chainlink VRF to select between the predictors who obtain the same points
//Limit the amount of players that can enter to 100
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
//Events can be used to display all of the players in the game, the current round in the worldcup, total prize pot amount in the contract, current teams in the world cup

 interface KeeperCompatibleInterface {
    function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//set 5 minutes for chainlink adapters to have a response after being called
//Chainlink Keepers will call chainlink adapters function after a certain period of time
//1. All Teams are in ERC1155, Users Mint 4 Teams in Order
//2. Users Can Mint Two More Teams After Initial Minting Phase Is Over
//3. After Each Round A User Can Either Swap Between their 4 teams or swap one of the teams for a new one
//4. After Round 16, You Can't Swap Your Current 4 Teams, but you can rearrange the order of them
//5. Whoever has the correct order wins, those won't don't have the correct order will lose MOST LIKELY WILL CHANGE AROUND
//6. Take 10% of the prize pot as personal earnings
contract WCNFTFantasy is ERC1155, Ownable {
   //Amount of points rewarded for each correct guess when the 4 teams are finalized
    uint constant POINTS_FOR_FIRST_TEAM = 200;
    uint constant POINTS_FOR_SECOND_TEAM = 100;
    uint constant POINTS_FOR_THIRD_TEAM = 50;
    uint constant POINTS_FOR_FOURTH_TEAM = 25;
    uint constant INITIAL_MINTING_PHASE_DEADLINE = 1669010400; //Date that World Cup Starts
    uint public oneDay;
    uint public waitFiveMinutes;


    //Top 3 Predictors are able to receive money from the prize pot
    //If Predictors manage to accumulate the same amount of points, it will split based on how many predictors got the same amount 
    //Maybe burn the nfts for the team if they get swapped out in the users prediction
    //After the World Cup has ended, predictors will have 24 hours to be able to deposit their points to be eligible to win money from the prize pot


//An object that defined the prediction of the top teams
struct TopPredictions {
     bytes teamOne;
     bytes teamTwo;
     bytes teamThree;
     bytes teamFour;
     bytes teamFive;
     bytes teamSix;
}

    mapping(address => TopPredictions) predictors; //keeps track of all users predictions
    mapping(address => bool) alreadyMinted; //checks if user has minted their first 4 teams for inital minting phase
    mapping(address => bool) extraTwoTeamsMinted; //check if user has minted extra 2 teams
    mapping(address => bool) changedOrderForTop32; //check if user has changed team order for top 32
    mapping(address => bool) changedOrderForTop16; //check if user has changed team order for top 16
    mapping(address => bool) changedOrderForTop8; //check if user has changed team order for top 8
    mapping(address => bool) changedOrderForTop4; //check if user has changed team order for top 4
    mapping(address => bool) depositedPoints; //checks if user has already deposited their points to potentially get chosen as winner
    mapping(address => uint) balances; //keeps track of the amount of money each user has deposited

   //Use Chainlink Keepers to Change Enum Phase

   //Used to keep track of the phases of the worldcup
   enum GamePhases {
    Mint, 
    TOP32,
    TOP16,
    TOP8,
    TOP4,
    WORLD_CUP_FINISHED
}
   GamePhases public currentPhase;

//Makes sure you can only interact with function after the world cup finishes
   modifier afterEvent {
     require(currentPhase == GamePhases.WORLD_CUP_FINISHED,"CAN_WITHDRAW_ONLY_AFTER_EVENT");
     _;
   }
    address public linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    //An array that stores all the world cup teams
    bytes[32] worldCupTeams;

     constructor() ERC1155("")  {
        currentPhase = GamePhases.Mint;
        //Group A
         worldCupTeams[0] = abi.encode("Qatar");
         worldCupTeams[1] = abi.encode("Ecuador");
         worldCupTeams[2] = abi.encode("Senegal");
         worldCupTeams[3] = abi.encode("Netherlands");

        //Group B
         worldCupTeams[4] = abi.encode("England");
         worldCupTeams[5] = abi.encode("IR Iran");
         worldCupTeams[6] = abi.encode("USA");
         worldCupTeams[7] = abi.encode("Wales");

         //Group C
         worldCupTeams[8] = abi.encode("Argentina");
         worldCupTeams[9] = abi.encode("Saudi Arabia");
         worldCupTeams[10] = abi.encode("Mexico");
         worldCupTeams[11] = abi.encode("Poland");

         //Group D
         worldCupTeams[12] = abi.encode("France");
         worldCupTeams[13] = abi.encode("Australia");
         worldCupTeams[14] = abi.encode("Denmark");
         worldCupTeams[15] = abi.encode("Tunisia");

         //Group E
         worldCupTeams[16] = abi.encode("Spain");
         worldCupTeams[17] = abi.encode("Costa Rica");
         worldCupTeams[18] = abi.encode("Germany");
         worldCupTeams[19] = abi.encode("Japan");

         //Group F
         worldCupTeams[20] = abi.encode("Belgium");
         worldCupTeams[21] = abi.encode("Canada");
         worldCupTeams[22] = abi.encode("Morocco");
         worldCupTeams[23] = abi.encode("Croatia");

         //Group G
         worldCupTeams[24] = abi.encode("Brazil");
         worldCupTeams[25] = abi.encode("Serbia");
         worldCupTeams[26] = abi.encode("Switzerland");
         worldCupTeams[27] = abi.encode("Cameroon");

         //Group H
         worldCupTeams[28] = abi.encode("Portugal");
         worldCupTeams[29] = abi.encode("Ghana");
         worldCupTeams[30] = abi.encode("Uruguay");
         worldCupTeams[31] = abi.encode("Korea Republic");
    }

  //mint first 4 teams before the worldcup starts
   function mintTopFourTeams(string calldata _teamOne, string calldata _teamTwo, string calldata _teamThree, string calldata _teamFour) external payable {
    //ADD_MINTING_FUNCTIONALITY
     require(alreadyMinted[msg.sender] == false, "CANT_MINT_TEAMS_TWICE");
     require(currentPhase == GamePhases.Mint, "INITIAL_MINTING_PHASE_OVER");
    
    //Makes sure the user doesn't mint duplicate teams
     if(keccak256(abi.encode(_teamOne)) == keccak256(abi.encode(_teamTwo)) || keccak256(abi.encode(_teamOne)) == keccak256(abi.encode(_teamThree)) || keccak256(abi.encode(_teamOne)) == keccak256(abi.encode(_teamFour)) || keccak256(abi.encode(_teamTwo)) == keccak256(abi.encode(_teamThree)) || keccak256(abi.encode(_teamTwo)) == keccak256(abi.encode(_teamFour)) || keccak256(abi.encode(_teamThree)) == keccak256(abi.encode(_teamFour))) {
       revert("CANT_HAVE_DUPLICATE_TEAMS");
     }
     //boolean values have to equal true to confirm that the teams entered as arguments in the function are valid and are within the worldcupteam array
     bool teamOneConfirmed;
     bool teamTwoConfirmed;
     bool teamThreeConfirmed;
     bool teamFourConfirmed;
     for(uint i = 0; i <= 31; i++) {
       if(teamOneConfirmed == false && keccak256(abi.encode(_teamOne)) == keccak256(worldCupTeams[i])) {
         teamOneConfirmed == true;
         predictors[msg.sender].teamOne = abi.encode(_teamOne);
       } 

       if(teamTwoConfirmed == false && keccak256(abi.encode(_teamTwo)) == keccak256(worldCupTeams[i])) {
         teamTwoConfirmed == true;
         predictors[msg.sender].teamTwo = abi.encode(_teamTwo);
       }

        if(teamThreeConfirmed == false && keccak256(abi.encode(_teamThree)) == keccak256(worldCupTeams[i])) {
         teamThreeConfirmed == true;
         predictors[msg.sender].teamThree = abi.encode(_teamThree);
       }

        if(teamFourConfirmed == false && keccak256(abi.encode(_teamFour)) == keccak256(worldCupTeams[i])) {
         teamFourConfirmed == true;
         predictors[msg.sender].teamFour = abi.encode(_teamFour);
       }

       if(teamOneConfirmed == true && teamTwoConfirmed == true && teamThreeConfirmed == true && teamFourConfirmed == true) break;
     }
     if(teamOneConfirmed != true || teamTwoConfirmed != true || teamThreeConfirmed != true || teamFourConfirmed != true) {
      revert("TEAMS_MUST_BE_VALID");
     } else {
       alreadyMinted[msg.sender] = true;
     }
   }
  
  //Same concept as the function above 
   function mintOtherTwoTeams(string calldata _teamFive, string calldata _teamSix) external payable {
     require(extraTwoTeamsMinted[msg.sender] == false, "ALREADY_MINTED");
     require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
     require(currentPhase == GamePhases.TOP32, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
     require(keccak256(abi.encode(_teamFive)) != keccak256(abi.encode(_teamSix)), "CANT_HAVE_DUPLICATE_TEAMS");
     bool teamFiveConfirmed;
     bool teamSixConfirmed;
     for(uint i = 0; i <= 31; i++) {
       if(teamFiveConfirmed == false && keccak256(abi.encode(_teamFive)) == keccak256(worldCupTeams[i])) {
         teamFiveConfirmed == true;
         predictors[msg.sender].teamFive = abi.encode(_teamFive);
       } 

       if(teamSixConfirmed == false && keccak256(abi.encode(_teamSix)) == keccak256(worldCupTeams[i])) {
         teamSixConfirmed == true;
         predictors[msg.sender].teamSix = abi.encode(_teamSix);
       } 
       if(teamFiveConfirmed == true && teamSixConfirmed == true) break;
     }
     if(teamFiveConfirmed != true || teamSixConfirmed != true) {
      revert("TEAMS_MUST_BE_VALID");
     } else {
       extraTwoTeamsMinted[msg.sender] = true;
     }
   }

    function changeOrderForTop32(uint _scenario) external {
    require(currentPhase == GamePhases.TOP32, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
     } else if(_scenario == 4) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamOne = teamFive;
       predictors[msg.sender].teamFive = teamOne;
     } else if(_scenario == 5) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamOne = teamSix;
       predictors[msg.sender].teamSix = teamOne;
     } else if(_scenario == 6) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
     } else if(_scenario == 7) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
     } else if(_scenario == 8) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamTwo = teamFive;
       predictors[msg.sender].teamFive = teamTwo;
     } else if(_scenario == 9) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamTwo = teamSix;
       predictors[msg.sender].teamSix = teamTwo;
     } else if(_scenario == 10) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
     } else if(_scenario == 11) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamThree = teamFive;
       predictors[msg.sender].teamFive = teamThree;
     } else if(_scenario == 12) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamThree = teamSix;
       predictors[msg.sender].teamSix = teamThree;
     } else if(_scenario == 13) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamFour = teamFive;
       predictors[msg.sender].teamFive = teamFour;
     } else if(_scenario == 14) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamFour = teamSix;
       predictors[msg.sender].teamSix = teamFour;
     }
     changedOrderForTop32[msg.sender] = true;
    } 

    function changeOrderForTop16(uint _scenario) external {
    require(currentPhase == GamePhases.TOP16, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
     } else if(_scenario == 4) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamOne = teamFive;
       predictors[msg.sender].teamFive = teamOne;
     } else if(_scenario == 5) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamOne = teamSix;
       predictors[msg.sender].teamSix = teamOne;
     } else if(_scenario == 6) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
     } else if(_scenario == 7) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
     } else if(_scenario == 8) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamTwo = teamFive;
       predictors[msg.sender].teamFive = teamTwo;
     } else if(_scenario == 9) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamTwo = teamSix;
       predictors[msg.sender].teamSix = teamTwo;
     } else if(_scenario == 10) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
     } else if(_scenario == 11) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamThree = teamFive;
       predictors[msg.sender].teamFive = teamThree;
     } else if(_scenario == 12) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamThree = teamSix;
       predictors[msg.sender].teamSix = teamThree;
     } else if(_scenario == 13) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamFour = teamFive;
       predictors[msg.sender].teamFive = teamFour;
     } else if(_scenario == 14) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamFour = teamSix;
       predictors[msg.sender].teamSix = teamFour;
     }
     changedOrderForTop16[msg.sender] = true;
    } 
    
     function changeOrderForTop8(uint _scenario) external {
    require(currentPhase == GamePhases.TOP16, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
     } else if(_scenario == 4) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
     } else if(_scenario == 5) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
     } else if(_scenario == 6) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
     }
     changedOrderForTop8[msg.sender] = true;
    } 
    
    function changeOrderForTop4(uint _scenario) external {
    require(currentPhase == GamePhases.TOP16, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
     } else if(_scenario == 4) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
     } else if(_scenario == 5) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
     } else if(_scenario == 6) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
     }
     changedOrderForTop4[msg.sender] = true;
    } 


   function checkUpkeep(bytes calldata /*checkData*/) external view returns (bool upkeepNeeded, bytes memory /*performData*/) {
        bool hasLink = LinkTokenInterface(linkAddress).balanceOf(address(this)) >= 0.0001 * 10 ** 18;
        bool eventHasStarted = block.timestamp > INITIAL_MINTING_PHASE_DEADLINE;
        bool oneDayPassed = block.timestamp > oneDay;
        //bool numberIsZero = randomNumber == 0;
        upkeepNeeded = hasLink && eventHasStarted && oneDayPassed;
    }

     function performUpkeep(bytes calldata /*performData*/) external {
      // require(LINK.balanceOf(address(this)) >= _chainlinkFee, "MORE_LINK");
      // requestRandomness(_keyHash, _chainlinkFee);
    }


   function receiveBackMoney() external {
     require(balances[msg.sender] != 0, "YOU_HAVE_NO_BALANCE");
     uint amount = balances[msg.sender];
     (bool sent, ) = payable(msg.sender).call{value:amount}("");
     require(sent, "FAILED_TO_SEND_FUNDS");
   }



   function withdraw() external onlyOwner afterEvent {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: ((amount * 10)/100)}("");
        require(sent, "Failed to send Funds");
    }
    receive() external payable{}
    fallback() external payable{}
}