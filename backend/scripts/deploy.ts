import { ethers } from "hardhat";

async function main() {
  // Prediction
  const Prediction = await ethers.getContractFactory("WCNFTFantasy");
  const prediction = await Prediction.deploy();
  await prediction.deployed();

  // Evolve
  const Evolve = await ethers.getContractFactory("Evolve");
  const evolve = await Evolve.deploy();
  await evolve.deployed();

  // Change Order
  const COrder = await ethers.getContractFactory("ChangeOrders");
  const corder = await COrder.deploy();
  await corder.deployed();

  // Quiz Game
  const Quiz = await ethers.getContractFactory("QuizGame");
  const quiz = await Quiz.deploy();
  await quiz.deployed();

  // Number Guessing Game
  const Number = await ethers.getContractFactory("NumberGuessingGame");
  const number = await Number.deploy(12);
  await number.deployed();

  console.log(`Prediction deployed to ${prediction.address}`);
  console.log(`Evolve deployed to ${evolve.address}`);
  console.log(`COrder deployed to ${corder.address}`);
  console.log(`Quiz deployed to ${quiz.address}`);
  console.log(`Number deployed to ${number.address}`);

  /*
Prediction deployed to 0x1a1Cdf0956BB281B6AC7BF02aAf46bD341224510
Evolve deployed to 0x13A79E4e3970f323D448E5cf9ce6a2Fa4387c370
COrder deployed to 0xD0F3b690d308d6Ac07954d8c5E43993ad8292d04
Quiz deployed to 0xC8D54bB4E3095f81Ea440DE53De2F85DdB8bc7a7
Number deployed to 0xcace4cEFcE69c37c6389FEd8B19d177bB601E047
  */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
