import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MintTeams is ERC1155 {
    event Mint(address indexed account, uint tokenId, uint256 level);
    event LevelUp(address indexed account, uint tokenId, uint256 level);
   AggregatorV3Interface internal priceFeed;
   bytes[32] worldCupTeams;
    constructor()  ERC1155("") {
       priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
    }

    function getLatestPrice() public view returns (uint256) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price / 1000000);
    }

    function claimLevel1Nft(string calldata _teamName) public payable {
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
         _mint(msg.sender, 0, 1, "");
        emit Mint(msg.sender, 0, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _mint(msg.sender, 4 , 1, "");
         emit Mint(msg.sender, 4, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _mint(msg.sender, 8 , 1, "");
         emit Mint(msg.sender, 8, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
         _mint(msg.sender, 12 , 1, "");
          emit Mint(msg.sender, 12, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _mint(msg.sender, 16 , 1, "");
         emit Mint(msg.sender, 16, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
         _mint(msg.sender, 20 , 1, "");
         emit Mint(msg.sender, 20, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _mint(msg.sender, 24, 1, "");
         emit Mint(msg.sender, 24, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _mint(msg.sender, 28 , 1, "");
         emit Mint(msg.sender, 28, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _mint(msg.sender, 32, 1, "");
         emit Mint(msg.sender, 32, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         _mint(msg.sender, 36, 1, "");
         emit Mint(msg.sender, 36, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
         _mint(msg.sender, 40, 1, "");
         emit Mint(msg.sender, 40, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
         _mint(msg.sender, 44, 1, "");
         emit Mint(msg.sender, 44, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _mint(msg.sender, 48, 1, "");
         emit Mint(msg.sender, 48, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
         _mint(msg.sender, 52, 1, "");
         emit Mint(msg.sender, 52, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         _mint(msg.sender, 56, 1, "");
         emit Mint(msg.sender, 56, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
         _mint(msg.sender, 60, 1, "");
         emit Mint(msg.sender, 60, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
         _mint(msg.sender, 64, 1, "");
         emit Mint(msg.sender, 64, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         _mint(msg.sender, 68, 1, "");
         emit Mint(msg.sender, 68, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
         _mint(msg.sender, 72, 1, "");
         emit Mint(msg.sender, 72, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
         _mint(msg.sender, 76, 1, "");
         emit Mint(msg.sender, 76, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
         _mint(msg.sender, 80, 1, "");
         emit Mint(msg.sender, 80, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
         _mint(msg.sender, 84, 1, "");
         emit Mint(msg.sender, 84, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
         _mint(msg.sender, 88, 1, "");
         emit Mint(msg.sender, 88, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _mint(msg.sender, 92, 1, "");
         emit Mint(msg.sender, 92, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
         _mint(msg.sender, 96, 1, "");
         emit Mint(msg.sender, 96, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
         _mint(msg.sender, 100, 1, "");
         emit Mint(msg.sender, 100, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
         _mint(msg.sender, 104, 1, "");
         emit Mint(msg.sender, 104, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
         _mint(msg.sender, 108, 1, "");
         emit Mint(msg.sender, 108, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
         _mint(msg.sender, 112, 1, "");
         emit Mint(msg.sender, 112, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
         _mint(msg.sender, 116, 1, "");
         emit Mint(msg.sender, 116, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
         _mint(msg.sender, 120, 1, "");
         emit Mint(msg.sender, 120, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
         _mint(msg.sender, 124, 1, "");
         emit Mint(msg.sender, 124, 1);
      }
    } 

    function claimLevel2Nft(string calldata _teamName) public {
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
         _burn(msg.sender, 0, 1);
         _mint(msg.sender, 1, 1, "");
        emit LevelUp(msg.sender, 1, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _burn(msg.sender, 4, 1);
         _mint(msg.sender, 5, 1, "");
         emit LevelUp(msg.sender, 5, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _burn(msg.sender, 8, 1);
         _mint(msg.sender, 9, 1, "");
         emit LevelUp(msg.sender, 9, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
          _burn(msg.sender, 12, 1);
         _mint(msg.sender, 13, 1, "");
          emit LevelUp(msg.sender, 13, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _burn(msg.sender, 16, 1);
         _mint(msg.sender, 17, 1, "");
         emit LevelUp(msg.sender, 17, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
          _burn(msg.sender, 20, 1);
         _mint(msg.sender, 21, 1, "");
         emit LevelUp(msg.sender, 21, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _burn(msg.sender, 24, 1);
         _mint(msg.sender, 25, 1, "");
         emit LevelUp(msg.sender, 25, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _burn(msg.sender, 28, 1);
         _mint(msg.sender, 29, 1, "");
         emit LevelUp(msg.sender, 29, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _burn(msg.sender, 32, 1);
         _mint(msg.sender, 33, 1, "");
         emit LevelUp(msg.sender, 33, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
          _burn(msg.sender, 36, 1);
         _mint(msg.sender, 37, 1, "");
         emit LevelUp(msg.sender, 37, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          _burn(msg.sender, 40, 1);
         _mint(msg.sender, 41, 1, "");
         emit LevelUp(msg.sender, 41, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
          _burn(msg.sender, 44, 1);
         _mint(msg.sender, 45, 1, "");
         emit LevelUp(msg.sender, 45, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
          _burn(msg.sender, 48, 1);
         _mint(msg.sender, 49, 1, "");
         emit LevelUp(msg.sender, 49, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
          _burn(msg.sender, 52, 1);
         _mint(msg.sender, 53, 1, "");
         emit LevelUp(msg.sender, 53, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
          _burn(msg.sender, 56, 1);
         _mint(msg.sender, 57, 1, "");
         emit LevelUp(msg.sender, 57, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          _burn(msg.sender, 60, 1);
         _mint(msg.sender, 61, 1, "");
         emit LevelUp(msg.sender, 61, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
          _burn(msg.sender, 64, 1);
         _mint(msg.sender, 65, 1, "");
         emit LevelUp(msg.sender, 65, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
          _burn(msg.sender, 68, 1);
         _mint(msg.sender, 69, 1, "");
         emit LevelUp(msg.sender, 69, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
          _burn(msg.sender, 72, 1);
         _mint(msg.sender, 73, 1, "");
         emit LevelUp(msg.sender, 73, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
          _burn(msg.sender, 76, 1);
         _mint(msg.sender, 77, 1, "");
         emit LevelUp(msg.sender, 77, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
          _burn(msg.sender, 80, 1);
         _mint(msg.sender, 81, 1, "");
         emit LevelUp(msg.sender, 81, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
          _burn(msg.sender, 84, 1);
         _mint(msg.sender, 85, 1, "");
         emit LevelUp(msg.sender, 85, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
          _burn(msg.sender, 88, 1);
         _mint(msg.sender, 89, 1, "");
         emit LevelUp(msg.sender, 89, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _burn(msg.sender, 92, 1);
         _mint(msg.sender, 93, 1, "");
         emit LevelUp(msg.sender, 93, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
          _burn(msg.sender, 96, 1);
         _mint(msg.sender, 97, 1, "");
         emit LevelUp(msg.sender, 97, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          _burn(msg.sender, 100, 1);
         _mint(msg.sender, 101, 1, "");
         emit LevelUp(msg.sender, 101, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          _burn(msg.sender, 104, 1);
         _mint(msg.sender, 105, 1, "");
         emit LevelUp(msg.sender, 105, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
          _burn(msg.sender, 108, 1);
         _mint(msg.sender, 109, 1, "");
         emit LevelUp(msg.sender, 109, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
          _burn(msg.sender, 112, 1);
         _mint(msg.sender, 113, 1, "");
         emit LevelUp(msg.sender, 113, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
          _burn(msg.sender, 116, 1);
         _mint(msg.sender, 117, 1, "");
         emit LevelUp(msg.sender, 117, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          _burn(msg.sender, 120, 1);
         _mint(msg.sender, 121, 1, "");
         emit LevelUp(msg.sender, 121, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
          _burn(msg.sender, 124, 1);
         _mint(msg.sender, 125, 1, "");
         emit LevelUp(msg.sender, 125, 2);
      }
    } 

     function claimLevel3Nft(string calldata _teamName) public {
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
          _burn(msg.sender, 1, 1);
         _mint(msg.sender, 2, 1, "");
        emit LevelUp(msg.sender, 2, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
          _burn(msg.sender, 5, 1);
         _mint(msg.sender, 6, 1, "");
         emit LevelUp(msg.sender, 6, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _burn(msg.sender, 9, 1);
         _mint(msg.sender, 10, 1, "");
         emit LevelUp(msg.sender, 10, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
          _burn(msg.sender, 13, 1);
         _mint(msg.sender, 14, 1, "");
          emit LevelUp(msg.sender, 14, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _burn(msg.sender, 17, 1);
         _mint(msg.sender, 18, 1, "");
         emit LevelUp(msg.sender, 18, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
          _burn(msg.sender, 21, 1);
          _mint(msg.sender, 22, 1, "");
         emit LevelUp(msg.sender, 22, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
          _burn(msg.sender, 25, 1);
         _mint(msg.sender, 26, 1, "");
         emit LevelUp(msg.sender, 26, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _burn(msg.sender, 29, 1);
         _mint(msg.sender, 30, 1, "");
         emit LevelUp(msg.sender, 30, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _burn(msg.sender, 33, 1);
         _mint(msg.sender, 34, 1, "");
         emit LevelUp(msg.sender, 34, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         _burn(msg.sender, 37, 1);
         _mint(msg.sender, 38, 1, "");
         emit LevelUp(msg.sender, 38, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          _burn(msg.sender, 41, 1);
         _mint(msg.sender, 42, 1, "");
         emit LevelUp(msg.sender, 42, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
          _burn(msg.sender, 45, 1);
         _mint(msg.sender, 46, 1, "");
         emit LevelUp(msg.sender, 46, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _burn(msg.sender, 49, 1);
         _mint(msg.sender, 50, 1, "");
         emit LevelUp(msg.sender, 50, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
         _burn(msg.sender, 53, 1);
         _mint(msg.sender, 54, 1, "");
         emit LevelUp(msg.sender, 54, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         _burn(msg.sender, 57, 1);
         _mint(msg.sender, 58, 1, "");
         emit LevelUp(msg.sender, 58, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          _burn(msg.sender, 61, 1);
         _mint(msg.sender, 62, 1, "");
         emit LevelUp(msg.sender, 62, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
          _burn(msg.sender, 65, 1);
         _mint(msg.sender, 66, 1, "");
         emit LevelUp(msg.sender, 66, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         _burn(msg.sender, 69, 1);
         _mint(msg.sender, 70, 1, "");
         emit LevelUp(msg.sender, 70, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
          _burn(msg.sender, 73, 1);
         _mint(msg.sender, 74, 1, "");
         emit LevelUp(msg.sender, 74, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
          _burn(msg.sender, 77, 1);
         _mint(msg.sender, 78, 1, "");
         emit LevelUp(msg.sender, 78, 3);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
          _burn(msg.sender, 81, 1);
         _mint(msg.sender, 82, 1, "");
         emit LevelUp(msg.sender, 82, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
          _burn(msg.sender, 85, 1);
         _mint(msg.sender, 86, 1, "");
         emit LevelUp(msg.sender, 86, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
          _burn(msg.sender, 89, 1);
         _mint(msg.sender, 90, 1, "");
         emit LevelUp(msg.sender, 90, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
          _burn(msg.sender, 93, 1);
         _mint(msg.sender, 94, 1, "");
         emit LevelUp(msg.sender, 93, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
          _burn(msg.sender, 97, 1);
         _mint(msg.sender, 98, 1, "");
         emit LevelUp(msg.sender, 98, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          _burn(msg.sender, 101, 1);
         _mint(msg.sender, 102, 1, "");
         emit LevelUp(msg.sender, 102, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          _burn(msg.sender, 105, 1);
         _mint(msg.sender, 106, 1, "");
         emit LevelUp(msg.sender, 106, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
         _burn(msg.sender, 109, 1);
         _mint(msg.sender, 110, 1, "");
         emit LevelUp(msg.sender, 110, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
         _burn(msg.sender, 113, 1);
         _mint(msg.sender, 114, 1, "");
         emit LevelUp(msg.sender, 114, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
          _burn(msg.sender, 117, 1);
         _mint(msg.sender, 118, 1, "");
         emit LevelUp(msg.sender, 118, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          _burn(msg.sender, 121, 1);
         _mint(msg.sender, 122, 1, "");
         emit LevelUp(msg.sender, 122, 3);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
          _burn(msg.sender, 125, 1);
         _mint(msg.sender, 126, 1, "");
         emit LevelUp(msg.sender, 126, 3);
      }
    } 

     function claimLevel4Nft(string calldata _teamName) public {
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
          _burn(msg.sender, 2, 1);
         _mint(msg.sender, 3, 1, "");
        emit LevelUp(msg.sender, 3, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _burn(msg.sender, 6, 1);
         _mint(msg.sender, 7, 1, "");
         emit LevelUp(msg.sender, 7, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
          _burn(msg.sender, 10, 1);
         _mint(msg.sender, 11, 1, "");
         emit LevelUp(msg.sender, 11, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
         _burn(msg.sender, 14, 1);
         _mint(msg.sender, 15, 1, "");
          emit LevelUp(msg.sender, 15, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _burn(msg.sender, 18, 1);
         _mint(msg.sender, 19, 1, "");
         emit LevelUp(msg.sender, 19, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
         _burn(msg.sender, 22, 1);
         _mint(msg.sender, 23, 1, "");
         emit LevelUp(msg.sender, 23, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _burn(msg.sender, 26, 1);
         _mint(msg.sender, 27, 1, "");
         emit LevelUp(msg.sender, 27, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
          _burn(msg.sender, 30, 1);
         _mint(msg.sender, 31, 1, "");
         emit LevelUp(msg.sender, 30, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _burn(msg.sender, 34, 1);
         _mint(msg.sender, 35, 1, "");
         emit LevelUp(msg.sender, 35, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
          _burn(msg.sender, 38, 1);
         _mint(msg.sender, 39, 1, "");
         emit LevelUp(msg.sender, 39, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          _burn(msg.sender, 42, 1);
         _mint(msg.sender, 43, 1, "");
         emit LevelUp(msg.sender, 43, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
         _burn(msg.sender, 46, 1);
         _mint(msg.sender, 47, 1, "");
         emit LevelUp(msg.sender, 47, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _burn(msg.sender, 50, 1);
         _mint(msg.sender, 51, 1, "");
         emit LevelUp(msg.sender, 51, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
          _burn(msg.sender, 54, 1);
         _mint(msg.sender, 55, 1, "");
         emit LevelUp(msg.sender, 55, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         _burn(msg.sender, 58, 1);
         _mint(msg.sender, 59, 1, "");
         emit LevelUp(msg.sender, 59, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          _burn(msg.sender, 62, 1);
         _mint(msg.sender, 63, 1, "");
         emit LevelUp(msg.sender, 63, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
         _burn(msg.sender, 66, 1);
         _mint(msg.sender, 67, 1, "");
         emit LevelUp(msg.sender, 67, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         _burn(msg.sender, 70, 1);
         _mint(msg.sender, 71, 1, "");
         emit LevelUp(msg.sender, 71, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
          _burn(msg.sender, 74, 1);
         _mint(msg.sender, 75, 1, "");
         emit LevelUp(msg.sender, 75, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
         _burn(msg.sender, 78, 1);
         _mint(msg.sender, 79, 1, "");
         emit LevelUp(msg.sender, 79, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
         _burn(msg.sender, 82, 1);
         _mint(msg.sender, 83, 1, "");
         emit LevelUp(msg.sender, 83, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
         _burn(msg.sender, 86, 1);
         _mint(msg.sender, 87, 1, "");
         emit LevelUp(msg.sender, 87, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
         _burn(msg.sender, 90, 1);
         _mint(msg.sender, 91, 1, "");
         emit LevelUp(msg.sender, 91, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _burn(msg.sender, 94, 1);
         _mint(msg.sender, 95, 1, "");
         emit LevelUp(msg.sender, 95, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
         _burn(msg.sender, 98, 1);
         _mint(msg.sender, 99, 1, "");
         emit LevelUp(msg.sender, 99, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          _burn(msg.sender, 102, 1);
         _mint(msg.sender, 103, 1, "");
         emit LevelUp(msg.sender, 103, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          _burn(msg.sender, 106, 1);
         _mint(msg.sender, 107, 1, "");
         emit LevelUp(msg.sender, 107, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
          _burn(msg.sender, 110, 1);
         _mint(msg.sender, 111, 1, "");
         emit LevelUp(msg.sender, 111, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
          _burn(msg.sender, 114, 1);
         _mint(msg.sender, 115, 1, "");
         emit LevelUp(msg.sender, 115, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
         _burn(msg.sender, 118, 1);
         _mint(msg.sender, 119, 1, "");
         emit LevelUp(msg.sender, 119, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          _burn(msg.sender, 122, 1);
         _mint(msg.sender, 123, 1, "");
         emit LevelUp(msg.sender, 123, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
         _burn(msg.sender, 126, 1);
         _mint(msg.sender, 127, 1, "");
         emit LevelUp(msg.sender, 127, 4);
      }
    } 
    
}