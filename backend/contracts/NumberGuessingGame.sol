// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';

contract NumberGuessingGame is VRFConsumerBaseV2, ConfirmedOwner {
    // event to keep track of the players for the currentGame ID
    event currentGame(address player, uint256 gameId);
    // event to keep track of winners for that gameId alongside the requestId for the VRF
    event Winners(address winner, bytes32 requestId, uint256 gameId);
    // event to keep track of the deleted players after certain conditions are not met
    event Ended(address player, uint256 gameId);
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }

    VRFCoordinatorV2Interface COORDINATOR;
    // Your subscription ID.
    uint64 s_subscriptionId;
    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;
    AggregatorV3Interface internal priceFeed;
    uint256 public maxPlayers = 2;
    // address override owner;
    address payable[] players;
    bool public started;
    uint32 callbackGasLimit = 100000;
    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;
    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 1;
    mapping (address => uint256) public addressToAmountSent;
    mapping (uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */
    mapping (address => bool) public alreadyGuessed;
    mapping (address => bool) public alreadyEntered;
    mapping (address => bool) public winnerMap;
    address public linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address public VRFCoordinator = 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed;
    bytes32 public keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;
    uint256 public fee = 0.1 * 10**18; // 0.1 link;
    uint256 public randomResult;
    bytes32 public currentRequestId;

    uint256 currentGameId = 1;
    uint128 public nonce;
    uint256 timeLimit;
    uint256 guess;

    constructor (uint64 subscriptionId) 
        VRFConsumerBaseV2(VRFCoordinator)
        ConfirmedOwner(msg.sender)
        {
        COORDINATOR = VRFCoordinatorV2Interface(VRFCoordinator);
        s_subscriptionId = subscriptionId;
        // Matic to USD
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
        // owner = msg.sender;
    }

    function getLatestPrice() public view returns (uint256) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price / 1000000);
    }

    function getVersion() public view returns (uint256) {
        return priceFeed.version();
    }

    function getConversionRate(uint256 maticAmount) public view returns (uint256) {
        uint256 maticPrice = getLatestPrice();
        uint256 maticAmountInUsd = (maticPrice * maticAmount) / 100;
        return maticAmountInUsd;
    }

    function startGame() public {
        started = true;
        timeLimit = 10 minutes;
    }

    modifier AlreadyEntered () {
        require(!alreadyEntered[msg.sender],
        "You have already Entered the game!");
        _;
    }

    modifier gameRunning() {
        require(
            started == true,
            "Game has not started yet!"
        );
        _;
    }

    function joinGame() public payable AlreadyEntered gameRunning {
        // uint256 minimumUSDAmount = 10 * 10**18;
        // uint256 minimumUSDAmount = 100000000 gwei; // 0.1 Matic => 0.08 usd
        uint256 amountToJoinGame = 0.1 ether;
        require(players.length < maxPlayers, 
            "Game is Full"
        );
        alreadyEntered[msg.sender] = true;
        require(msg.value >= amountToJoinGame, "NOT ENOUGH MATIC!");
        addressToAmountSent[msg.sender] += msg.value;
        players.push(payable(msg.sender));
        emit currentGame(msg.sender, currentGameId);
    }

    function requestRandomWords() public returns (uint256 requestId) {
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
        randomResult = _randomWords[0] % 6; // 
        emit RequestFulfilled(_requestId, _randomWords);
    }

    function getRequestStatus(uint256 _requestId) external view returns (bool fulfilled, uint256[] memory randomWords) {
        require(s_requests[_requestId].exists, 'request not found');
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords);
    }

    function guessTheNumberValue(uint256 _guess) public {
        require(
            msg.sender == players[0] || msg.sender == players[1],
            "Not a Player!!!"
        );
        require(!alreadyGuessed[msg.sender], "You have already made a guess");
        require(randomResult > 0, "Random Num not generated YET!");
        guess = _guess;
        if (randomResult == guess) {
            alreadyEntered[players[0]] = false;
            alreadyEntered[players[1]] = false;
            delete players;
            alreadyGuessed[msg.sender] = true;
            emit Winners(msg.sender, currentRequestId, currentGameId);
            currentGameId++;
            nonce = 0;
            randomResult = 0;
            winnerMap[msg.sender] = true;
        }
        else {
            nonce++;
            alreadyGuessed[msg.sender] = true;
            alreadyEntered[msg.sender] = false;
        }
        if (nonce == 2) {
            alreadyEntered[players[0]] = false;
            alreadyEntered[players[1]] = false;
            alreadyGuessed[players[0]] = false;
            alreadyGuessed[players[1]] = false;
            delete players;
            currentGameId++;
            randomResult = 0;
            emit Ended(players[0], currentGameId);
            emit Ended(players[1], currentGameId);
            nonce = 0;
            // withdraw();
        }
    }

    function rewardWinner(address payable _winner) public {
        require(winnerMap[_winner] == true, "You are not the winner");
        (bool sent, ) = _winner.call{value: 0.2 ether}("");
        require(sent, "Failed to reward Winner!");
    }

    function RestartGame() public {
        require(
            block.timestamp > timeLimit && randomResult > 0,
            "Game not Ended yet!"
        );
        for (uint256 i = 0; i < players.length; i++) {
            alreadyEntered[players[i]] = false;
            emit Ended(players[i], currentGameId);
        }
        delete players;
        nonce = 0;
        randomResult = 0;
        currentGameId++;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public payable onlyOwner {
        require(address(this).balance > 0,
         "There is no Money in the contract"
        );
        uint256 balance = address(this).balance;
        (bool sent, ) = owner().call{ value: balance }("");
        require(sent, "Failed to withdraw!");
    }

    receive() external payable {}

    fallback() external payable {}

}