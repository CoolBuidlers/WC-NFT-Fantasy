// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract QuizGame {

    address public owner;
    bool public started;
    // address payable player;
    address[] public players;
    event currentGame(address caller, uint256 currentGameId);
    event winner(address winner, uint256 gameId);

    struct Quiz {
        string question;
        string optionOne;
        string optionTwo;
        string optionThree;
        string optionFour;
        uint256 correctAnswer;
    }
    mapping (address => bool) public alreadyJoined;
    mapping (uint256 => Quiz) public quiz;
    mapping (address => uint256) public addressToAmountSent;
    uint256 public quizId;
    uint256 public currentGameId = 1;
    uint256 public answerId;
    uint256 public score;
    bool public guess;
    uint256 public timeLimit;
    uint256 public correctAnswer;
    uint256 public quarterFinalsStartingTime = 1670570983000;
    uint256 public quarterFinalsEndingTime = 1670916583000;


    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function AddQuiz(
        string memory _question,
        string memory _optionOne,
        string memory _optionTwo,
        string memory _optionThree,
        string memory _optionFour,
        uint256 _correctAnswer
    ) 
    public onlyOwner
    {
        require(quizId < 3, "Can't add more than 3 questions");
        quiz[quizId] = Quiz(
            _question,
            _optionOne,
            _optionTwo,
            _optionThree,
            _optionFour,
            _correctAnswer
        );
        quizId++;
    }

    function joinGame() public payable {
        require(!alreadyJoined[msg.sender], "You have already joined the game!");
        require(msg.value >= 0.01 ether, "Broke People not Allowed!!!");
        addressToAmountSent[msg.sender] += msg.value;
        alreadyJoined[msg.sender] = true;
        players.push(msg.sender);
        emit currentGame(msg.sender, currentGameId);
    }

    function checkAnswer(uint256 _selectedIndex) public {
        // require(block.timestamp < timeLimit,
        // "Dumbass can't answer 3 questions in 10 minutes!!!"
        // );
        require(quizId > 0, "There are no quizzes to check!");
        if (_selectedIndex == quiz[answerId].correctAnswer) {
            guess = true;
            score += 1;
            answerId += 1;
        }
        else {
            guess = false;
            answerId += 1;
        }
    }

    function checkIfWinner() public {
        if (score == 3) {
            // players[currentGameId].transfer(address(this).balance); // normally we would transfer them an NFT for our game
            guess = false;
            score = 0;
            currentGameId++;
            started = false;
            emit winner(players[currentGameId], currentGameId);
        }
        else {
            score = 0;
            guess = false;
            currentGameId++;
            started = false;
        }
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function startGame() public {
        // require(
        // block.timestamp > quarterFinalsStartingTime, 
        // "The game can only be played when the quarterfinals start"
        // );
        require(started == false, "Game is already started!");
        started = true;
        timeLimit = block.timestamp + 10 minutes;
    }

    function pauseGame() public {
        require(started == true, "Game is already paused!");
        started = false;
    }

}