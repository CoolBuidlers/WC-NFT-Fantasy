import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
   const QuizGame = await ethers.getContractFactory("QuizGame");
   const quizgame = await QuizGame.deploy();
   await quizgame.deployed();

   console.log("QuizGame", quizgame.address)

    const NumberGuessingGame = await ethers.getContractFactory("NumberGuessingGame");
    const numberguessinggame = await NumberGuessingGame.deploy(
      2272,
      "0xAE975071Be8F8eE67addBC1A82488F1C24858067",
      "0xd729dc84e21ae57ffb6be0053bf2b0668aa2aaf300a2a7b2ddf7dc0bb6e875a8"
    );
    await numberguessinggame.deployed();

    console.log("NumberGame", numberguessinggame.address);

  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy();

  await prediction.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);

  const randomNumber = await ethers.getContractFactory(
    "RetrieveRandomNumber"
  );
  const randomnumber = await randomNumber.deploy(2278);

  await randomnumber.deployed();

  console.log(
    `randomNumber deployed to ${randomnumber.address}`
  );

  const changeOrders = await ethers.getContractFactory("ChangeOrders");
  const changeorders = await changeOrders.deploy();

  await changeorders.deployed();

  console.log(`ChangeOrders deployed to ${changeorders.address}`);

  const Evolve = await ethers.getContractFactory("Evolve");
  const evolve = await Evolve.deploy();

  await evolve.deployed();

  console.log(`Evolve deployed to ${evolve.address}`);

  const FetchTeamsOne = await ethers.getContractFactory("FetchTeamsOne");
  const fetchteamsone = await FetchTeamsOne.deploy();

  await fetchteamsone.deployed();

  console.log(`FetchTeamsOne deployed to ${fetchteamsone.address}`);

  const FetchTeamsTwo = await ethers.getContractFactory("FetchTeamsTwo");
  const fetchteamstwo = await FetchTeamsTwo.deploy();

  await fetchteamstwo.deployed();

  console.log(`FetchTeamsTwo deployed to ${fetchteamstwo.address}`);

  const FetchTeamsThree = await ethers.getContractFactory("FetchTeamsThree");
  const fetchteamsthree = await FetchTeamsThree.deploy();

  await fetchteamsthree.deployed();

  console.log(`FetchTeamsThree deployed to ${fetchteamsthree.address}`);

  const FetchTeamsFour = await ethers.getContractFactory("FetchTeamsFour");
  const fetchteamsfour = await FetchTeamsFour.deploy();

  await fetchteamsfour.deployed();

  console.log(`FetchTeamsFour deployed to ${fetchteamsfour.address}`);

  const MintTeamsOne = await ethers.getContractFactory("MintTeamsOne");
  const mintteamsone = await MintTeamsOne.deploy();

  await mintteamsone.deployed();

  console.log(`MintTeamsOne deployed to ${mintteamsone.address}`);

  const MintTeamsTwo = await ethers.getContractFactory("MintTeamsTwo");
  const mintteamstwo = await MintTeamsTwo.deploy();

  await mintteamstwo.deployed();

  console.log(`MintTeamsTwo deployed to ${mintteamstwo.address}`);

  const WorldCupData16 = await ethers.getContractFactory("WorldCupData16");
  const worldcupdata16 = await WorldCupData16.deploy();

  await worldcupdata16.deployed();

  console.log(`WorldCupData16 deployed to ${worldcupdata16.address}`);

  const WorldCupData8 = await ethers.getContractFactory("WorldCupData8");
  const worldcupdata8 = await WorldCupData8.deploy();

  await worldcupdata16.deployed();

  console.log(`WorldCupData8 deployed to ${worldcupdata8.address}`);

  const WorldCupData4 = await ethers.getContractFactory("WorldCupData4");
  const worldcupdata4 = await WorldCupData4.deploy();

  await worldcupdata4.deployed();

  console.log(`WorldCupData4 deployed to ${worldcupdata4.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
