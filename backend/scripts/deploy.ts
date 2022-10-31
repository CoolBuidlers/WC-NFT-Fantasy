import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy();

  await prediction.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
