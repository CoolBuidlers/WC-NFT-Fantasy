//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IFetchTeams {
    function setFirstPlaceTeam(string memory _teamId) external;
    function setSecondPlaceTeam(string memory _teamId) external;
    function setThirdPlaceTeam(string memory _teamId) external;
    function setFourthPlaceTeam(string memory _teamId) external;
    function setFifthPlaceTeam(string memory _teamId) external;
    function setSixthPlaceTeam(string memory _teamId) external;
    function setSeventhPlaceTeam(string memory _teamId) external;
    function setEighthPlaceTeam(string memory _teamId) external;
    function setNinthPlaceTeam(string memory _teamId) external;
    function setTenthPlaceTeam(string memory _teamId) external;
    function setEleventhPlaceTeam(string memory _teamId) external;
    function setTwelfthPlaceTeam(string memory _teamId) external;
    function setThirteenthPlaceTeam(string memory _teamId) external;
    function setFourteenthPlaceTeam(string memory _teamId) external;
    function setFifteenthPlaceTeam(string memory _teamId) external;
    function setSixteenthPlaceTeam(string memory _teamId) external;
    function getFirstPlaceTeam() external view returns(bytes memory team);
    function getSecondPlaceTeam() external view returns(bytes memory team);
    function getThirdPlaceTeam() external view returns(bytes memory team);
    function getFourthPlaceTeam() external view returns(bytes memory team);
    function getFifthPlaceTeam() external view returns(bytes memory team);
    function getSixthPlaceTeam() external view returns(bytes memory team);
    function getSeventhPlaceTeam() external view returns(bytes memory team);
    function getEighthPlaceTeam() external view returns(bytes memory team);
    function getNinthPlaceTeam() external view returns(bytes memory team);
    function getTenthPlaceTeam() external view returns(bytes memory team);
    function getEleventhPlaceTeam() external view returns(bytes memory team);
    function getTwelfthPlaceTeam() external view returns(bytes memory team);
    function getThirteenthPlaceTeam() external view returns(bytes memory team);
    function getFourteenthPlaceTeam() external view returns(bytes memory team);
    function getFifteenthPlaceTeam() external view returns(bytes memory team);
    function getSixteenthPlaceTeam() external view returns(bytes memory team);
}