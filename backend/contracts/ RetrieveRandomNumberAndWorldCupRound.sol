// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';
import "@openzeppelin/contracts/utils/Strings.sol";
import "../interfaces/IPrediction.sol";
import "../interfaces/IRetrieveRandomNumberAndWorldCupRound.sol";
import "../interfaces/IWorldCupData.sol";

 interface KeeperCompatibleInterface {
    function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
}

contract RetrieveRandomNumberAndWorldCupRound is ChainlinkClient, VRFConsumerBaseV2, ConfirmedOwner {
    using Strings for uint256;
    using Chainlink for Chainlink.Request;
    bytes32 private jobId;
    uint256 private fee;
    uint arrayNumber = 5;
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
    event RoundChanged(bytes32 requestId, uint time, uint round);
    struct RequestStatus {
        bool fulfilled; 
        bool exists;
        uint256[] randomWords;
    }
    address predictionAddress;
    address randomNumberAndRoundAddress;
    address worldCupData16Address;
    mapping(uint256 => RequestStatus) public s_requests;
    VRFCoordinatorV2Interface COORDINATOR;

    uint64 s_subscriptionId;

    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;

    bytes32 keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;
  
    uint32 callbackGasLimit = 100000;

    uint16 requestConfirmations = 3;

    uint32 numWords = 1;

    constructor(uint64 subscriptionId, address _predictionAddress, address _randomNumberAndRoundAddress, address _worldCupData16Address) ConfirmedOwner(msg.sender) VRFConsumerBaseV2(0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed) {
        predictionAddress = _predictionAddress;
        randomNumberAndRoundAddress = _randomNumberAndRoundAddress;
        worldCupData16Address = _worldCupData16Address;
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        COORDINATOR = VRFCoordinatorV2Interface(0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed);
        s_subscriptionId = subscriptionId;
        jobId = 'ca98366cc7314957b8c012c72f05aeeb';
        fee = (1 * LINK_DIVISIBILITY);
    }

    // Assumes the subscription is funded sufficiently.
    function requestRandomWords() public onlyOwner returns (uint256 requestId) {
        // Will revert if subscription is not set and funded.
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        s_requests[requestId] = RequestStatus({randomWords: new uint256[](0), exists: true, fulfilled: false});
        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
        require(s_requests[_requestId].exists, 'request not found');
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        emit RequestFulfilled(_requestId, _randomWords);
    }

    function getRequestStatus(uint256 _requestId) public view returns (bool fulfilled, uint256 randomWords) {
        require(s_requests[_requestId].exists, 'request not found');
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords[0]);
    }
   
    function fetchCurrentRound() public returns (bytes32 requestId) {
        require(msg.sender == predictionAddress, "USER_CANT_CALL_THIS_FUNCTION");
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillRound.selector);
        req.add('get', 'https://app.sportdataapi.com/api/v1/soccer/rounds?apikey=API_KEY&season_id=3072');
        req.add('path', string(abi.encodePacked('data,', arrayNumber.toString(),",",'is_current')));
        req.addInt('times', 1);
        return sendChainlinkRequest(req, fee);
    }

     function fulfillRound(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId) {
       if(_volume == 1 && arrayNumber == 5) {
        IWorldCupData(worldCupData16Address).fetchTop16Teams();
        IPrediction(predictionAddress).changeThePhase();
         emit RoundChanged(_requestId, block.timestamp, 16);
         arrayNumber++;
       } else if(_volume == 1 && arrayNumber == 6) {
          IPrediction(predictionAddress).changeThePhase();
         emit RoundChanged(_requestId, block.timestamp, 8);
         arrayNumber++;
       } else if(_volume == 1 && arrayNumber == 7) {
          IPrediction(predictionAddress).changeThePhase();
          emit RoundChanged(_requestId, block.timestamp, 4);
          arrayNumber++;
       }
    }

    function returnArrayNumber() public view returns(uint) {
        return arrayNumber;
    }
    
     function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }

}
