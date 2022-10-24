//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


interface IPrediction {
   function changeThePhase() external;
   function setFirstPlaceTeam(uint _teamId) external;
}