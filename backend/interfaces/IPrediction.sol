//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


interface IPrediction {
   function changeThePhase() external;
   function setFirstPlaceTeam(uint _teamId) external;
   function setSecondPlaceTeam(uint _teamId) external;
   function setThirdPlaceTeam(uint _teamId) external;
   function setFourthPlaceTeam(uint _teamId) external;
}