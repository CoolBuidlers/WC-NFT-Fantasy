import "../interfaces/IFetchTeams.sol";
import "../interfaces/IMintTeams.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Evolve is Ownable {
address public fetchTeamOneAddress;
address public fetchTeamTwoAddress;
address public fetchTeamThreeAddress;
address public fetchTeamFourAddress;
address public mintTeamOneAddress;
address public mintTeamTwoAddress;


    function getFetchTeamOne(address _fetchTeamOneAddress) external onlyOwner {
       fetchTeamOneAddress = _fetchTeamOneAddress;
    }

     function getFetchTeamTwo(address _fetchTeamTwoAddress) external onlyOwner {
       fetchTeamTwoAddress = _fetchTeamTwoAddress;
    }

     function getFetchTeamThree(address _fetchTeamThreeAddress) external onlyOwner {
       fetchTeamThreeAddress = _fetchTeamThreeAddress;
    }

      function getFetchTeamFour(address _fetchTeamFourAddress) external onlyOwner {
       fetchTeamFourAddress = _fetchTeamFourAddress;
    }

    function getMintTeamOneAddress(address _mintTeamOneAddress) external onlyOwner {
      mintTeamOneAddress = _mintTeamOneAddress;
    }

     function getMintTeamTwoAddress(address _mintTeamTwoAddress) external onlyOwner {
      mintTeamTwoAddress = _mintTeamTwoAddress;
    }
  
  function evolveToLevel2(string calldata _teamName) external {
    bytes[] memory teams = new bytes[](16);
    bool teamsMatch;
    teams[0] = IFetchTeams(fetchTeamOneAddress).getFirstPlaceTeam();
    teams[1] = IFetchTeams(fetchTeamOneAddress).getSecondPlaceTeam();
    teams[2] = IFetchTeams(fetchTeamOneAddress).getThirdPlaceTeam();
    teams[3] = IFetchTeams(fetchTeamOneAddress).getFourthPlaceTeam();
    teams[4] = IFetchTeams(fetchTeamTwoAddress).getFifthPlaceTeam();
    teams[5] = IFetchTeams(fetchTeamTwoAddress).getSixthPlaceTeam();
    teams[6] = IFetchTeams(fetchTeamTwoAddress).getSeventhPlaceTeam();
    teams[7] = IFetchTeams(fetchTeamTwoAddress).getEighthPlaceTeam();
    teams[8] = IFetchTeams(fetchTeamThreeAddress).getNinthPlaceTeam();
    teams[9] = IFetchTeams(fetchTeamThreeAddress).getTenthPlaceTeam();
    teams[10] = IFetchTeams(fetchTeamThreeAddress).getEleventhPlaceTeam();
    teams[11] = IFetchTeams(fetchTeamThreeAddress).getTwelfthPlaceTeam();
    teams[12] = IFetchTeams(fetchTeamFourAddress).getThirteenthPlaceTeam();
    teams[13] = IFetchTeams(fetchTeamFourAddress).getFourteenthPlaceTeam();
    teams[14] = IFetchTeams(fetchTeamFourAddress).getFifteenthPlaceTeam();
    teams[15] = IFetchTeams(fetchTeamFourAddress).getSixteenthPlaceTeam();
    
    for(uint i = 0; i < teams.length; i++) {
       if(keccak256(abi.encode(_teamName)) == keccak256(teams[i])) {
          teamsMatch = true;
          break;
       }
    }
    if(teamsMatch == false) {
        revert("TEAM_NOT_IN_TOP_16");
    } else {
      IMintTeams(mintTeamOneAddress).claimLevel2Nft(msg.sender, _teamName);
    }
  }

  function evolveToLevel3(string calldata _teamName) external {
    bytes[] memory teams = new bytes[](8);
    bool teamsMatch;
    teams[0] = IFetchTeams(fetchTeamOneAddress).getFirstPlaceTeam();
    teams[1] = IFetchTeams(fetchTeamOneAddress).getSecondPlaceTeam();
    teams[2] = IFetchTeams(fetchTeamOneAddress).getThirdPlaceTeam();
    teams[3] = IFetchTeams(fetchTeamOneAddress).getFourthPlaceTeam();
    teams[4] = IFetchTeams(fetchTeamTwoAddress).getFifthPlaceTeam();
    teams[5] = IFetchTeams(fetchTeamTwoAddress).getSixthPlaceTeam();
    teams[6] = IFetchTeams(fetchTeamTwoAddress).getSeventhPlaceTeam();
    teams[7] = IFetchTeams(fetchTeamTwoAddress).getEighthPlaceTeam();
    
    for(uint i = 0; i < teams.length; i++) {
       if(keccak256(abi.encode(_teamName)) == keccak256(teams[i])) {
          teamsMatch = true;
          break;
       }
    }
    if(teamsMatch == false) {
        revert("TEAM_NOT_IN_TOP_8");
    } else {
      IMintTeams(mintTeamTwoAddress).claimLevel3Nft(msg.sender, _teamName);
    }
  }

  function evolveToLevel4(string calldata _teamName) external {
    bytes[] memory teams = new bytes[](4);
    bool teamsMatch;
    teams[0] = IFetchTeams(fetchTeamOneAddress).getFirstPlaceTeam();
    teams[1] = IFetchTeams(fetchTeamOneAddress).getSecondPlaceTeam();
    teams[2] = IFetchTeams(fetchTeamOneAddress).getThirdPlaceTeam();
    teams[3] = IFetchTeams(fetchTeamOneAddress).getFourthPlaceTeam();
    
    for(uint i = 0; i < teams.length; i++) {
       if(keccak256(abi.encode(_teamName)) == keccak256(teams[i])) {
          teamsMatch = true;
          break;
       }
    }
    if(teamsMatch == false) {
        revert("TEAM_NOT_IN_TOP_4");
    } else {
      IMintTeams(mintTeamTwoAddress).claimLevel4Nft(msg.sender, _teamName);
    }
  }
}
