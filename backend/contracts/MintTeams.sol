import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


//Quatar - 0-3
//Ecaudor - 4-7
//Senegal - 8-11
//Netherland - 12-15
//England - 16-19
//Iran - 20-23
//USA - 24-27
//Wales - 28-31
//Argentina - 32-35
//Saudi Arabia - 36 - 39
//Mexico - 40-43
//Poland - 44-47
//France - 48-51
//Australia - 52-55
//Denmark - 56-59
//Tunisia - 60-63
//Spain - 64-67
//Costa Rica - 68-71
//Germany - 72-75
//Japan - 76-79
//Belgium - 80-83
//Canada - 84-87
//Morcco - 88-91
//Croatia - 92-95
//Brazil - 96-99
//Serbia - 100-103
//Switzerland - 104-107
//Cameroon - 108-111
//Portugal - 112-115
//Ghana - 116-119
//Uruguay - 120-123
//Korea - 124-127



//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MintTeams is ERC1155 {
    event Mint(address indexed account, uint tokenId, uint256 level);
    event LevelUp(address indexed account, uint tokenId, uint256 level);
   AggregatorV3Interface internal priceFeed;
   bytes[32] worldCupTeams;
    constructor(string memory _name, string memory _symbol)  ERC1155("") {
       priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);

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

    function getLatestPrice() public view returns (uint256) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price / 1000000);
    }

      // Claim a level 1 NFT to start playing but only
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
         _mint(msg.sender, 3, 1);
        emit LevelUp(msg.sender, 3, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _mint(msg.sender, 6, 1);
         emit LevelUp(msg.sender, 6, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _mint(msg.sender, 10, 1);
         emit LevelUp(msg.sender, 10, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
         _mint(msg.sender, 14, 1);
          emit LevelUp(msg.sender, 14, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _mint(msg.sender, 18, 1);
         emit LevelUp(msg.sender, 18, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
         _mint(msg.sender, 22, 1);
         emit LevelUp(msg.sender, 22, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _mint(msg.sender, 26, 1);
         emit LevelUp(msg.sender, 26, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _mint(msg.sender, 30, 1);
         emit LevelUp(msg.sender, 30, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _mint(msg.sender, 34, 1);
         emit LevelUp(msg.sender, 34, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         _mint(msg.sender, 38, 1);
         emit LevelUp(msg.sender, 38, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
         _mint(msg.sender, 42, 1);
         emit LevelUp(msg.sender, 42, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
         _mint(msg.sender, 46, 1);
         emit LevelUp(msg.sender, 46, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _mint(msg.sender, 50, 1);
         emit LevelUp(msg.sender, 50, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
         _mint(msg.sender, 54, 1);
         emit LevelUp(msg.sender, 54, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         _mint(msg.sender, 58, 1);
         emit LevelUp(msg.sender, 58, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
         _mint(msg.sender, 62, 1);
         emit LevelUp(msg.sender, 62, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
         _mint(msg.sender, 66, 1);
         emit LevelUp(msg.sender, 66, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         _mint(msg.sender, 70, 1);
         emit LevelUp(msg.sender, 70, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
         _mint(msg.sender, 74, 1);
         emit LevelUp(msg.sender, 74, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
         _mint(msg.sender, 78, 1);
         emit LevelUp(msg.sender, 78, 4);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
         _mint(msg.sender, 82, 1);
         emit LevelUp(msg.sender, 82, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
         _mint(msg.sender, 86, 1);
         emit LevelUp(msg.sender, 86, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
         _mint(msg.sender, 90, 1);
         emit LevelUp(msg.sender, 90, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _mint(msg.sender, 94, 1);
         emit LevelUp(msg.sender, 94, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
         _mint(msg.sender, 98, 1);
         emit LevelUp(msg.sender, 98, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
         _mint(msg.sender, 102, 1);
         emit LevelUp(msg.sender, 102, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
         _mint(msg.sender, 106, 1);
         emit LevelUp(msg.sender, 106, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
         _mint(msg.sender, 110, 1);
         emit LevelUp(msg.sender, 110, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
         _mint(msg.sender, 114, 1);
         emit LevelUp(msg.sender, 114, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
         _mint(msg.sender, 118, 1);
         emit LevelUp(msg.sender, 118, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
         _mint(msg.sender, 122, 1);
         emit LevelUp(msg.sender, 122, 4);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
         _mint(msg.sender, 126, 1);
         emit LevelUp(msg.sender, 126, 4);
      }
    } 
    
}