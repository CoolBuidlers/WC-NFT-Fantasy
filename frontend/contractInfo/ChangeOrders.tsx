export const CHANGE_ORDERS_ABI = [
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
        name: "firstTeam",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "secondTeam",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
    ],
    name: "TeamsSwapped",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_scenario",
        type: "uint256",
      },
    ],
    name: "changeOrderForTop16",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_scenario",
        type: "uint256",
      },
    ],
    name: "changeOrderForTop32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_scenario",
        type: "uint256",
      },
    ],
    name: "changeOrderForTop4",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_scenario",
        type: "uint256",
      },
    ],
    name: "changeOrderForTop8",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "predictionAddress",
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
    name: "renounceOwnership",
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
        name: "_predictionAddress",
        type: "address",
      },
    ],
    name: "setPredictionAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
];

export const CHANGE_ORDERS_ADDRESS = "0xd9D944eA52265B9d307c0FBa090E08E386A3e34c";