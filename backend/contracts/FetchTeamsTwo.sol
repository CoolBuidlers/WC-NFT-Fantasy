import "@openzeppelin/contracts/access/Ownable.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract FetchTeamsTwo is Ownable {
    bytes fifthPlaceTeam;
    bytes sixthPlaceTeam;
    bytes seventhPlaceTeam;
    bytes eigthPlaceTeam;
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


function setFifthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    fifthPlaceTeam = worldCupTeams[1];
   } else if(_teamId == 3080) {
     fifthPlaceTeam =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     fifthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     fifthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     fifthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     fifthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     fifthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     fifthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     fifthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      fifthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     fifthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     fifthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     fifthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     fifthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     fifthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     fifthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     fifthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     fifthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     fifthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     fifthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     fifthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     fifthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     fifthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     fifthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     fifthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     fifthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     fifthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    fifthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    fifthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    fifthPlaceTeam = worldCupTeams[30];
  }
}

 function setSixthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    sixthPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     sixthPlaceTeam=  worldCupTeams[3];
   } else if(_teamId == 12279) {
     sixthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     sixthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     sixthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     sixthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     sixthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     sixthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     sixthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      sixthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     sixthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     sixthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     sixthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     sixthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     sixthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     sixthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     sixthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     sixthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     sixthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     sixthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     sixthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     sixthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     sixthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     sixthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     sixthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     sixthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     sixthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    sixthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    sixthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    sixthPlaceTeam = worldCupTeams[30];
  }
}

 function setSeventhPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    seventhPlaceTeam  =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     seventhPlaceTeam  =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     seventhPlaceTeam  = worldCupTeams[0];
   } else if(_teamId == 56) {
     seventhPlaceTeam  = worldCupTeams[2];
   } else if(_teamId == 12302) {
     seventhPlaceTeam  = worldCupTeams[4];
   } else if(_teamId == 12396) {
     seventhPlaceTeam  = worldCupTeams[5];
   } else if(_teamId == 7850) {
     seventhPlaceTeam  = worldCupTeams[6];
   } else if(_teamId == 14218) {
     seventhPlaceTeam  = worldCupTeams[7];
   } else if(_teamId == 12502) {
     seventhPlaceTeam  = worldCupTeams[8];
   } else if(_teamId == 12473) {
      seventhPlaceTeam  = worldCupTeams[10];
   } else if(_teamId == 3011) {
     seventhPlaceTeam  = worldCupTeams[11];
   } else if(_teamId == 767) {
     seventhPlaceTeam  = worldCupTeams[9];
   } else if(_teamId == 3008) {
     seventhPlaceTeam  = worldCupTeams[14];
   } else if(_teamId == 12300) {
     seventhPlaceTeam  = worldCupTeams[12];
   } else if(_teamId == 73) {
     seventhPlaceTeam  = worldCupTeams[15];
   } else if(_teamId == 3017) {
     seventhPlaceTeam  = worldCupTeams[18];
   } else if(_teamId == 12397) {
     seventhPlaceTeam  = worldCupTeams[19];
   } else if(_teamId == 3024) {
     seventhPlaceTeam  = worldCupTeams[16];
   } else if(_teamId == 3054) {
     seventhPlaceTeam  = worldCupTeams[20];
   } else if(_teamId == 7835) {
     seventhPlaceTeam  = worldCupTeams[21];
   } else if(_teamId == 3026) {
     seventhPlaceTeam  = worldCupTeams[23];
   } else if(_teamId == 52) {
     seventhPlaceTeam  = worldCupTeams[22];
   } else if(_teamId == 12504) {
     seventhPlaceTeam  = worldCupTeams[24];
   } else if(_teamId == 85) {
     seventhPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3036) {
     seventhPlaceTeam  = worldCupTeams[27];
  } else if(_teamId == 3064) {
     seventhPlaceTeam  = worldCupTeams[26];
  } else if(_teamId == 95) {
     seventhPlaceTeam  = worldCupTeams[29];
  } else if(_teamId == 755) {
    seventhPlaceTeam  = worldCupTeams[31];
  } else if(_teamId == 12299) {
    seventhPlaceTeam  = worldCupTeams[28];
  } else if(_teamId == 12501) {
    seventhPlaceTeam  = worldCupTeams[30];
  }
}

 function setEigthPlaceTeam(uint _teamId) public {
  require(msg.sender == worldCupDataAddress, "USER_CANT_CALL_FUNCTION");
      /*
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2

    Costa Rica
    Australia
    */
   if(_teamId == 12550) {
    eigthPlaceTeam =  worldCupTeams[1];
   } else if(_teamId == 3080) {
     eigthPlaceTeam =  worldCupTeams[3];
   } else if(_teamId == 12279) {
     eigthPlaceTeam = worldCupTeams[0];
   } else if(_teamId == 56) {
     eigthPlaceTeam = worldCupTeams[2];
   } else if(_teamId == 12302) {
     eigthPlaceTeam = worldCupTeams[4];
   } else if(_teamId == 12396) {
     eigthPlaceTeam = worldCupTeams[5];
   } else if(_teamId == 7850) {
     eigthPlaceTeam = worldCupTeams[6];
   } else if(_teamId == 14218) {
     eigthPlaceTeam = worldCupTeams[7];
   } else if(_teamId == 12502) {
     eigthPlaceTeam = worldCupTeams[8];
   } else if(_teamId == 12473) {
      eigthPlaceTeam = worldCupTeams[10];
   } else if(_teamId == 3011) {
     eigthPlaceTeam = worldCupTeams[11];
   } else if(_teamId == 767) {
     eigthPlaceTeam = worldCupTeams[9];
   } else if(_teamId == 3008) {
     eigthPlaceTeam = worldCupTeams[14];
   } else if(_teamId == 12300) {
     eigthPlaceTeam = worldCupTeams[12];
   } else if(_teamId == 73) {
     eigthPlaceTeam = worldCupTeams[15];
   } else if(_teamId == 3017) {
     eigthPlaceTeam = worldCupTeams[18];
   } else if(_teamId == 12397) {
     eigthPlaceTeam = worldCupTeams[19];
   } else if(_teamId == 3024) {
     eigthPlaceTeam = worldCupTeams[16];
   } else if(_teamId == 3054) {
     eigthPlaceTeam = worldCupTeams[20];
   } else if(_teamId == 7835) {
     eigthPlaceTeam = worldCupTeams[21];
   } else if(_teamId == 3026) {
     eigthPlaceTeam = worldCupTeams[23];
   } else if(_teamId == 52) {
     eigthPlaceTeam = worldCupTeams[22];
   } else if(_teamId == 12504) {
     eigthPlaceTeam = worldCupTeams[24];
   } else if(_teamId == 85) {
     eigthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3036) {
     eigthPlaceTeam = worldCupTeams[27];
  } else if(_teamId == 3064) {
     eigthPlaceTeam = worldCupTeams[26];
  } else if(_teamId == 95) {
     eigthPlaceTeam = worldCupTeams[29];
  } else if(_teamId == 755) {
    eigthPlaceTeam = worldCupTeams[31];
  } else if(_teamId == 12299) {
    eigthPlaceTeam = worldCupTeams[28];
  } else if(_teamId == 12501) {
    eigthPlaceTeam = worldCupTeams[30];
  }
}

  function setWorldCupAddress(address _worldCupDataAddress) public onlyOwner {
    worldCupDataAddress = _worldCupDataAddress;
  }
}