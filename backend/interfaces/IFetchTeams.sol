//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IFetchTeams {
    function setFirstPlaceTeam(uint _teamId) external;
    function setSecondPlaceTeam(uint _teamId) external;
    function setThirdPlaceTeam(uint _teamId) external;
    function setFourthPlaceTeam(uint _teamId) external;
    function setFifthPlaceTeam(uint _teamId) external;
    function setSixthPlaceTeam(uint _teamId) external;
    function setSeventhPlaceTeam(uint _teamId) external;
    function setEighthPlaceTeam(uint _teamId) external;
    function setNinthPlaceTeam(uint _teamId) external;
    function setTenthPlaceTeam(uint _teamId) external;
    function setEleventhPlaceTeam(uint _teamId) external;
    function setTwelfthPlaceTeam(uint _teamId) external;
    function setThirteenthPlaceTeam(uint _teamId) external;
    function setFourteenthPlaceTeam(uint _teamId) external;
    function setFifteenthPlaceTeam(uint _teamId) external;
    function setSixteenthPlaceTeam(uint _teamId) external;
    function getFirstPlaceTeam() external view returns(bytes memory team);
    function getSecondPlaceTeam() external view returns(bytes memory team);
    function getThirdPlaceTeam() external view returns(bytes memory team);
    function getFourthPlaceTeam() external view returns(bytes memory team);
}