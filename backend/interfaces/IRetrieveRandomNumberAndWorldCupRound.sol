// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IRetrieveRandomNumberAndWorldCupRound {
    function fetchCurrentRound() external returns (bytes32 requestId);
}