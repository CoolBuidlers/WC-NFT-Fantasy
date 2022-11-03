// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface ISetAddresses {
    function setPredictionAddress(address _predictionAddress) external;
    function setWorldCupDataAddress(address _worldCupDataAddress) external;
    function setFetchTeamOne(address _fetchTeamOneAddress) external;
    function setFetchTeamTwo(address _fetchTeamTwoAddress) external;
    function setFetchTeamThree(address _fetchTeamTwoAddress) external;
    function setFetchTeamFour(address _fetchTeamTwoAddress) external;
    function setMintTeamOneAddress(address _mintTeamOneAddress) external;
    function setMintTeamTwoAddress(address _mintTeamTwoAddress) external;
    function setEvolveAddress(address _evolveAddress) external;
    function setRandomAndRoundAddress(address _randomNumberAndRoundAddress) external;
    function setChangeOrderAddress(address _changeOrderAddress) external;
}