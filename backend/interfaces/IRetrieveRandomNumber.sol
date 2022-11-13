// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IRetrieveRandomNumber {
    function requestRandomWords() external returns (uint256 requestId);
    function getRequestStatus() external view returns (bool fulfilled, uint256[] memory randomWords);
}