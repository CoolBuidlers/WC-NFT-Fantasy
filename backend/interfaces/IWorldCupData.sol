// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IWorldCupData {
     function fetchTop16Teams() external;
     function fetchTop8Teams() external;
     function fetchTop4Teams() external;
}