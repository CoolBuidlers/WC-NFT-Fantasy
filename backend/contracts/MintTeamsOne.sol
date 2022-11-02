import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IPrediction.sol";


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MintTeamsOne is ERC1155, Ownable {
   event Mint(address account, uint indexed tokenId, uint256 indexed level);
   event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
   address public predictionAddress;
   address public evolveAddress;
   address public mintTeamsTwoAddress;
   uint constant WORLD_CUP_ENDS = 1671429600;
   bytes[32] worldCupTeams;

   modifier afterEvent {
     require(block.timestamp > WORLD_CUP_ENDS, "CANT_TRANSFER_YET");
      _;
   }

    constructor()  ERC1155("") {
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

    function setMintTeamsTwoAddress(address _mintTeamsTwoAddress) external onlyOwner {
      mintTeamsTwoAddress = _mintTeamsTwoAddress;
    }

     function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override afterEvent {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );
        _safeTransferFrom(from, to, id, amount, data);
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override afterEvent {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );
        _safeBatchTransferFrom(from, to, ids, amounts, data);
    }

    function claimLevel1Nft(address _predictor, string calldata _teamName) public {
     require(msg.sender == predictionAddress, "USER_CANT_CALL_FUNCTION");
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
         _mint(_predictor, 0, 1, "");
        emit Mint(_predictor, 0, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _mint(_predictor, 4 , 1, "");
         emit Mint(_predictor, 4, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _mint(_predictor, 8 , 1, "");
         emit Mint(_predictor, 8, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
         _mint(_predictor, 12 , 1, "");
          emit Mint(_predictor, 12, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _mint(_predictor, 16 , 1, "");
         emit Mint(_predictor, 16, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
         _mint(_predictor, 20 , 1, "");
         emit Mint(_predictor, 20, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _mint(_predictor, 24, 1, "");
         emit Mint(_predictor, 24, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _mint(_predictor, 28 , 1, "");
         emit Mint(_predictor, 28, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _mint(_predictor, 32, 1, "");
         emit Mint(_predictor, 32, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         _mint(_predictor, 36, 1, "");
         emit Mint(_predictor, 36, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
         _mint(_predictor, 40, 1, "");
         emit Mint(_predictor, 40, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
         _mint(_predictor, 44, 1, "");
         emit Mint(_predictor, 44, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _mint(_predictor, 48, 1, "");
         emit Mint(_predictor, 48, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
         _mint(_predictor, 52, 1, "");
         emit Mint(_predictor, 52, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
         _mint(_predictor, 56, 1, "");
         emit Mint(_predictor, 56, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
         _mint(_predictor, 60, 1, "");
         emit Mint(_predictor, 60, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
         _mint(_predictor, 64, 1, "");
         emit Mint(_predictor, 64, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
         _mint(_predictor, 68, 1, "");
         emit Mint(_predictor, 68, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
         _mint(_predictor, 72, 1, "");
         emit Mint(_predictor, 72, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
         _mint(_predictor, 76, 1, "");
         emit Mint(_predictor, 76, 1);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
         _mint(_predictor, 80, 1, "");
         emit Mint(_predictor, 80, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
         _mint(_predictor, 84, 1, "");
         emit Mint(_predictor, 84, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
         _mint(_predictor, 88, 1, "");
         emit Mint(_predictor, 88, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _mint(_predictor, 92, 1, "");
         emit Mint(_predictor, 92, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
         _mint(_predictor, 96, 1, "");
         emit Mint(_predictor, 96, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
         _mint(_predictor, 100, 1, "");
         emit Mint(_predictor, 100, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
         _mint(_predictor, 104, 1, "");
         emit Mint(_predictor, 104, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
         _mint(_predictor, 108, 1, "");
         emit Mint(_predictor, 108, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
         _mint(_predictor, 112, 1, "");
         emit Mint(_predictor, 112, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
         _mint(_predictor, 116, 1, "");
         emit Mint(_predictor, 116, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
         _mint(_predictor, 120, 1, "");
         emit Mint(_predictor, 120, 1);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
         _mint(_predictor, 124, 1, "");
         emit Mint(_predictor, 124, 1);
      }
    } 

    function claimLevel2Nft(address _predictor, string calldata _teamName) public {
      require(msg.sender == evolveAddress, "USER_CANT_CALL_FUNCTION");
      bool isTop16 = IPrediction(predictionAddress).isPhase16();
      require(isTop16 == true, "TOP_16_HASNT_FINISHED");
      if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[0])) {
         _burn(_predictor, 0, 1);
         _mint(_predictor, 1, 1, "");
        emit LevelUp(_predictor, 1, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[1])) {
         _burn(_predictor, 4, 1);
         _mint(_predictor, 5, 1, "");
         emit LevelUp(_predictor, 5, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[2])) {
         _burn(_predictor, 8, 1);
         _mint(_predictor, 9, 1, "");
         emit LevelUp(_predictor, 9, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[3])) {
          _burn(_predictor, 12, 1);
         _mint(_predictor, 13, 1, "");
          emit LevelUp(_predictor, 13, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[4])) {
         _burn(_predictor, 16, 1);
         _mint(_predictor, 17, 1, "");
         emit LevelUp(_predictor, 17, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[5])) {
          _burn(_predictor, 20, 1);
         _mint(_predictor, 21, 1, "");
         emit LevelUp(_predictor, 21, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[6])) {
         _burn(_predictor, 24, 1);
         _mint(_predictor, 25, 1, "");
         emit LevelUp(_predictor, 25, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[7])) {
         _burn(_predictor, 28, 1);
         _mint(_predictor, 29, 1, "");
         emit LevelUp(_predictor, 29, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[8])) {
         _burn(_predictor, 32, 1);
         _mint(_predictor, 33, 1, "");
         emit LevelUp(_predictor, 33, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[9])) {
         _burn(_predictor, 36, 1);
         _mint(_predictor, 37, 1, "");
         emit LevelUp(_predictor, 37, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[10])) {
          _burn(_predictor, 40, 1);
         _mint(_predictor, 41, 1, "");
         emit LevelUp(_predictor, 41, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[11])) {
          _burn(_predictor, 44, 1);
         _mint(_predictor, 45, 1, "");
         emit LevelUp(_predictor, 45, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[12])) {
         _burn(_predictor, 48, 1);
         _mint(_predictor, 49, 1, "");
         emit LevelUp(_predictor, 49, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[13])) {
          _burn(_predictor, 52, 1);
         _mint(_predictor, 53, 1, "");
         emit LevelUp(_predictor, 53, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[14])) {
          _burn(_predictor, 56, 1);
         _mint(_predictor, 57, 1, "");
         emit LevelUp(_predictor, 57, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[15])) {
          _burn(_predictor, 60, 1);
         _mint(_predictor, 61, 1, "");
         emit LevelUp(_predictor, 61, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[16])) {
          _burn(_predictor, 64, 1);
         _mint(_predictor, 65, 1, "");
         emit LevelUp(_predictor, 65, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[17])) {
          _burn(_predictor, 68, 1);
         _mint(_predictor, 69, 1, "");
         emit LevelUp(_predictor, 69, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[18])) {
         _burn(_predictor, 72, 1);
         _mint(_predictor, 73, 1, "");
         emit LevelUp(_predictor, 73, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[19])) {
          _burn(_predictor, 76, 1);
         _mint(_predictor, 77, 1, "");
         emit LevelUp(_predictor, 77, 2);
      }  else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[20])) {
          _burn(_predictor, 80, 1);
         _mint(_predictor, 81, 1, "");
         emit LevelUp(_predictor, 81, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[21])) {
          _burn(_predictor, 84, 1);
         _mint(_predictor, 85, 1, "");
         emit LevelUp(_predictor, 85, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[22])) {
          _burn(_predictor, 88, 1);
         _mint(_predictor, 89, 1, "");
         emit LevelUp(_predictor, 89, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[23])) {
         _burn(_predictor, 92, 1);
         _mint(_predictor, 93, 1, "");
         emit LevelUp(_predictor, 93, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[24])) {
          _burn(_predictor, 96, 1);
         _mint(_predictor, 97, 1, "");
         emit LevelUp(_predictor, 97, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[25])) {
          _burn(_predictor, 100, 1);
         _mint(_predictor, 101, 1, "");
         emit LevelUp(_predictor, 101, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[26])) {
          _burn(_predictor, 104, 1);
         _mint(_predictor, 105, 1, "");
         emit LevelUp(_predictor, 105, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[27])) {
          _burn(_predictor, 108, 1);
         _mint(_predictor, 109, 1, "");
         emit LevelUp(_predictor, 109, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[28])) {
          _burn(_predictor, 112, 1);
         _mint(_predictor, 113, 1, "");
         emit LevelUp(_predictor, 113, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[29])) {
          _burn(_predictor, 116, 1);
         _mint(_predictor, 117, 1, "");
         emit LevelUp(_predictor, 117, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[30])) {
          _burn(_predictor, 120, 1);
         _mint(_predictor, 121, 1, "");
         emit LevelUp(_predictor, 121, 2);
      } else if(keccak256(abi.encode(_teamName)) == keccak256(worldCupTeams[31])) {
          _burn(_predictor, 124, 1);
         _mint(_predictor, 125, 1, "");
         emit LevelUp(_predictor, 125, 2);
      }
    } 

    function mint(address to, uint256 id, uint256 amount, bytes memory data) public {
      require(msg.sender == mintTeamsTwoAddress, "USER_CANT_CALL_FUNCTION");
       _mint(to, id, amount, data);
    }
    
   function burn(address from, uint id, uint amount) public {
      require(msg.sender == mintTeamsTwoAddress, "USER_CANT_CALL_FUNCTION");
      _burn(from, id, amount);
   }

    
}