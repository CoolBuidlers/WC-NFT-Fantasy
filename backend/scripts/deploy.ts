import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy();

  await prediction.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);
   
   const mintTeamsOne = await ethers.getContractFactory("MintTeamsOne");
   const mintteamsone = await mintTeamsOne.deploy();

   await mintteamsone.deployed();

   console.log(`MintTeamsOne deployed to ${mintteamsone.address}`);

   await mintteamsone.setPredictionAddress(prediction.address)
   await prediction.setMintTeamAddress(mintteamsone.address)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
