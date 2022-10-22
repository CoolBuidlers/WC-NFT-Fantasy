import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorldCupTop16Data is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;
   uint256 public teamOne;
   uint public teamTwo;
   bytes32 private jobId;
   uint256 private fee;
   event RequestTop16(bytes32 indexed requestId, uint team1, uint team2, uint team3, uint team4, uint team5, uint team6, uint team7, uint team8, uint team9, uint team10, uint team11, uint team12, uint team13, uint team14, uint team15, uint team16);

   constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = 'ca98366cc7314957b8c012c72f05aeeb';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

     function requestStandingsTop16() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,0,0,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,0,1,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,0,2,team_id');
        
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,0,3,team_id');
        
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,1,0,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,1,1,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,1,2,team_id');
        
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,1,3,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,2,0,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,2,1,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,2,2,team_id');
        
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,2,3,team_id');

         req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,3,0,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,3,1,team_id');

        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,3,2,team_id');
        
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,3,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

    
     function requestCurrentRound() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEYb&season_id=3072');
        req.add('path', 'data,standings,0,0,team_id');
        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

    function fulfill(bytes32 _requestId, uint256 _team1, uint256 _team2, uint256 _team3, uint256 _team4, uint256 _team5, uint256 _team6, uint256 _team7, uint256 _team8, uint256 _team9, uint256 _team10, uint256 _team11, uint256 _team12, uint256 _team13, uint256 _team14, uint256 _team15, uint256 _team16) public recordChainlinkFulfillment(_requestId) {
        teamOne = _team1;
        teamTwo = _team2;
        emit RequestTop16(_requestId, _team1, _team2, _team3, _team4, _team5, _team6, _team7, _team8, _team9, _team10, _team11, _team12, _team13, _team14, _team15, _team16);
    }

     function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}