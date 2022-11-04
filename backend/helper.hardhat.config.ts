
export const networkConfig = {
  default: {
    name: "hardhat",
    timeInterval: "30",
  },
  80001: {
    name: "mumbai",
    vrfCoordinatorV2: " 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
    subscriptionId: "2278",
  },
  31337: {
    name: "localhost",
    subscriptionId: "588",
    entranceFee: "100000000000000000", // 0.1 ETH
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    callbackGasLimit: "500000", // 500,000
    timeInterval: "30", // 30 seconds
  },
};
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
export const developmentChains = ["hardhat", "localhost"];
