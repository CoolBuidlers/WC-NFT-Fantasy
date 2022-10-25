//Use Price Feeds For Players to Consistenly Pay $100 in ETH Using ETH and USDC Price Feeds
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
import '../interfaces/IRetrieveRandomNumberAndWorldCupRound.sol';
//Events can be used to display all of the players in the game, the current round in the worldcup, total prize pot amount in the contract, current teams in the world cup

 interface KeeperCompatibleInterface {
    function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
//only get first 4 teams for worldCupData4
contract WCNFTFantasy is ERC1155, Ownable {
   //Amount of points rewarded for each correct guess when the 4 teams are finalized
    uint constant INITIAL_MINTING_PHASE_DEADLINE = 1669010400; //Date that World Cup Starts
    uint constant WORLD_CUP_ENDS = 1669096800;
    uint public oneDay;
event FirstFourTeamsMinted(address predictor, bytes teamOne, bytes teamTwo, bytes teamThree, bytes teamFour);
event TwoExtraTeamsMinted(address predictor, bytes teamFive, bytes teamSix);
event TeamsSwapped(address predictor, bytes firstTeam, bytes secondTeam, uint round);
event Winners(address winnerOne, address winnerTwo, address winnerThree);
bytes firstPlaceTeam;
bytes secondPlaceTeam;
bytes thirdPlaceTeam;
bytes fourthPlaceTeam;
address randomAndRoundAddress;
address worldCupData16Address;
address worldCupData8Address;
address worldCupData4Address;
address payable[] predictorsWithBiggestPoints;
address payable[] predictorsWithSecondBiggestPoints;
address payable[] predictorsWithThirdBiggestPoints;
//An object that defined the prediction of the top teams
struct TopPredictions {
     bytes teamOne;
     bytes teamTwo;
     bytes teamThree;
     bytes teamFour;
     bytes teamFive;
     bytes teamSix;
     uint predictorIndex;
}
  struct Points {
     uint points;
     address payable predictor;
  }
    uint predictorPointIndex;
    Points[100] predictorPoints;
    uint highestAmountOfPoints;
    uint secondHighestAmountOfPoints;
    uint thirdHighestAmountOfPoints;
    mapping(address => TopPredictions) predictors; //keeps track of all users predictions
    mapping(address => bool) alreadyMinted; //checks if user has minted their first 4 teams for inital minting phase
    mapping(address => bool) extraTwoTeamsMinted; //check if user has minted extra 2 teams
    mapping(address => bool) changedOrderForTop32; //check if user has changed team order for top 32
    mapping(address => bool) changedOrderForTop16; //check if user has changed team order for top 16
    mapping(address => bool) changedOrderForTop8; //check if user has changed team order for top 8
    mapping(address => bool) changedOrderForTop4; //check if user has changed team order for top 4
    mapping(address => bool) depositedPoints; //checks if user has already deposited their points to potentially get chosen as winner
    mapping(address => uint) balances; //keeps track of the amount of money each user has deposited


   //Used to keep track of the phases of the worldcup
   enum GamePhases {
    MINT, 
    TOP32,
    TOP16,
    TOP8,
    TOP4,
    CHOOSE_WINNERS,
    WORLD_CUP_FINISHED
}
   GamePhases public currentPhase;

//Makes sure you can only interact with function after the world cup finishes
   modifier afterEvent {
     require(currentPhase == GamePhases.WORLD_CUP_FINISHED,"CAN_WITHDRAW_ONLY_AFTER_EVENT");
     _;
   }

   modifier onlyWhenNotPaused {
     require(paused == false, "CONTRACT_IS_PAUSED");
     _;
   }
    address public linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    bool paused;
    bool canReceiveRefund;
    //An array that stores all the world cup teams
    bytes[32] worldCupTeams;

     constructor(address _worldCupData16Address) ERC1155("")  {
        worldCupData16Address = _worldCupData16Address;
        currentPhase = GamePhases.MINT;
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
     require(currentPhase == GamePhases.MINT, "INITIAL_MINTING_PHASE_OVER");
     require(predictorPoints.length != 100, "CANT_ENTER_ANYMORE");
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
      Points storage playerPoints = predictorPoints[predictorPointIndex];
      playerPoints.predictor = payable(msg.sender);
      predictors[msg.sender].predictorIndex = predictorPointIndex;
      alreadyMinted[msg.sender] = true;
      predictorPointIndex++;
      emit FirstFourTeamsMinted(msg.sender, abi.encode(_teamOne), abi.encode(_teamTwo), abi.encode(_teamThree), abi.encode(_teamFour));
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
       emit TwoExtraTeamsMinted(msg.sender, abi.encode(_teamFive), abi.encode(_teamSix));
     }
   }

    function changeOrderForTop32(uint _scenario) external {
    require(currentPhase == GamePhases.TOP32, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changedOrderForTop32[msg.sender] == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 32);
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 32);
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 32);
     } else if(_scenario == 4) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamOne = teamFive;
       predictors[msg.sender].teamFive = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFive, 32);
     } else if(_scenario == 5) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamOne = teamSix;
       predictors[msg.sender].teamSix = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamSix, 32);
     } else if(_scenario == 6) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 32);
     } else if(_scenario == 7) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 32);
     } else if(_scenario == 8) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamTwo = teamFive;
       predictors[msg.sender].teamFive = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFive, 32);
     } else if(_scenario == 9) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamTwo = teamSix;
       predictors[msg.sender].teamSix = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamSix, 32);
     } else if(_scenario == 10) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 32);
     } else if(_scenario == 11) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamThree = teamFive;
       predictors[msg.sender].teamFive = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFive, 32);
     } else if(_scenario == 12) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamThree = teamSix;
       predictors[msg.sender].teamSix = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamSix, 32);
     } else if(_scenario == 13) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamFour = teamFive;
       predictors[msg.sender].teamFive = teamFour;
       emit TeamsSwapped(msg.sender, teamFour, teamFive, 32);
     } else if(_scenario == 14) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamFour = teamSix;
       predictors[msg.sender].teamSix = teamFour;
       emit TeamsSwapped(msg.sender, teamFour, teamSix, 32);
     }
     changedOrderForTop32[msg.sender] = true;
    } 

    function changeOrderForTop16(uint _scenario) external {
    require(currentPhase == GamePhases.TOP16, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changedOrderForTop16[msg.sender] == false, "CANT_CHANGE_TEAMS_TWICE");
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 16);
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 16);
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 16);
     } else if(_scenario == 4) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamOne = teamFive;
       predictors[msg.sender].teamFive = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFive, 16);
     } else if(_scenario == 5) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamOne = teamSix;
       predictors[msg.sender].teamSix = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamSix, 16);
     } else if(_scenario == 6) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 16);
     } else if(_scenario == 7) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 16);
     } else if(_scenario == 8) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamTwo = teamFive;
       predictors[msg.sender].teamFive = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFive, 16);
     } else if(_scenario == 9) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamTwo = teamSix;
       predictors[msg.sender].teamSix = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamSix, 16);
     } else if(_scenario == 10) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 16);
     } else if(_scenario == 11) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamThree = teamFive;
       predictors[msg.sender].teamFive = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFive, 16);
     } else if(_scenario == 12) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamThree = teamSix;
       predictors[msg.sender].teamSix = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamSix, 16);
     } else if(_scenario == 13) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamFive = predictors[msg.sender].teamFive;
       predictors[msg.sender].teamFour = teamFive;
       predictors[msg.sender].teamFive = teamFour;
       emit TeamsSwapped(msg.sender, teamFour, teamFive, 16);
     } else if(_scenario == 14) {
       require(extraTwoTeamsMinted[msg.sender] == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = predictors[msg.sender].teamFour;
       bytes memory teamSix = predictors[msg.sender].teamSix;
       predictors[msg.sender].teamFour = teamSix;
       predictors[msg.sender].teamSix = teamFour;
       emit TeamsSwapped(msg.sender, teamFour, teamSix, 16);
     }
     changedOrderForTop16[msg.sender] = true;
    } 
    
     function changeOrderForTop8(uint _scenario) external {
    require(currentPhase == GamePhases.TOP8, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changedOrderForTop8[msg.sender] == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 8);
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 8);
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 8);
     } else if(_scenario == 4) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 8);
     } else if(_scenario == 5) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 8);
     } else if(_scenario == 6) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 8);
     }
     changedOrderForTop8[msg.sender] = true;
    } 
    
    function changeOrderForTop4(uint _scenario) external {
    require(currentPhase == GamePhases.TOP4, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted[msg.sender] == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changedOrderForTop4[msg.sender] == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       predictors[msg.sender].teamOne = teamTwo;
       predictors[msg.sender].teamTwo = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 4);
     } else if(_scenario == 2) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamOne = teamThree;
       predictors[msg.sender].teamThree = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 4);
     } else if(_scenario == 3) {
       bytes memory teamOne = predictors[msg.sender].teamOne;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamOne = teamFour;
       predictors[msg.sender].teamFour = teamOne;
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 4);
     } else if(_scenario == 4) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamThree = predictors[msg.sender].teamThree;
       predictors[msg.sender].teamTwo = teamThree;
       predictors[msg.sender].teamThree = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 4);
     } else if(_scenario == 5) {
       bytes memory teamTwo = predictors[msg.sender].teamTwo;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamTwo = teamFour;
       predictors[msg.sender].teamFour = teamTwo;
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 4);
     } else if(_scenario == 6) {
       bytes memory teamThree = predictors[msg.sender].teamThree;
       bytes memory teamFour = predictors[msg.sender].teamFour;
       predictors[msg.sender].teamThree = teamFour;
       predictors[msg.sender].teamFour = teamThree;
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 4);
     }
     changedOrderForTop4[msg.sender] = true;
    } 


   function checkUpkeep(bytes calldata /*checkData*/) external view returns (bool upkeepNeeded, bytes memory /*performData*/) {
        bool hasLink = LinkTokenInterface(linkAddress).balanceOf(address(this)) >= 0.0001 * 10 ** 18;
        bool eventHasStarted = block.timestamp > INITIAL_MINTING_PHASE_DEADLINE;
        bool oneDayPassed = block.timestamp > oneDay;
        bool worldCupFinished = currentPhase != GamePhases.WORLD_CUP_FINISHED;
        upkeepNeeded = hasLink && eventHasStarted && oneDayPassed && worldCupFinished;
    }

     function performUpkeep(bytes calldata /*performData*/) external {
      if(currentPhase == GamePhases.MINT) {
        currentPhase = GamePhases.TOP32;
        oneDay = block.timestamp + 24 hours;
      } else if(currentPhase != GamePhases.TOP4) {
         oneDay = block.timestamp + 24 hours;
         IRetrieveRandomNumberAndWorldCupRound(randomAndRoundAddress).fetchCurrentRound();
      } else if(currentPhase == GamePhases.TOP4) {
         if(block.timestamp > WORLD_CUP_ENDS) {
          IRetrieveRandomNumberAndWorldCupRound(randomAndRoundAddress).requestRandomWords();
          currentPhase = GamePhases.CHOOSE_WINNERS;
         }
         oneDay = block.timestamp + 24 hours;
      } else if(currentPhase == GamePhases.CHOOSE_WINNERS) {
          retrievePredictorPoints();
          currentPhase = GamePhases.WORLD_CUP_FINISHED;
      }
    }

  function setRandomAndRoundAddress(address _randomAndRoundAddress) external onlyOwner {
     randomAndRoundAddress = _randomAndRoundAddress;
  }

  function changeThePhase() public {
     require(msg.sender == randomAndRoundAddress, "USER_CANT_CALL_THIS_FUNCTION");
     if(currentPhase == GamePhases.TOP32) {
       currentPhase = GamePhases.TOP16;
     } else if(currentPhase == GamePhases.TOP16) {
        currentPhase = GamePhases.TOP8;
     } else if(currentPhase == GamePhases.TOP8) {
       currentPhase = GamePhases.TOP4;
     }
  }

  function setFirstPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupData16Address 
  || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    firstPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     firstPlaceTeam =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     firstPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     firstPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     firstPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     firstPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     firstPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     firstPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     firstPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      firstPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     firstPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     firstPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     firstPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     firstPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     firstPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     firstPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     firstPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     firstPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     firstPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     firstPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     firstPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     firstPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     firstPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     firstPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     firstPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     firstPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     firstPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    firstPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    firstPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    firstPlaceTeam = worldCupTeams[30];
  }
}

 function setSecondPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupData16Address 
  || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    secondPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     secondPlaceTeam=  worldCupTeams[3];
   } else if(_teamId == 12279) {
     secondPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     secondPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     secondPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     secondPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     secondPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     secondPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     secondPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      secondPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     secondPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     secondPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     secondPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     secondPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     secondPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     secondPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     secondPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     secondPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     secondPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     secondPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     secondPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     secondPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     secondPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     secondPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     secondPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     secondPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     secondPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    secondPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    secondPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    secondPlaceTeam = worldCupTeams[30];
  }
}

 function setThirdPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupData16Address 
  || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    thirdPlaceTeam  =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     thirdPlaceTeam  =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     thirdPlaceTeam  = worldCupTeams[0];
   } else if(_teamId == 56) {
     thirdPlaceTeam  = worldCupTeams[2];
   } else if(_teamId == 12302) {
     thirdPlaceTeam  = worldCupTeams[4];
   } else if(_teamId == 12396) {
     thirdPlaceTeam  = worldCupTeams[5];
   } else if(_teamId == 7850) {
     thirdPlaceTeam  = worldCupTeams[6];
   } else if(_teamId == 14218) {
     thirdPlaceTeam  = worldCupTeams[7];
   } else if(_teamId == 12502) {
     thirdPlaceTeam  = worldCupTeams[8];
   } else if(_teamId == 12473) {
      thirdPlaceTeam  = worldCupTeams[10];
   } else if(_teamId == 3011) {
     thirdPlaceTeam  = worldCupTeams[11];
   } else if(_teamId == 767) {
     thirdPlaceTeam  = worldCupTeams[9];
   } else if(_teamId == 3008) {
     thirdPlaceTeam  = worldCupTeams[14];
   } else if(_teamId == 12300) {
     thirdPlaceTeam  = worldCupTeams[12];
   } else if(_teamId == 73) {
     thirdPlaceTeam  = worldCupTeams[15];
   } else if(_teamId == 3017) {
     thirdPlaceTeam  = worldCupTeams[18];
   } else if(_teamId == 12397) {
     thirdPlaceTeam  = worldCupTeams[19];
   } else if(_teamId == 3024) {
     thirdPlaceTeam  = worldCupTeams[16];
   } else if(_teamId == 3054) {
     thirdPlaceTeam  = worldCupTeams[20];
   } else if(_teamId == 7835) {
     thirdPlaceTeam  = worldCupTeams[21];
   } else if(_teamId == 3026) {
     thirdPlaceTeam  = worldCupTeams[23];
   } else if(_teamId == 52) {
     thirdPlaceTeam  = worldCupTeams[22];
   } else if(_teamId == 12504) {
     thirdPlaceTeam  = worldCupTeams[24];
   } else if(_teamId == 85) {
     thirdPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3036) {
     thirdPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3064) {
     thirdPlaceTeam  = worldCupTeams[26];
  } else if(_teamId == 95) {
     thirdPlaceTeam  = worldCupTeams[29];
  } else if(_teamId == 755) {
    thirdPlaceTeam  = worldCupTeams[31];
  } else if(_teamId == 12299) {
    thirdPlaceTeam  = worldCupTeams[28];
  } else if(_teamId == 12501) {
    thirdPlaceTeam  = worldCupTeams[30];
  }
}

 function setFourthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupData16Address 
  || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    fourthPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     fourthPlaceTeam =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     fourthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     fourthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     fourthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     fourthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     fourthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     fourthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     fourthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      fourthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     fourthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     fourthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     fourthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     fourthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     fourthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     fourthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     fourthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     fourthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     fourthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     fourthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     fourthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     fourthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     fourthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     fourthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     fourthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     fourthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     fourthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    fourthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    fourthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    fourthPlaceTeam = worldCupTeams[30];
  }
}

