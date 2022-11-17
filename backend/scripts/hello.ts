import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const QuizGame = await ethers.getContractFactory("Hello");
  const quizgame = await QuizGame.deploy(
    "0xDA5fec43B04b6DC46232824dFa91A5Fd3Ad33fB3"
  );
  await quizgame.deployed();

  console.log("Hello", quizgame.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
