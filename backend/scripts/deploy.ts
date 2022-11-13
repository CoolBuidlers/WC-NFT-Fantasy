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
      "0x7a1bac17ccc5b313516c5e16fb24f7659aa5ebed",
      "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f"
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

  const WorldCupData = await ethers.getContractFactory("WorldCupData");
  const worldcupdata = await WorldCupData.deploy();

  await worldcupdata.deployed();

  console.log(`WorldCupData deployed to ${worldcupdata.address}`);

  await randomnumber.setAddresses(
    prediction.address,
    worldcupdata.address
  );
  
  // await changeorders.setPredictionAddress(prediction.address) 
  // await fetchteamsone.setWorldCupDataAddress(worldcupdata.address)
  //  await fetchteamstwo.setWorldCupDataAddress(worldcupdata.address);
  //   await fetchteamsthree.setWorldCupDataAddress(worldcupdata.address);
  //    await fetchteamsfour.setWorldCupDataAddress(worldcupdata.address);
  // await evolve.setAddresses(prediction.address, fetchteamsone.address, fetchteamstwo.address, fetchteamsthree.address, fetchteamsfour.address, mintteamsone.address, mintteamstwo.address)
  // await mintteamsone.setAddresses(prediction.address, evolve.address, mintteamstwo.address, quizgame.address, numberguessinggame.address)
  // await mintteamstwo.setAddresses(prediction.address, evolve.address, mintteamsone.address)
  // await numberguessinggame.setMintTeamOneAddress(mintteamsone.address)
  // await quizgame.setMintTeamOneAddress(mintteamsone.address);
  // await worldcupdata.setAddresses(randomnumberandround.address, fetchteamsone.address, fetchteamstwo.address, fetchteamsthree.address, fetchteamsfour.address, prediction.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
