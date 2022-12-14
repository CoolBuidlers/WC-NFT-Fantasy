import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config({ path: ".env" });

const QUICKNODE_API_KEY_URL = process.env.QUICKNODE_API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://cold-thrumming-card.matic-testnet.discover.quiknode.pro/7e16a39a608d405b5a7751989f0acbc8ec2bca10/",
        enabled: true,
      },
    },
    polygon: {
      url: QUICKNODE_API_KEY_URL,
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""],
    },
  },

  etherscan: {
    apiKey:
      process.env.ETHERSCAN_API_KEY !== undefined
        ? process.env.ETHERSCAN_API_KEY
        : "",
  },
};

export default config;
