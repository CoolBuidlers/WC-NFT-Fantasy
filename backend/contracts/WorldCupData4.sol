import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IFetchTeams.sol";
import "../interfaces/IPrediction.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorldCupData4 is ChainlinkClient, Ownable {
  using Chainlink for Chainlink.Request;
  address public fetchTeamsOneAddress;
  address public fetchTeamsTwoAddress;
  address public fetchTeamsThreeAddress;
  address public fetchTeamsFourAddress;
  address public predictionAddress;
  bytes32 private jobId;
  uint256 private fee;
  event ReceiveTeamTop8(bytes32 requestId, string indexed teamId);


   constructor() {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = '7d80a6386ef543a3abb52817f6707e3b';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    function setAddresses(address _fetchTeamsOneAddress, address _fetchTeamsTwoAddress, address _fetchTeamsThreeAddress, address _fetchTeamsFourAddress,address _predictionAddress ) external onlyOwner {
       setFetchTeamOne(_fetchTeamsOneAddress);
       setFetchTeamTwo(_fetchTeamsTwoAddress);
       setFetchTeamThree(_fetchTeamsThreeAddress);
       setFetchTeamFour(_fetchTeamsFourAddress);
       setPredictionAddress(_predictionAddress);
    }


    function setFetchTeamOne(address _fetchTeamsOneAddress) internal {
       fetchTeamsOneAddress = _fetchTeamsOneAddress;
    }

    function setFetchTeamTwo(address _fetchTeamsTwoAddress) internal {
       fetchTeamsTwoAddress = _fetchTeamsTwoAddress;
    }

    function setFetchTeamThree(address _fetchTeamsThreeAddress) internal {
       fetchTeamsThreeAddress = _fetchTeamsThreeAddress;
    }

    function setFetchTeamFour(address _fetchTeamsFourAddress) internal {
      fetchTeamsFourAddress = _fetchTeamsFourAddress;
    }

    function setPredictionAddress(address _predictionAddress) internal {
       predictionAddress = _predictionAddress;
    }

    function receiveTeamOneStanding() private returns(bytes32 requestId) {
       Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamOne.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=API_KEY');
        req.add('path', 'data,60,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }
    
    function receiveTeamOne(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFirstPlaceTeam(_teamId);
        emit ReceiveTeamTop8(_requestId, _teamId);
    }

     function receiveTeamTwoStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwo.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=API_KEY');
        req.add('path', 'data,61,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwo(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setSecondPlaceTeam(_teamId); 
        emit ReceiveTeamTop8(_requestId, _teamId);
    }

     function receiveTeamThreeStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThree.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=API_KEY');
        req.add('path', 'data,62,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThree(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setThirdPlaceTeam(_teamId);
        emit ReceiveTeamTop8(_requestId, _teamId);
        
    }

     function receiveTeamFourStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFour.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=API_KEY');
        req.add('path', 'data,63,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFour(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFourthPlaceTeam(_teamId);
        emit ReceiveTeamTop8(_requestId, _teamId);
    }

      function fetchTop4Teams() public {
        require(msg.sender == predictionAddress, "USER_CANT_CALL_FUNCTION");
        receiveTeamOneStanding();
        receiveTeamTwoStanding();
        receiveTeamThreeStanding();
        receiveTeamFourStanding();
    }

     function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}