function depositPoints() external {
  require(currentPhase == GamePhases.CHOOSE_WINNERS, "CANT_DEPOSITS_POINTS_ANYMORE");
  require(depositedPoints[msg.sender] == false, "CANT_DEPOSIT_POINTS_TWICE");
  require(alreadyMinted[msg.sender] == true, "NEVER_MINTED");
  uint index = predictors[msg.sender].predictorIndex;
  Points storage predictor = predictorPoints[index];
  if(keccak256(predictors[msg.sender].teamOne) == keccak256(firstPlaceTeam)) {
     predictor.points += 1000;
  }
   if(keccak256(predictors[msg.sender].teamTwo) == keccak256(secondPlaceTeam)) {
     predictor.points += 500;
  }
   if(keccak256(predictors[msg.sender].teamThree) == keccak256(thirdPlaceTeam)) {
     predictor.points += 250;
  }
   if(keccak256(predictors[msg.sender].teamFour) == keccak256(fourthPlaceTeam)) {
     predictor.points += 125;
  }
  depositedPoints[msg.sender] = true;
}

function retrievePredictorPoints() private {
 for(uint i = 0; i<=predictorPointIndex; i++) {
  Points memory pointer = predictorPoints[i];
   if(pointer.points > highestAmountOfPoints) {
     highestAmountOfPoints = pointer.points;
   } else if(pointer.points > secondHighestAmountOfPoints) {
      secondHighestAmountOfPoints = pointer.points;
   } else if(pointer.points > thirdHighestAmountOfPoints) {
     thirdHighestAmountOfPoints = pointer.points;
   }
 }
 getWinnerCandidates();
}

