import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorldCupTop4Data is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;
   bytes32 private jobId;
   uint256 private fee;
   event ReceiveTeamTop4(bytes32 indexed requestId, uint256 teamId);

   constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = 'ca98366cc7314957b8c012c72f05aeeb';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }


    function receiveTeamOneStanding() private returns(bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamOne.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,0,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }
    
    function receiveTeamOne(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        emit ReceiveTeamTop4(_requestId, _teamId);
    }

     function receiveTeamTwoStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwo.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,1,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwo(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        emit ReceiveTeamTop4(_requestId, _teamId);
    }

     function receiveTeamThreeStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThree.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,2,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThree(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        emit ReceiveTeamTop4(_requestId, _teamId);
    }

     function receiveTeamFourStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFour.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('path', 'data,standings,0,3,team_id');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFour(bytes32 _requestId, uint256 _teamId) public recordChainlinkFulfillment(_requestId) {
        emit ReceiveTeamTop4(_requestId, _teamId);
    }

    function fetchTop4Teams() public {
        receiveTeamOneStanding();
        receiveTeamTwoStanding();
        receiveTeamThreeStanding();
        receiveTeamFourStanding();
    }

     function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}