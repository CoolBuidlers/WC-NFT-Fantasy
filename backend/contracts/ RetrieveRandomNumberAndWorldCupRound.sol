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

contract RetrieveRandomNumberAndWorldCupRound is ChainlinkClient, VRFConsumerBaseV2, ConfirmedOwner {
    using Strings for uint256;
    using Chainlink for Chainlink.Request;
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
    event RoundChanged(bytes32 requestId, uint time, uint round);
    bytes32 private jobId;
    bytes32 keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;
    uint256 private fee;
    uint arrayNumber = 5;
     // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;
    uint64 s_subscriptionId;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 3;
    address public predictionAddress;
    address public worldCupDataAddress;
    struct RequestStatus {
        bool fulfilled; 
        bool exists;
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus) public s_requests;
    VRFCoordinatorV2Interface COORDINATOR;

    function getPredictionAddress(address _predictionAddress) external onlyOwner {
        predictionAddress = _predictionAddress;
    }

    function getWorldCupDataAddress(address _worldCupDataAddress) external onlyOwner {
        worldCupDataAddress = _worldCupDataAddress;
    }

    function setSubscriptionId(uint64 subscriptionId) external onlyOwner {
         s_subscriptionId = subscriptionId;
    }


    constructor(uint64 subscriptionId) ConfirmedOwner(msg.sender) VRFConsumerBaseV2(0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        COORDINATOR = VRFCoordinatorV2Interface(0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed);
        s_subscriptionId = subscriptionId;
        jobId = 'ca98366cc7314957b8c012c72f05aeeb';
        fee = (1 * LINK_DIVISIBILITY);
    }

    // Assumes the subscription is funded sufficiently.
    function requestRandomWords() public returns (uint256 requestId) {
        require(msg.sender == predictionAddress, "USER_CANT_CALL_FUNCTION");
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

    function getRequestStatus() public view returns (bool fulfilled, uint256[] memory randomWords) {
        require(s_requests[lastRequestId].exists, 'request not found');
        RequestStatus memory request = s_requests[lastRequestId];
        return (request.fulfilled, request.randomWords);
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
        IWorldCupData(worldCupDataAddress).fetchTop16Teams();
        IPrediction(predictionAddress).changeThePhase();
         emit RoundChanged(_requestId, block.timestamp, 16);
         arrayNumber++;
       } else if(_volume == 1 && arrayNumber == 6) {
         IWorldCupData(worldCupDataAddress).fetchTop16Teams();
        IPrediction(predictionAddress).changeThePhase();
         emit RoundChanged(_requestId, block.timestamp, 8);
         arrayNumber++;
       } else if(_volume == 1 && arrayNumber == 7) {
          IWorldCupData(worldCupDataAddress).fetchTop16Teams();
          IPrediction(predictionAddress).changeThePhase();
          emit RoundChanged(_requestId, block.timestamp, 4);
          arrayNumber++;
       }
    }
    
     function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }

}
