// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

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
    uint256 public maxPlayers = 2;
    // address override owner;
    address payable[] public players;
    bool public started;
    uint32 callbackGasLimit = 100000;
    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;
    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 1;
    mapping (uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */
    mapping (address => bool) alreadyGuessed;
    mapping (address => bool) alreadyEntered;
    mapping (address => bool) winnerMap;
    address public linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    bytes32 public keyHash;
    uint256 public fee = 0.1 * 10**18; // 0.1 link;
    uint256 randomResult;
    bytes32 public currentRequestId;

    uint256 currentGameId = 1;
    uint128 public nonce;
    uint256 timeLimit;

    constructor (uint64 subscriptionId, address _vrfCoordinator, bytes32 _keyHash) 
        VRFConsumerBaseV2(_vrfCoordinator)
        ConfirmedOwner(msg.sender)
        {
        COORDINATOR = VRFCoordinatorV2Interface(_vrfCoordinator);
        keyHash = _keyHash;
        s_subscriptionId = subscriptionId;
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

    function joinGame() public AlreadyEntered gameRunning {
        require(players.length < maxPlayers, "Game is Full");
        alreadyEntered[msg.sender] = true;
        players.push(payable(msg.sender));
        emit currentGame(msg.sender, currentGameId);
        if(players.length == maxPlayers) {
         requestRandomWords();
        }
    }

    function requestRandomWords() internal returns (uint256 requestId) {
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

    function getRequestStatus(uint256 _requestId) internal view returns (bool fulfilled, uint256[] memory randomWords) {
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
        if (randomResult == _guess) {
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
}