function getWinnerCandidates() private {
 for(uint i = 0; i<=predictorPointIndex; i++) {
  Points memory pointer = predictorPoints[i];
    if(pointer.points == highestAmountOfPoints) {
       predictorsWithBiggestPoints.push(pointer.predictor);
    } else if(pointer.points == highestAmountOfPoints) {
       predictorsWithSecondBiggestPoints.push(pointer.predictor);
    } else if(pointer.points == thirdHighestAmountOfPoints) {
      predictorsWithThirdBiggestPoints.push(pointer.predictor);
    }
 }
 chooseWinners();
}

function chooseWinners() private {
  address payable winnerOne;
  address payable winnerTwo;
  address payable winnerThree;
  if(predictorsWithBiggestPoints.length == 0 && predictorsWithSecondBiggestPoints.length == 0 && predictorsWithThirdBiggestPoints.length == 0) {
    canReceiveRefund = true;
  } else {
    (bool fulfilled, uint[] memory randomWords) = IRetrieveRandomNumberAndWorldCupRound(randomAndRoundAddress).getRequestStatus();
  if(fulfilled == true) {
    winnerOne = predictorsWithBiggestPoints[randomWords[0] % predictorsWithBiggestPoints.length];
    winnerTwo = predictorsWithSecondBiggestPoints[randomWords[1] % predictorsWithSecondBiggestPoints.length];
    winnerThree = predictorsWithThirdBiggestPoints[randomWords[2] % predictorsWithThirdBiggestPoints.length];
  }
  (bool sent, ) = winnerOne.call{value: ((address(this).balance * 40)/100)}("");
  require(sent, "Failed to send Funds");
  (bool sentTwo, ) = winnerTwo.call{value: ((address(this).balance * 30)/100)}("");
  require(sentTwo, "Failed to send Funds");
  (bool sentThree, ) = winnerThree.call{value: ((address(this).balance * 20)/100)}("");
  require(sentThree, "Failed to send Funds");
  emit Winners(winnerOne, winnerTwo, winnerThree);
  }
}

function setPause(bool _paused) external onlyOwner {
     paused = _paused;
   }

function setRefund(bool _canReceiveRefund) external onlyOwner {
    canReceiveRefund = _canReceiveRefund;
  }


 function receiveBackMoney() external {
     require(balances[msg.sender] != 0, "YOU_HAVE_NO_BALANCE");
     require(canReceiveRefund == true, "NO_REFUNDS_AT_THIS_TIME");
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