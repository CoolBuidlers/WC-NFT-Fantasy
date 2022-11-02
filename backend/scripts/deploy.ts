import { ethers } from "hardhat";

async function main() {
  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy();

  await prediction.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
