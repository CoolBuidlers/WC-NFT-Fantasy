import "@openzeppelin/contracts/access/Ownable.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract FetchTeamsThree is Ownable {
    bytes ninthPlaceTeam;
    bytes tenthPlaceTeam;
    bytes eleventhPlaceTeam;
    bytes twelfthPlaceTeam;
    address public worldCupData16Address;
    address public worldCupData8Address;
    address public worldCupData4Address;
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


function setNinthPlaceTeam(string memory _teamId) public {
   require(msg.sender == worldCupData16Address || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
   if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('URU'))) {
    ninthPlaceTeam =  worldCupTeams[30];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('QAT'))) {
     ninthPlaceTeam =  worldCupTeams[0];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MAR'))) {
     ninthPlaceTeam =  worldCupTeams[22];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GHA'))) {
     ninthPlaceTeam =  worldCupTeams[29];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('TUN'))) {
     ninthPlaceTeam =  worldCupTeams[15];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SEN'))) {
     ninthPlaceTeam =  worldCupTeams[2];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KSA'))) {
     ninthPlaceTeam =  worldCupTeams[9];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KOR'))) {
     ninthPlaceTeam = worldCupTeams[31];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('USA'))) {
     ninthPlaceTeam =  worldCupTeams[6];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CAN'))) {
     ninthPlaceTeam =  worldCupTeams[21];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ECU'))) {
     ninthPlaceTeam =  worldCupTeams[1];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MEX'))) {
     ninthPlaceTeam = worldCupTeams[10];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('DEN'))) {
     ninthPlaceTeam = worldCupTeams[14];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRO'))) {
     ninthPlaceTeam =  worldCupTeams[23];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('JPN'))) {
     ninthPlaceTeam =  worldCupTeams[19];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRC'))) {
     ninthPlaceTeam = worldCupTeams[17];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ARG'))) {
     ninthPlaceTeam =  worldCupTeams[8];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ENG'))) {
     ninthPlaceTeam =  worldCupTeams[4];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('FRA'))) {
    ninthPlaceTeam = worldCupTeams[12];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('IRN'))) {
    ninthPlaceTeam =  worldCupTeams[5];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GER'))) {
    ninthPlaceTeam =  worldCupTeams[18];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('NED'))) {
    ninthPlaceTeam = worldCupTeams[3];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POL'))) {
    ninthPlaceTeam = worldCupTeams[11];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POR'))) {
    ninthPlaceTeam =  worldCupTeams[28];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BRA'))) {
    ninthPlaceTeam =  worldCupTeams[24];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SUI'))) {
    ninthPlaceTeam =  worldCupTeams[26];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ESP'))) {
    ninthPlaceTeam =  worldCupTeams[16];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('WAL'))) {
    ninthPlaceTeam = worldCupTeams[7];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('AUS'))) {
    ninthPlaceTeam =  worldCupTeams[13];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BEL'))) {
    ninthPlaceTeam =  worldCupTeams[20];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CMR'))) {
    ninthPlaceTeam =   worldCupTeams[27];
   }   else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SRB'))) {
    ninthPlaceTeam =  worldCupTeams[25];
   }  
}

 function setTenthPlaceTeam(string memory _teamId) public {
   require(msg.sender == worldCupData16Address || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
   if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('URU'))) {
    tenthPlaceTeam =  worldCupTeams[30];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('QAT'))) {
     tenthPlaceTeam =  worldCupTeams[0];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MAR'))) {
     tenthPlaceTeam =  worldCupTeams[22];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GHA'))) {
     tenthPlaceTeam =  worldCupTeams[29];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('TUN'))) {
     tenthPlaceTeam =  worldCupTeams[15];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SEN'))) {
     tenthPlaceTeam =  worldCupTeams[2];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KSA'))) {
     tenthPlaceTeam =  worldCupTeams[9];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KOR'))) {
     tenthPlaceTeam = worldCupTeams[31];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('USA'))) {
     tenthPlaceTeam =  worldCupTeams[6];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CAN'))) {
     tenthPlaceTeam =  worldCupTeams[21];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ECU'))) {
     tenthPlaceTeam =  worldCupTeams[1];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MEX'))) {
     tenthPlaceTeam = worldCupTeams[10];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('DEN'))) {
     tenthPlaceTeam = worldCupTeams[14];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRO'))) {
     tenthPlaceTeam =  worldCupTeams[23];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('JPN'))) {
     tenthPlaceTeam =  worldCupTeams[19];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRC'))) {
     tenthPlaceTeam = worldCupTeams[17];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ARG'))) {
     tenthPlaceTeam =  worldCupTeams[8];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ENG'))) {
     tenthPlaceTeam =  worldCupTeams[4];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('FRA'))) {
    tenthPlaceTeam = worldCupTeams[12];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('IRN'))) {
    tenthPlaceTeam =  worldCupTeams[5];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GER'))) {
    tenthPlaceTeam =  worldCupTeams[18];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('NED'))) {
    tenthPlaceTeam = worldCupTeams[3];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POL'))) {
    tenthPlaceTeam = worldCupTeams[11];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POR'))) {
    tenthPlaceTeam =  worldCupTeams[28];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BRA'))) {
    tenthPlaceTeam =  worldCupTeams[24];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SUI'))) {
    tenthPlaceTeam =  worldCupTeams[26];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ESP'))) {
    tenthPlaceTeam =  worldCupTeams[16];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('WAL'))) {
    tenthPlaceTeam = worldCupTeams[7];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('AUS'))) {
    tenthPlaceTeam =  worldCupTeams[13];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BEL'))) {
    tenthPlaceTeam =  worldCupTeams[20];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CMR'))) {
    tenthPlaceTeam =   worldCupTeams[27];
   }   else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SRB'))) {
    tenthPlaceTeam =  worldCupTeams[25];
   }  
}

 function setEleventhPlaceTeam(string memory _teamId) public {
    require(msg.sender == worldCupData16Address || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
   if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('URU'))) {
    eleventhPlaceTeam =  worldCupTeams[30];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('QAT'))) {
     eleventhPlaceTeam =  worldCupTeams[0];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MAR'))) {
     eleventhPlaceTeam =  worldCupTeams[22];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GHA'))) {
     eleventhPlaceTeam =  worldCupTeams[29];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('TUN'))) {
     eleventhPlaceTeam =  worldCupTeams[15];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SEN'))) {
     eleventhPlaceTeam =  worldCupTeams[2];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KSA'))) {
     eleventhPlaceTeam =  worldCupTeams[9];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KOR'))) {
     eleventhPlaceTeam = worldCupTeams[31];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('USA'))) {
     eleventhPlaceTeam =  worldCupTeams[6];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CAN'))) {
     eleventhPlaceTeam =  worldCupTeams[21];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ECU'))) {
     eleventhPlaceTeam =  worldCupTeams[1];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MEX'))) {
     eleventhPlaceTeam = worldCupTeams[10];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('DEN'))) {
     eleventhPlaceTeam = worldCupTeams[14];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRO'))) {
     eleventhPlaceTeam =  worldCupTeams[23];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('JPN'))) {
     eleventhPlaceTeam =  worldCupTeams[19];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRC'))) {
     eleventhPlaceTeam = worldCupTeams[17];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ARG'))) {
     eleventhPlaceTeam =  worldCupTeams[8];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ENG'))) {
     eleventhPlaceTeam =  worldCupTeams[4];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('FRA'))) {
    eleventhPlaceTeam = worldCupTeams[12];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('IRN'))) {
    eleventhPlaceTeam =  worldCupTeams[5];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GER'))) {
    eleventhPlaceTeam =  worldCupTeams[18];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('NED'))) {
    eleventhPlaceTeam = worldCupTeams[3];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POL'))) {
    eleventhPlaceTeam = worldCupTeams[11];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POR'))) {
    eleventhPlaceTeam =  worldCupTeams[28];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BRA'))) {
    eleventhPlaceTeam =  worldCupTeams[24];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SUI'))) {
    eleventhPlaceTeam =  worldCupTeams[26];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ESP'))) {
    eleventhPlaceTeam =  worldCupTeams[16];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('WAL'))) {
    eleventhPlaceTeam = worldCupTeams[7];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('AUS'))) {
    eleventhPlaceTeam =  worldCupTeams[13];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BEL'))) {
    eleventhPlaceTeam =  worldCupTeams[20];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CMR'))) {
    eleventhPlaceTeam =   worldCupTeams[27];
   }   else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SRB'))) {
    eleventhPlaceTeam =  worldCupTeams[25];
   }  
 }

 function setTwelfthPlaceTeam(string memory _teamId) public {
      require(msg.sender == worldCupData16Address || msg.sender == worldCupData8Address || msg.sender == worldCupData4Address, "USER_CANT_CALL_FUNCTION");
   if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('URU'))) {
   twelfthPlaceTeam =  worldCupTeams[30];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('QAT'))) {
    twelfthPlaceTeam =  worldCupTeams[0];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MAR'))) {
    twelfthPlaceTeam =  worldCupTeams[22];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GHA'))) {
    twelfthPlaceTeam =  worldCupTeams[29];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('TUN'))) {
    twelfthPlaceTeam =  worldCupTeams[15];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SEN'))) {
    twelfthPlaceTeam =  worldCupTeams[2];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KSA'))) {
    twelfthPlaceTeam =  worldCupTeams[9];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('KOR'))) {
    twelfthPlaceTeam = worldCupTeams[31];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('USA'))) {
    twelfthPlaceTeam =  worldCupTeams[6];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CAN'))) {
    twelfthPlaceTeam =  worldCupTeams[21];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ECU'))) {
    twelfthPlaceTeam =  worldCupTeams[1];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('MEX'))) {
    twelfthPlaceTeam = worldCupTeams[10];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('DEN'))) {
    twelfthPlaceTeam = worldCupTeams[14];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRO'))) {
    twelfthPlaceTeam =  worldCupTeams[23];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('JPN'))) {
    twelfthPlaceTeam =  worldCupTeams[19];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CRC'))) {
    twelfthPlaceTeam = worldCupTeams[17];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ARG'))) {
    twelfthPlaceTeam =  worldCupTeams[8];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ENG'))) {
    twelfthPlaceTeam =  worldCupTeams[4];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('FRA'))) {
   twelfthPlaceTeam = worldCupTeams[12];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('IRN'))) {
   twelfthPlaceTeam =  worldCupTeams[5];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('GER'))) {
   twelfthPlaceTeam =  worldCupTeams[18];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('NED'))) {
   twelfthPlaceTeam = worldCupTeams[3];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POL'))) {
   twelfthPlaceTeam = worldCupTeams[11];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('POR'))) {
   twelfthPlaceTeam =  worldCupTeams[28];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BRA'))) {
   twelfthPlaceTeam =  worldCupTeams[24];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SUI'))) {
   twelfthPlaceTeam =  worldCupTeams[26];
   } else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('ESP'))) {
   twelfthPlaceTeam =  worldCupTeams[16];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('WAL'))) {
   twelfthPlaceTeam = worldCupTeams[7];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('AUS'))) {
   twelfthPlaceTeam =  worldCupTeams[13];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('BEL'))) {
   twelfthPlaceTeam =  worldCupTeams[20];
   }  else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('CMR'))) {
   twelfthPlaceTeam =   worldCupTeams[27];
   }   else if(keccak256(abi.encode(_teamId)) == keccak256(abi.encode('SRB'))) {
   twelfthPlaceTeam =  worldCupTeams[25];
   }  
}

function getNinthPlaceTeam() public view returns(bytes memory team) {
  return ninthPlaceTeam;
}

function getTenthPlaceTeam() public view returns(bytes memory team) {
  return tenthPlaceTeam;
}

function getEleventhPlaceTeam() public view returns(bytes memory team) {
  return eleventhPlaceTeam;
}

function getTwelfthPlaceTeam() public view returns(bytes memory team) {
  return twelfthPlaceTeam;
}


  function setWorldCupDataAddress(address _worldCupData16Address, address _worldCupData8Address, address _worldCupData4Address) external onlyOwner {
    worldCupData16Address = _worldCupData16Address;
    worldCupData8Address = _worldCupData8Address;
    worldCupData4Address = _worldCupData4Address;
  }
}