import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  
  const SetAddresses = await ethers.getContractFactory("SetAddresses");
  const setaddresses = await SetAddresses.deploy();

  await setaddresses.deployed();

  console.log(`SetAddresses deployed to ${setaddresses.address}`);


  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy(setaddresses.address);

  await prediction.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);
   
   const randomNumberAndRound = await ethers.getContractFactory(
     "RetrieveRandomNumberAndWorldCupRound"
   );
   const randomnumberandround = await randomNumberAndRound.deploy(2278, setaddresses.address);

   await randomnumberandround.deployed();

   console.log(`RandomNumberAndRound deployed to ${randomnumberandround.address}`);

   const changeOrders = await ethers.getContractFactory("ChangeOrders");
   const changeorders = await changeOrders.deploy(setaddresses.address);

   await changeorders.deployed();

   console.log(
     `ChangeOrders deployed to ${changeorders.address}`
   );

   const Evolve = await ethers.getContractFactory("Evolve");
   const evolve  = await Evolve.deploy(setaddresses.address);

   await evolve.deployed();

   console.log(`Evolve deployed to ${evolve.address}`);

  const FetchTeamsOne = await ethers.getContractFactory("FetchTeamsOne");
  const fetchteamsone  = await FetchTeamsOne.deploy(setaddresses.address);

  await fetchteamsone.deployed();

  console.log(`FetchTeamsOne deployed to ${fetchteamsone.address}`);

  const FetchTeamsTwo = await ethers.getContractFactory("FetchTeamsTwo");
  const fetchteamstwo = await FetchTeamsTwo.deploy(setaddresses.address);

  await fetchteamstwo.deployed();

  console.log(`FetchTeamsTwo deployed to ${fetchteamstwo.address}`);

  const FetchTeamsThree = await ethers.getContractFactory("FetchTeamsThree");
  const fetchteamsthree = await FetchTeamsThree.deploy(setaddresses.address);

  await fetchteamsthree.deployed();

  console.log(`FetchTeamsThree deployed to ${fetchteamsthree.address}`);
  
   const FetchTeamsFour = await ethers.getContractFactory("FetchTeamsFour");
   const fetchteamsfour = await FetchTeamsFour.deploy(setaddresses.address);

   await fetchteamsfour.deployed();

   console.log(`FetchTeamsFour deployed to ${fetchteamsfour.address}`);

    const MintTeamsOne = await ethers.getContractFactory("MintTeamsOne");
    const mintteamsone = await MintTeamsOne.deploy(setaddresses.address);

    await mintteamsone.deployed();

    console.log(`MintTeamsOne deployed to ${mintteamsone.address}`);

    const MintTeamsTwo = await ethers.getContractFactory("MintTeamsTwo");
    const mintteamstwo = await MintTeamsTwo.deploy(setaddresses.address);

    await mintteamstwo.deployed();

    console.log(`MintTeamsTwo deployed to ${mintteamstwo.address}`);

      const WorldCupData = await ethers.getContractFactory("WorldCupData");
      const worldcupdata = await WorldCupData.deploy(setaddresses.address);

      await worldcupdata.deployed();

      console.log(`WorldCupData deployed to ${worldcupdata.address}`);
      
      await setaddresses.setTheAddresses(prediction.address, worldcupdata.address, fetchteamsone.address, fetchteamstwo.address, fetchteamsthree.address, fetchteamsfour.address, mintteamsone.address, mintteamstwo.address, evolve.address, randomnumberandround.address, changeorders.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
