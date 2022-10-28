//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


interface IPrediction {
   function changeThePhase() external;
   function setFirstPrediction(address _predictor, bytes memory _team) external;
   function setSecondPrediction(address _predictor, bytes memory _team) external;
   function setThirdPrediction(address _predictor, bytes memory _team) external;
   function setFourthPrediction(address _predictor, bytes memory _team) external;
   function setFifthPrediction(address _predictor, bytes memory _team) external;
   function setSixthPrediction(address _predictor, bytes memory _team) external;
   function getPrediction(address _predictor, uint _num) external view returns(bytes memory team);
   function isPhase32() external view returns(bool);
   function isPhase16() external view returns(bool);
   function isPhase8() external view returns(bool);
   function isPhase4() external view returns(bool);
   function haveYouMinted(address _predictor) external view returns(bool);
   function mintedExtraTwo(address _predictor) external view returns(bool);
   function changedOrder(address _predictor, uint _num) external view returns(bool);
   function setOrder(address _predictor, uint _num) external;
}