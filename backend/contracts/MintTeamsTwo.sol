import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IPrediction.sol";
import "../interfaces/IMintTeams.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MintTeamsTwo is Ownable {
    event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
    address public evolveAddress;
    address public predictionAddress;
    address public  mintTeamsOneAddress;
   bytes[32] worldCupTeams;
   constructor() {
      //Group A
         worldCupTeams[0] = abi.encode("Qatar");
         worldCupTeams[1] = abi.encode("Ecuador");
         worldCupTeams[2] = abi.encode("Senegal");
         worldCupTeams[3] = abi.encode("Netherlands");

        //Group B
         worldCupTeams[4] = abi.encode("England");
         worldCupTeams[5] = abi.encode("IR Iran");
         worldCupTeams[6] = abi.encode("USA");
         worldCupTeams[7] = abi.encode("Wales");

         //Group C
         worldCupTeams[8] = abi.encode("Argentina");
         worldCupTeams[9] = abi.encode("Saudi Arabia");
         worldCupTeams[10] = abi.encode("Mexico");
         worldCupTeams[11] = abi.encode("Poland");

         //Group D
         worldCupTeams[12] = abi.encode("France");
         worldCupTeams[13] = abi.encode("Australia");
         worldCupTeams[14] = abi.encode("Denmark");
         worldCupTeams[15] = abi.encode("Tunisia");

         //Group E
         worldCupTeams[16] = abi.encode("Spain");
         worldCupTeams[17] = abi.encode("Costa Rica");
         worldCupTeams[18] = abi.encode("Germany");
         worldCupTeams[19] = abi.encode("Japan");

         //Group F
         worldCupTeams[20] = abi.encode("Belgium");
         worldCupTeams[21] = abi.encode("Canada");
         worldCupTeams[22] = abi.encode("Morocco");
         worldCupTeams[23] = abi.encode("Croatia");

         //Group G
         worldCupTeams[24] = abi.encode("Brazil");
         worldCupTeams[25] = abi.encode("Serbia");
         worldCupTeams[26] = abi.encode("Switzerland");
         worldCupTeams[27] = abi.encode("Cameroon");

         //Group H
         worldCupTeams[28] = abi.encode("Portugal");
         worldCupTeams[29] = abi.encode("Ghana");
         worldCupTeams[30] = abi.encode("Uruguay");
         worldCupTeams[31] = abi.encode("Korea Republic");
   }
    function setPredictionAddress(address _predictionAddress) external onlyOwner {
       predictionAddress = _predictionAddress;
    }

    function setEvolveAddress(address _evolveAddress) external onlyOwner {
       evolveAddress = _evolveAddress;
    }

     function setMintTeamsOneAddress(address _mintTeamsOneAddress) external onlyOwner {
      mintTeamsOneAddress = _mintTeamsOneAddress;
    }

     function claimLevel3Nft(address _predictor, string calldata _teamName) public {
      require(msg.sender == evolveAddress, "USER_CANT_CALL_FUNCTION");
      bool isTop8 = IPrediction(predictionAddress).isPhase8();
      require(isTop8 == true, "TOP_8_HASNT_FINISHED");
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 1, 1);
         IMintTeams(mintTeamsOneAddress).mint(_predictor, 2, 1, "");
        emit LevelUp(_predictor, 2, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 5, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 6, 1, "");
         emit LevelUp(_predictor, 6, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 9, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 10, 1, "");
         emit LevelUp(_predictor, 10, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 13, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 14, 1, "");
          emit LevelUp(_predictor, 14, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 17, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 18, 1, "");
         emit LevelUp(_predictor, 18, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 21, 1);
           IMintTeams(mintTeamsOneAddress).mint(_predictor, 22, 1, "");
         emit LevelUp(_predictor, 22, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 25, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 26, 1, "");
         emit LevelUp(_predictor, 26, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 29, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 30, 1, "");
         emit LevelUp(_predictor, 30, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 33, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 34, 1, "");
         emit LevelUp(_predictor, 34, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 37, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 38, 1, "");
         emit LevelUp(_predictor, 38, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 41, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 42, 1, "");
         emit LevelUp(_predictor, 42, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 45, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 46, 1, "");
         emit LevelUp(_predictor, 46, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 49, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 50, 1, "");
         emit LevelUp(_predictor, 50, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 53, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 54, 1, "");
         emit LevelUp(_predictor, 54, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 57, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 58, 1, "");
         emit LevelUp(_predictor, 58, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 61, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 62, 1, "");
         emit LevelUp(_predictor, 62, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 65, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 66, 1, "");
         emit LevelUp(_predictor, 66, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 69, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 70, 1, "");
         emit LevelUp(_predictor, 70, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 73, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 74, 1, "");
         emit LevelUp(_predictor, 74, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 77, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 78, 1, "");
         emit LevelUp(_predictor, 78, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 81, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 82, 1, "");
         emit LevelUp(_predictor, 82, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 85, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 86, 1, "");
         emit LevelUp(_predictor, 86, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 89, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 90, 1, "");
         emit LevelUp(_predictor, 90, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 93, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 94, 1, "");
         emit LevelUp(_predictor, 94, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 97, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 98, 1, "");
         emit LevelUp(_predictor, 98, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 101, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 102, 1, "");
         emit LevelUp(_predictor, 102, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 105, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 106, 1, "");
         emit LevelUp(_predictor, 106, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 109, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 110, 1, "");
         emit LevelUp(_predictor, 110, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 113, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 114, 1, "");
         emit LevelUp(_predictor, 114, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 117, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 118, 1, "");
         emit LevelUp(_predictor, 118, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 121, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 122, 1, "");
         emit LevelUp(_predictor, 122, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 125, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 126, 1, "");
         emit LevelUp(_predictor, 126, 3);
      }
    } 

     function claimLevel4Nft(address _predictor, string calldata _teamName) public {
      require(msg.sender == evolveAddress, "USER_CANT_CALL_FUNCTION");
      bool isTop4 = IPrediction(predictionAddress).isPhase4();
      require(isTop4 == true, "TOP_4_HASNT_FINISHED");
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 2, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 3, 1, "");
        emit LevelUp(_predictor, 3, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 6, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 7, 1, "");
         emit LevelUp(_predictor, 7, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 10, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 11, 1, "");
         emit LevelUp(_predictor, 11, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 14, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 15, 1, "");
          emit LevelUp(_predictor, 15, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 18, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 19, 1, "");
         emit LevelUp(_predictor, 19, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 22, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 23, 1, "");
         emit LevelUp(_predictor, 23, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 26, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 27, 1, "");
         emit LevelUp(_predictor, 27, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 30, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 31, 1, "");
         emit LevelUp(_predictor, 31, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 34, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 35, 1, "");
         emit LevelUp(_predictor, 35, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 38, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 39, 1, "");
         emit LevelUp(_predictor, 39, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 42, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 43, 1, "");
         emit LevelUp(_predictor, 43, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 46, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 47, 1, "");
         emit LevelUp(_predictor, 47, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 50, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 51, 1, "");
         emit LevelUp(_predictor, 51, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 54, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 55, 1, "");
         emit LevelUp(_predictor, 55, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 58, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 59, 1, "");
         emit LevelUp(_predictor, 59, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 62, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 63, 1, "");
         emit LevelUp(_predictor, 63, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 66, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 67, 1, "");
         emit LevelUp(_predictor, 67, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 70, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 71, 1, "");
         emit LevelUp(_predictor, 71, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 74, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 75, 1, "");
         emit LevelUp(_predictor, 75, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 78, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 79, 1, "");
         emit LevelUp(_predictor, 79, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 82, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 83, 1, "");
         emit LevelUp(_predictor, 83, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 86, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 87, 1, "");
         emit LevelUp(_predictor, 87, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 90, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 91, 1, "");
         emit LevelUp(_predictor, 91, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 94, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 95, 1, "");
         emit LevelUp(_predictor, 95, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 98, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 99, 1, "");
         emit LevelUp(_predictor, 99, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 102, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 103, 1, "");
         emit LevelUp(_predictor, 103, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 106, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 107, 1, "");
         emit LevelUp(_predictor, 107, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 110, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 111, 1, "");
         emit LevelUp(_predictor, 111, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 114, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 115, 1, "");
         emit LevelUp(_predictor, 115, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 118, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 119, 1, "");
         emit LevelUp(_predictor, 119, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          IMintTeams(mintTeamsOneAddress).burn(_predictor, 122, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 123, 1, "");
         emit LevelUp(_predictor, 123, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
         IMintTeams(mintTeamsOneAddress).burn(_predictor, 126, 1);
          IMintTeams(mintTeamsOneAddress).mint(_predictor, 127, 1, "");
         emit LevelUp(_predictor, 127, 4);
      }
    } 
}