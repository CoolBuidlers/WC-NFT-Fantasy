import "@openzeppelin/contracts/access/Ownable.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract FetchTeamsFour is Ownable {
    bytes thirteenthPlaceTeam;
    bytes fourteenthPlaceTeam;
    bytes fifteenthPlaceTeam;
    bytes sixteenthPlaceTeam;
    address worldCupDataAddress;
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


function setThirteenthPlaceTeam(string memory _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
   if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('URU'))) {
     thirteenthPlaceTeam =  worldCupTeams[30];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('QAT'))) {
      thirteenthPlaceTeam =  worldCupTeams[0];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MAR'))) {
      thirteenthPlaceTeam =  worldCupTeams[22];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GHA'))) {
      thirteenthPlaceTeam =  worldCupTeams[29];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('TUN'))) {
      thirteenthPlaceTeam =  worldCupTeams[15];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SEN'))) {
      thirteenthPlaceTeam =  worldCupTeams[2];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KSA'))) {
      thirteenthPlaceTeam =  worldCupTeams[9];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KOR'))) {
      thirteenthPlaceTeam = worldCupTeams[31];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('USA'))) {
      thirteenthPlaceTeam =  worldCupTeams[6];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CAN'))) {
      thirteenthPlaceTeam =  worldCupTeams[21];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ECU'))) {
      thirteenthPlaceTeam =  worldCupTeams[1];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MEX'))) {
      thirteenthPlaceTeam = worldCupTeams[10];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('DEN'))) {
      thirteenthPlaceTeam =  worldCupTeams[14];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRO'))) {
      thirteenthPlaceTeam =  worldCupTeams[23];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('JPN'))) {
      thirteenthPlaceTeam =  worldCupTeams[19];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRC'))) {
      thirteenthPlaceTeam = worldCupTeams[17];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ARG'))) {
      thirteenthPlaceTeam =  worldCupTeams[8];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ENG'))) {
      thirteenthPlaceTeam =  worldCupTeams[4];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('FRA'))) {
     thirteenthPlaceTeam = worldCupTeams[12];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('IRN'))) {
     thirteenthPlaceTeam =  worldCupTeams[5];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GER'))) {
     thirteenthPlaceTeam =  worldCupTeams[18];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('NED'))) {
     thirteenthPlaceTeam = worldCupTeams[3];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POL'))) {
     thirteenthPlaceTeam = worldCupTeams[11];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POR'))) {
     thirteenthPlaceTeam =  worldCupTeams[28];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BRA'))) {
     thirteenthPlaceTeam =  worldCupTeams[24];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SUI'))) {
     thirteenthPlaceTeam =  worldCupTeams[26];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ESP'))) {
     thirteenthPlaceTeam =  worldCupTeams[16];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('WAL'))) {
     thirteenthPlaceTeam = worldCupTeams[7];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('AUS'))) {
     thirteenthPlaceTeam =  worldCupTeams[13];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BEL'))) {
     thirteenthPlaceTeam =  worldCupTeams[20];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CMR'))) {
     thirteenthPlaceTeam =   worldCupTeams[27];
   }   else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SRB'))) {
     thirteenthPlaceTeam =  worldCupTeams[25];
   }  
}

 function setFourteenthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    fourteenthPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     fourteenthPlaceTeam=  worldCupTeams[3];
   } else if(_teamId == 12279) {
     fourteenthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     fourteenthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     fourteenthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     fourteenthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     fourteenthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     fourteenthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     fourteenthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      fourteenthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     fourteenthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     fourteenthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     fourteenthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     fourteenthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     fourteenthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     fourteenthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     fourteenthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     fourteenthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     fourteenthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     fourteenthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     fourteenthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     fourteenthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     fourteenthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     fourteenthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     fourteenthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     fourteenthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     fourteenthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    fourteenthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    fourteenthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    fourteenthPlaceTeam = worldCupTeams[30];
  }
}

 function setFifteenthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    fifteenthPlaceTeam  =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     fifteenthPlaceTeam  =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     fifteenthPlaceTeam  = worldCupTeams[0];
   } else if(_teamId == 56) {
     fifteenthPlaceTeam  = worldCupTeams[2];
   } else if(_teamId == 12302) {
     fifteenthPlaceTeam  = worldCupTeams[4];
   } else if(_teamId == 12396) {
     fifteenthPlaceTeam  = worldCupTeams[5];
   } else if(_teamId == 7850) {
     fifteenthPlaceTeam  = worldCupTeams[6];
   } else if(_teamId == 14218) {
     fifteenthPlaceTeam  = worldCupTeams[7];
   } else if(_teamId == 12502) {
     fifteenthPlaceTeam  = worldCupTeams[8];
   } else if(_teamId == 12473) {
      fifteenthPlaceTeam  = worldCupTeams[10];
   } else if(_teamId == 3011) {
     fifteenthPlaceTeam  = worldCupTeams[11];
   } else if(_teamId == 767) {
     fifteenthPlaceTeam  = worldCupTeams[9];
   } else if(_teamId == 3008) {
     fifteenthPlaceTeam  = worldCupTeams[14];
   } else if(_teamId == 12300) {
     fifteenthPlaceTeam  = worldCupTeams[12];
   } else if(_teamId == 73) {
     fifteenthPlaceTeam  = worldCupTeams[15];
   } else if(_teamId == 3017) {
     fifteenthPlaceTeam  = worldCupTeams[18];
   } else if(_teamId == 12397) {
     fifteenthPlaceTeam  = worldCupTeams[19];
   } else if(_teamId == 3024) {
     fifteenthPlaceTeam  = worldCupTeams[16];
   } else if(_teamId == 3054) {
     fifteenthPlaceTeam  = worldCupTeams[20];
   } else if(_teamId == 7835) {
     fifteenthPlaceTeam  = worldCupTeams[21];
   } else if(_teamId == 3026) {
     fifteenthPlaceTeam  = worldCupTeams[23];
   } else if(_teamId == 52) {
     fifteenthPlaceTeam  = worldCupTeams[22];
   } else if(_teamId == 12504) {
     fifteenthPlaceTeam  = worldCupTeams[24];
   } else if(_teamId == 85) {
     fifteenthPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3036) {
     fifteenthPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3064) {
     fifteenthPlaceTeam  = worldCupTeams[26];
  } else if(_teamId == 95) {
     fifteenthPlaceTeam  = worldCupTeams[29];
  } else if(_teamId == 755) {
    fifteenthPlaceTeam  = worldCupTeams[31];
  } else if(_teamId == 12299) {
    fifteenthPlaceTeam  = worldCupTeams[28];
  } else if(_teamId == 12501) {
    fifteenthPlaceTeam  = worldCupTeams[30];
  }
}

 function setSixteenthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    sixteenthPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     sixteenthPlaceTeam =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     sixteenthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     sixteenthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     sixteenthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     sixteenthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     sixteenthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     sixteenthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     sixteenthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      sixteenthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     sixteenthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     sixteenthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     sixteenthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     sixteenthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     sixteenthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     sixteenthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     sixteenthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     sixteenthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     sixteenthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     sixteenthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     sixteenthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     sixteenthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     sixteenthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     sixteenthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     sixteenthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     sixteenthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     sixteenthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    sixteenthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    sixteenthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    sixteenthPlaceTeam = worldCupTeams[30];
  }
}

function getThirteenthPlaceTeam() public view returns(bytes memory team) {
  return thirteenthPlaceTeam;
}

function getFourteenthPlaceTeam() public view returns(bytes memory team) {
  return fourteenthPlaceTeam;
}

function getFifteenthPlaceTeam() public view returns(bytes memory team) {
  return fifteenthPlaceTeam;
}

function getSixteenthPlaceTeam() public view returns(bytes memory team) {
  return sixteenthPlaceTeam;
}

  function setWorldCupDataAddress(address _worldCupDataAddress) external onlyOwner {
    worldCupDataAddress = _worldCupDataAddress;
  }
}