export const PREDICTION_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "smartContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "predictor",
        type: "address",
      },
    ],
    name: "AllPredictors",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "predictor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamOne",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamTwo",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamThree",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamFour",
        type: "bytes",
      },
    ],
    name: "FirstFourTeamsMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "predictor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamFive",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "teamSix",
        type: "bytes",
      },
    ],
    name: "TwoExtraTeamsMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winnerOne",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winnerTwo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winnerThree",
        type: "address",
      },
    ],
    name: "Winners",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "changeOrderAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "changeThePhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "changedOrder",
    outputs: [
      {
        internalType: "bool",
        name: "orderChanged",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPhase",
    outputs: [
      {
        internalType: "enum WCNFTFantasy.GamePhases",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchTeamAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "getPrediction",
    outputs: [
      {
        internalType: "bytes",
        name: "team",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasItBeenThreeMinutes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
    ],
    name: "haveYouMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "highestAmountOfPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPhase16",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPhase32",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPhase4",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPhase8",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_teamFive",
        type: "string",
      },
      {
        internalType: "string",
        name: "_teamSix",
        type: "string",
      },
    ],
    name: "mintOtherTwoTeams",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintTeamAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_teamOne",
        type: "string",
      },
      {
        internalType: "string",
        name: "_teamTwo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_teamThree",
        type: "string",
      },
      {
        internalType: "string",
        name: "_teamFour",
        type: "string",
      },
    ],
    name: "mintTopFourTeams",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
    ],
    name: "mintedExtraTwo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomAndRoundAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiveBackMoney",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "secondHighestAmountOfPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_changeOrderAddress",
        type: "address",
      },
    ],
    name: "setChangeOrderAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fetchTeamAddress",
        type: "address",
      },
    ],
    name: "setFetchTeamAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setFifthPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setFirstPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setFourthPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mintTeamAddress",
        type: "address",
      },
    ],
    name: "setMintTeamAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_randomAndRoundAddress",
        type: "address",
      },
    ],
    name: "setRandomAndRoundAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_canReceiveRefund",
        type: "bool",
      },
    ],
    name: "setRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setSecondPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setSixthPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predictor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_team",
        type: "bytes",
      },
    ],
    name: "setThirdPrediction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_worldCupDataAddress",
        type: "address",
      },
    ],
    name: "setWorldCupDataAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "thirdHighestAmountOfPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "worldCupDataAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const PREDICTION_ADDRESS = "0x9E6a4003fc5699DBb3A36cf08Cf9Cb597e762c16";