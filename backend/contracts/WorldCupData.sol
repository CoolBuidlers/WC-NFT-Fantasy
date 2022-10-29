import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IFetchTeams.sol";
import "../interfaces/IPrediction.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorldCupData is ChainlinkClient, Ownable {
  using Chainlink for Chainlink.Request;
  address public randomNumberAndRoundAddress;
  address public fetchTeamsOneAddress;
  address public fetchTeamsTwoAddress;
  address public fetchTeamsThreeAddress;
  address public fetchTeamsFourAddress;
  address public predictionAddress;
  bytes32 private jobId;
  uint256 private fee;
  event ReceiveTeamTop16(bytes32 indexed requestId, uint256 teamId, uint256 round);
  event ReceiveTeamTop8(bytes32 indexed requestId, uint256 teamId, uint256 round);
  event ReceiveTeamTop4(bytes32 indexed requestId, uint256 teamId, uint256 round);


   constructor() {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = 'ca98366cc7314957b8c012c72f05aeeb';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    function setRandomNumberAndRoundAddress(address _randomNumberAndRoundAddress) external onlyOwner {
      randomNumberAndRoundAddress = _randomNumberAndRoundAddress;
    }

    function setFetchTeamsOneAddress(address _fetchTeamsOneAddress) external onlyOwner {
      fetchTeamsOneAddress = _fetchTeamsOneAddress;
    }

    function setFetchTeamsTwoAddress(address _fetchTeamsTwoAddress) external onlyOwner {
      fetchTeamsTwoAddress = _fetchTeamsTwoAddress;
    }

    function setFetchTeamsThreeAddress(address _fetchTeamsThreeAddress) external onlyOwner {
      fetchTeamsTwoAddress = _fetchTeamsThreeAddress;
    }

    function setFetchTeamsFourAddress(address _fetchTeamsFourAddress) external onlyOwner {
      fetchTeamsFourAddress = _fetchTeamsFourAddress;
    }

    function setPredictionAddress(address _predictionAddress) external onlyOwner {
      predictionAddress = _predictionAddress;
    }

    function receiveTeamOneStanding() private returns(bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamOne.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,0,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }
    
    function receiveTeamOne(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFirstPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }  else if(IPrediction(predictionAddress).isPhase4() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 4);
        }
    }

     function receiveTeamTwoStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwo.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,1,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwo(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setSecondPlaceTeam(_teamId);
         if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }  else if(IPrediction(predictionAddress).isPhase4() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 4);
        }
    }

     function receiveTeamThreeStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThree.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,2,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThree(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setThirdPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }  else if(IPrediction(predictionAddress).isPhase4() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 4);
        }
    }

     function receiveTeamFourStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFour.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFour(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFourthPlaceTeam(_teamId);
         if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }  else if(IPrediction(predictionAddress).isPhase4() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 4);
        }
    }

       function receiveTeamFiveStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFive.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,1,0,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFive(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsTwoAddress).setFifthPlaceTeam(_teamId);
         if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }
    }

      function receiveTeamSixStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSix.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,1,1,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSix(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsTwoAddress).setSixthPlaceTeam(_teamId);
          if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }
    }

    function receiveTeamSevenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSeven.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,1,2,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSeven(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsTwoAddress).setSeventhPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }
    }

      function receiveTeamEightStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamEight.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,1,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamEight(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsTwoAddress).setEighthPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        } else if(IPrediction(predictionAddress).isPhase8() == true) {
           emit ReceiveTeamTop8(_requestId, _teamId, 8);
        }
    }

      function receiveTeamNineStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamNine.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,2,0,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamNine(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setNinthPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

      function receiveTeamTenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,2,1,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTen(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setTenthPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

      function receiveTeamElevenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamEleven.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,2,2,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamEleven(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setEleventhPlaceTeam(_teamId);
       if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

      function receiveTeamTwelveStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwelve.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,2,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwelve(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setTwelfthPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

     function receiveTeamThirteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThirteen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,3,0,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThirteen(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsFourAddress).setThirteenthPlaceTeam(_teamId);
         if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

    function receiveTeamFourteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFourteen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,3,1,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFourteen(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setFourteenthPlaceTeam(_teamId);
       if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

     function receiveTeamFifteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFifteen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,3,2,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFifteen(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setFifteenthPlaceTeam(_teamId);
        if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

    function receiveTeamSixteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSixteen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,3,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSixteen(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setSixteenthPlaceTeam(_teamId);
       if(IPrediction(predictionAddress).isPhase16() == true) {
            emit ReceiveTeamTop16(_requestId, _teamId, 16);
        }
    }

      function fetchTop16Teams() public {
        require(msg.sender == randomNumberAndRoundAddress, "USER_CANT_CALL_FUNCTION");
        receiveTeamOneStanding();
        receiveTeamTwoStanding();
        receiveTeamThreeStanding();
        receiveTeamFourStanding();
        receiveTeamFiveStanding();
        receiveTeamSixStanding();
        receiveTeamSevenStanding();
        receiveTeamEightStanding();
        receiveTeamNineStanding();
        receiveTeamTenStanding();
        receiveTeamElevenStanding();
        receiveTeamTwelveStanding();
        receiveTeamThirteenStanding();
        receiveTeamFourteenStanding();
        receiveTeamFifteenStanding();
        receiveTeamSixteenStanding();
    }

     function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}