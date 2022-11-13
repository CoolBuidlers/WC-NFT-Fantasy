import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IFetchTeams.sol";
import "../interfaces/IPrediction.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorldCupData16 is ChainlinkClient, Ownable {
  using Chainlink for Chainlink.Request;
  address public randomNumberAndRoundAddress;
  address public fetchTeamsOneAddress;
  address public fetchTeamsTwoAddress;
  address public fetchTeamsThreeAddress;
  address public fetchTeamsFourAddress;
  address public predictionAddress;
  bytes32 private jobId;
  uint256 private fee;
  event ReceiveTeamTop16(bytes32 requestId, string indexed teamId);


   constructor() {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = '7d80a6386ef543a3abb52817f6707e3b';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    function setAddresses(address _randomNumberAndRoundAddress, address _fetchTeamsOneAddress, address _fetchTeamsTwoAddress, address _fetchTeamsThreeAddress, address _fetchTeamsFourAddress,address _predictionAddress ) external onlyOwner {
       setRandomAndRoundAddress(_randomNumberAndRoundAddress);
       setFetchTeamOne(_fetchTeamsOneAddress);
       setFetchTeamTwo(_fetchTeamsTwoAddress);
       setFetchTeamThree(_fetchTeamsThreeAddress);
       setFetchTeamFour(_fetchTeamsFourAddress);
       setPredictionAddress(_predictionAddress);
    }

    function setRandomAndRoundAddress(address _randomNumberAndRoundAddress) internal {
      randomNumberAndRoundAddress = _randomNumberAndRoundAddress;
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
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
        req.add('path', 'data,44,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }
    
    function receiveTeamOne(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFirstPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

     function receiveTeamTwoStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwo.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
        req.add('path', 'data,45,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwo(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setSecondPlaceTeam(_teamId); 
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

     function receiveTeamThreeStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThree.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
        req.add('path', 'data,46,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThree(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setThirdPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
        
    }

     function receiveTeamFourStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFour.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
        req.add('path', 'data,47,short_code');

        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFour(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsOneAddress).setFourthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

       function receiveTeamFiveStanding() private returns (bytes32 requestId) {
          Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFive.selector);
      
          req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,48,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }  

     function receiveTeamFive(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsTwoAddress).setFifthPlaceTeam(_teamId);
         emit ReceiveTeamTop16(_requestId, _teamId);
    }

      function receiveTeamSixStanding() private returns (bytes32 requestId) {
         Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSix.selector);
      
          req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,49,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSix(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsTwoAddress).setSixthPlaceTeam(_teamId);
         emit ReceiveTeamTop16(_requestId, _teamId);
    }

    function receiveTeamSevenStanding() private returns (bytes32 requestId) {
          Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSeven.selector);
      
          req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,50,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSeven(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsTwoAddress).setSeventhPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
       
    }

      function receiveTeamEightStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamEight.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,51,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamEight(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsTwoAddress).setEighthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
       
    }

      function receiveTeamNineStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamNine.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,52,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamNine(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setNinthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
        
    }

      function receiveTeamTenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTen.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,53,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTen(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setTenthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

      function receiveTeamElevenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamEleven.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,54,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamEleven(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setEleventhPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

      function receiveTeamTwelveStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamTwelve.selector);
      
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=API_KEY&season_id=3072');
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,55,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamTwelve(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsThreeAddress).setTwelfthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
        
    }

     function receiveTeamThirteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamThirteen.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,56,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamThirteen(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
         IFetchTeams(fetchTeamsFourAddress).setThirteenthPlaceTeam(_teamId);
         emit ReceiveTeamTop16(_requestId, _teamId);
    }

    function receiveTeamFourteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFourteen.selector);
      
        req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,57,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFourteen(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setFourteenthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

     function receiveTeamFifteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamFifteen.selector);
      
       req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,58,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamFifteen(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setFifteenthPlaceTeam(_teamId);
        emit ReceiveTeamTop16(_requestId, _teamId);
    }

    function receiveTeamSixteenStanding() private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.receiveTeamSixteen.selector);
      
       req.add('get', 'https://soccer.sportmonks.com/api/v2.0/teams/season/18017?api_token=TNXNDewLkubGU3dWgVhvsFhAKNn3j8zcTQrdzJWZDV0ZxzdXC1jRSgAxf0c0');
          req.add('path', 'data,59,short_code');

          req.addInt('times', 1);
          return sendChainlinkRequest(req, fee);
    }

     function receiveTeamSixteen(bytes32 _requestId, string memory _teamId) public recordChainlinkFulfillment(_requestId) {
        IFetchTeams(fetchTeamsFourAddress).setSixteenthPlaceTeam(_teamId);
       emit ReceiveTeamTop16(_requestId, _teamId);
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