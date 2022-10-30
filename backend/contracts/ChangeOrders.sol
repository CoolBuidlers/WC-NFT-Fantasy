import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../interfaces/IPrediction.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ChangeOrders is Ownable, ReentrancyGuard {
event TeamsSwapped(address predictor, bytes firstTeam, bytes secondTeam, uint round);
address public predictionAddress;
bool paused;
modifier onlyWhenNotPaused {
     require(paused == false, "CONTRACT_IS_PAUSED");
     _;
   }

function setPredictionAddress(address _predictionAddress) external onlyOwner {
  predictionAddress = _predictionAddress;
}

function setPause(bool _paused) external onlyOwner {
     paused = _paused;
   }

function changeOrderForTop32(uint _scenario) external nonReentrant onlyWhenNotPaused {
    bool isTop32 = IPrediction(predictionAddress).isPhase32();
    bool alreadyMinted = IPrediction(predictionAddress).haveYouMinted(msg.sender);
    bool mintedExtraTwo = IPrediction(predictionAddress).mintedExtraTwo(msg.sender);
    bool changed = IPrediction(predictionAddress).changedOrder(msg.sender, 32);
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(isTop32 == true, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changed == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 32
     if(_scenario == 1) {   
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamTwo);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 32);
     } else if(_scenario == 2) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamThree);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 32);
     } else if(_scenario == 3) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFour);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 32);
     } else if(_scenario == 4) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFive, 32);
     } else if(_scenario == 5) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamSix);
       IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamSix, 32);
     } else if(_scenario == 6) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamThree);
       IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 32);
     } else if(_scenario == 7) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
        IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFour);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 32);
     } else if(_scenario == 8) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFive, 32);
     } else if(_scenario == 9) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamSix);
       IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamSix, 32);
     } else if(_scenario == 10) {
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFour);
      IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 32);
     } else if(_scenario == 11) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
        IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFive);
        IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFive, 32);
     } else if(_scenario == 12) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
        IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamSix);
        IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamSix, 32);
     } else if(_scenario == 13) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamFour);
       emit TeamsSwapped(msg.sender, teamFour, teamFive, 32);
     } else if(_scenario == 14) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamSix);
        IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamFour);
       emit TeamsSwapped(msg.sender, teamFour, teamSix, 32);
     }
     IPrediction(predictionAddress).setOrder(msg.sender, 32);
    } 

    function changeOrderForTop16(uint _scenario) external nonReentrant onlyWhenNotPaused {
    bool isTop16 = IPrediction(predictionAddress).isPhase16();
    bool alreadyMinted = IPrediction(predictionAddress).haveYouMinted(msg.sender);
    bool mintedExtraTwo = IPrediction(predictionAddress).mintedExtraTwo(msg.sender);
    bool changed = IPrediction(predictionAddress).changedOrder(msg.sender, 16);
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(isTop16 == true, "TOP_16_HASNT_FINISHED");
    require(alreadyMinted == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changed == false, "CANT_CHANGE_TEAMS_TWICE");
      if(_scenario == 1) {   
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamTwo);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 16);
     } else if(_scenario == 2) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamThree);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 16);
     } else if(_scenario == 3) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFour);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 16);
     } else if(_scenario == 4) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFive, 16);
     } else if(_scenario == 5) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamSix);
       IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamSix, 16);
     } else if(_scenario == 6) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamThree);
       IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 16);
     } else if(_scenario == 7) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
        IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFour);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 16);
     } else if(_scenario == 8) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFive, 16);
     } else if(_scenario == 9) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamSix);
       IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamSix, 16);
     } else if(_scenario == 10) {
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFour);
      IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 16);
     } else if(_scenario == 11) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
        IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFive);
        IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFive, 16);
     } else if(_scenario == 12) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
        IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamSix);
        IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamSix, 16);
     } else if(_scenario == 13) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       bytes memory teamFive = IPrediction(predictionAddress).getPrediction(msg.sender, 5);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamFive);
       IPrediction(predictionAddress).setFifthPrediction(msg.sender, teamFour);
       emit TeamsSwapped(msg.sender, teamFour, teamFive, 16);
     } else if(_scenario == 14) {
       require(mintedExtraTwo == true, "DIDNT_MINT_PASS_FOUR_TEAMS");
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       bytes memory teamSix = IPrediction(predictionAddress).getPrediction(msg.sender, 6);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamSix);
        IPrediction(predictionAddress).setSixthPrediction(msg.sender, teamFour);
       emit TeamsSwapped(msg.sender, teamFour, teamSix, 16);
     }
     IPrediction(predictionAddress).setOrder(msg.sender, 16);
    } 
    
  function changeOrderForTop8(uint _scenario) external nonReentrant onlyWhenNotPaused {
    bool isTop8 = IPrediction(predictionAddress).isPhase8();
    bool alreadyMinted = IPrediction(predictionAddress).haveYouMinted(msg.sender);
    bool changed = IPrediction(predictionAddress).changedOrder(msg.sender, 8);
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(isTop8 == true, "INITIAL_MINTING_PHASE_HASNT_FINISHED");
    require(alreadyMinted == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changed == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 8
     if(_scenario == 1) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamTwo);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 8);
     } else if(_scenario == 2) {
      bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamThree);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 8);
     } else if(_scenario == 3) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFour);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 8);
     } else if(_scenario == 4) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamThree);
       IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 8);
     } else if(_scenario == 5) {
        bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
        bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
        IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFour);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 8);
     } else if(_scenario == 6) {
     bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
     bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFour);
      IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 8);
     }
     IPrediction(predictionAddress).setOrder(msg.sender, 8);
    } 
    
    function changeOrderForTop4(uint _scenario) external nonReentrant onlyWhenNotPaused {
    bool isTop4 = IPrediction(predictionAddress).isPhase4();
    bool alreadyMinted = IPrediction(predictionAddress).haveYouMinted(msg.sender);
    bool changed = IPrediction(predictionAddress).changedOrder(msg.sender, 4);
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(isTop4 == true, "TOP_4_HASNT_FINISHED");
    require(alreadyMinted == true, "MINT_FIRST_FOUR_TEAMS_FIRST");
    require(changed == false, "CANT_CHANGE_TEAMS_TWICE");
    //Conditional statements specify each swapping possibility in swapping different teams for top 4
     if(_scenario == 1) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamTwo);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamTwo, 8);
     } else if(_scenario == 2) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamThree);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamThree, 8);
     } else if(_scenario == 3) {
       bytes memory teamOne = IPrediction(predictionAddress).getPrediction(msg.sender, 1);
       bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
       IPrediction(predictionAddress).setFirstPrediction(msg.sender, teamFour);
       IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamOne);
       emit TeamsSwapped(msg.sender, teamOne, teamFour, 8);
     } else if(_scenario == 4) {
       bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
       bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
       IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamThree);
       IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamThree, 8);
     } else if(_scenario == 5) {
        bytes memory teamTwo = IPrediction(predictionAddress).getPrediction(msg.sender, 2);
        bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
        IPrediction(predictionAddress).setSecondPrediction(msg.sender, teamFour);
        IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamTwo);
       emit TeamsSwapped(msg.sender, teamTwo, teamFour, 8);
     } else if(_scenario == 6) {
     bytes memory teamThree = IPrediction(predictionAddress).getPrediction(msg.sender, 3);
     bytes memory teamFour = IPrediction(predictionAddress).getPrediction(msg.sender, 4);
      IPrediction(predictionAddress).setThirdPrediction(msg.sender, teamFour);
      IPrediction(predictionAddress).setFourthPrediction(msg.sender, teamThree);
       emit TeamsSwapped(msg.sender, teamThree, teamFour, 8);
     }
     IPrediction(predictionAddress).setOrder(msg.sender, 4);
    } 

}

