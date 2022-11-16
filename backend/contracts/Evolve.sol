import "../interfaces/IFetchTeams.sol";
import "../interfaces/IMintTeams.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../interfaces/IPrediction.sol";


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Evolve is Ownable, ReentrancyGuard {
address public fetchTeamOneAddress;
address public fetchTeamTwoAddress;
address public fetchTeamThreeAddress;
address public fetchTeamFourAddress;
address public mintTeamOneAddress;
address public mintTeamTwoAddress;
address public predictionAddress;
mapping(bytes => mapping(address => bool)) alreadyEvolved2;
mapping(bytes => mapping(address => bool)) alreadyEvolved3;
mapping(bytes => mapping(address => bool)) alreadyEvolved4;

bool paused;
modifier onlyWhenNotPaused {
     require(paused == false, "CONTRACT_IS_PAUSED");
     _;
   }

function setPause(bool _paused) external onlyOwner {
     paused = _paused;
   }

   function setAddresses(address _predictionAddress, address _fetchTeamOneAddress, address _fetchTeamTwoAddress, address _fetchTeamThreeAddress, address _fetchTeamFourAddress, address _mintTeamOneAddress, address _mintTeamTwoAddress) external onlyOwner {
     setPredictionAddress(_predictionAddress);
     getFetchTeamOne(_fetchTeamOneAddress);
     getFetchTeamTwo(_fetchTeamTwoAddress);
     getFetchTeamThree(_fetchTeamThreeAddress);
     getFetchTeamFour(_fetchTeamFourAddress);
     getMintTeamOneAddress(_mintTeamOneAddress);
     getMintTeamTwoAddress(_mintTeamTwoAddress);
   }

    function setPredictionAddress(address _predictionAddress) internal {
    predictionAddress = _predictionAddress;
 }


    function getFetchTeamOne(address _fetchTeamOneAddress) internal {
       fetchTeamOneAddress = _fetchTeamOneAddress;
    }

     function getFetchTeamTwo(address _fetchTeamTwoAddress) internal {
       fetchTeamTwoAddress = _fetchTeamTwoAddress;
    }

     function getFetchTeamThree(address _fetchTeamThreeAddress) internal {
       fetchTeamThreeAddress = _fetchTeamThreeAddress;
    }

      function getFetchTeamFour(address _fetchTeamFourAddress) internal {
       fetchTeamFourAddress = _fetchTeamFourAddress;
    }

    function getMintTeamOneAddress(address _mintTeamOneAddress) internal {
      mintTeamOneAddress = _mintTeamOneAddress;
    }

     function getMintTeamTwoAddress(address _mintTeamTwoAddress) internal {
      mintTeamTwoAddress = _mintTeamTwoAddress;
    }
  
  function evolveToLevel2(string calldata _teamName) external nonReentrant onlyWhenNotPaused  {
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(alreadyEvolved2[abi.encode(_teamName)][msg.sender] == false, "YOU_HAVE_ALREADY_EVOLVED");
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
      alreadyEvolved2[abi.encode(_teamName)][msg.sender] = true;
      IMintTeams(mintTeamOneAddress).claimLevel2Nft(msg.sender, _teamName);
    }
  }

  function evolveToLevel3(string calldata _teamName) external nonReentrant onlyWhenNotPaused  {
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(alreadyEvolved3[abi.encode(_teamName)][msg.sender] == false, "YOU_HAVE_ALREADY_EVOLVED");
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
      alreadyEvolved3[abi.encode(_teamName)][msg.sender] = true;
      IMintTeams(mintTeamTwoAddress).claimLevel3Nft(msg.sender, _teamName);
    }
  }

  function evolveToLevel4(string calldata _teamName) external nonReentrant onlyWhenNotPaused  {
    bool beenThreeMinutes = IPrediction(predictionAddress).hasItBeenThreeMinutes();
    require(beenThreeMinutes == true, "WAIT_FOR_CONFIRMATION");
    require(alreadyEvolved4[abi.encode(_teamName)][msg.sender] == false, "YOU_HAVE_ALREADY_EVOLVED");
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
      alreadyEvolved4[abi.encode(_teamName)][msg.sender] = true;
      IMintTeams(mintTeamTwoAddress).claimLevel4Nft(msg.sender, _teamName);
    }
  }
  
  function haveYouEvolvedAlready(string calldata teamName, uint _evolveLevel) external view returns(bool evolvedAlready) {
    if(_evolveLevel == 2) {
      return alreadyEvolved2[abi.encode(teamName)][msg.sender];
    } else if(_evolveLevel == 3) {
      return alreadyEvolved3[abi.encode(teamName)][msg.sender];
    } else if(_evolveLevel == 4) {
      return alreadyEvolved4[abi.encode(teamName)][msg.sender];
    }
  }
}