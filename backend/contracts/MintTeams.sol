import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MintTeams is ERC1155 {

   AggregatorV3Interface internal priceFeed;
    constructor() ERC1155("") {
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
    }

    function getLatestPrice() public view returns (uint256) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price / 1000000);
    }
    
}