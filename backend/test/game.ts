const { assert, expect } = require("chai")
const { ethers, deployments, network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper.hardhat.config")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

!developmentChains.includes(network.name)
  ? describe.skip
  :  describe("GuessingGame", async function () {
          async function deployRandomNumberConsumerFixture() {
        const [deployer] = await ethers.getSigners();

        /**
         * @dev Read more at https://docs.chain.link/docs/chainlink-vrf/
         */
        const BASE_FEE = "100000000000000000";
        const GAS_PRICE_LINK = "1000000000"; // 0.000000001 LINK per gas

        const chainId = network.config.chainId;

        const VRFCoordinatorV2MockFactory = await ethers.getContractFactory(
          "VRFCoordinatorV2Mock"
        );
        const VRFCoordinatorV2Mock = await VRFCoordinatorV2MockFactory.deploy(
          BASE_FEE,
          GAS_PRICE_LINK
        );

        const fundAmount =
          networkConfig[chainId]["fundAmount"] || "1000000000000000000";
        const transaction = await VRFCoordinatorV2Mock.createSubscription();
        const transactionReceipt = await transaction.wait(1);
        const subscriptionId = ethers.BigNumber.from(
          transactionReceipt.events[0].topics[1]
        );
        await VRFCoordinatorV2Mock.fundSubscription(subscriptionId, fundAmount);

        const vrfCoordinatorAddress = VRFCoordinatorV2Mock.address;
        const keyHash =
          networkConfig[chainId]["keyHash"] ||
          "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc";

       const NumberGuessingGame = await ethers.getContractFactory(
              "NumberGuessingGame"
             );
        const numberguessinggame = await NumberGuessingGame.connect(
              deployer
            ).deploy(subscriptionId, vrfCoordinatorAddress, keyHash);
        await VRFCoordinatorV2Mock.addConsumer(
          subscriptionId,
          numberguessinggame.address
        );

        return { numberguessinggame, VRFCoordinatorV2Mock };

      xit("Should be able to start game", async function () {
          const { numberguessinggame, VRFCoordinatorV2Mock } =
            await loadFixture(deployRandomNumberConsumerFixture);

        await numberguessinggame.startGame();
      });

      xit("Should be able to join game", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
          const { numberguessinggame, VRFCoordinatorV2Mock } =
            await loadFixture(deployRandomNumberConsumerFixture);
        await numberguessinggame.startGame();
        await numberguessinggame
          .connect(addr1)
          .joinGame();
        expect(await numberguessinggame.players(0));
  
      });

    //   it("Should successfully request a random number", async function () {
    //                   const { numberguessinggame, VRFCoordinatorV2Mock } = await loadFixture(
    //                       deployRandomNumberConsumerFixture
    //                   )
    //                   await expect(numberguessinggame.requestRandomWords()).to.emit(
    //                       VRFCoordinatorV2Mock,
    //                       "RandomWordsRequested"
    //                   )
    // });
     xit("Should be able to request RandomNumber", async function () {
       const { numberguessinggame, VRFCoordinatorV2Mock } = await loadFixture(
         deployRandomNumberConsumerFixture
       );
       await numberguessinggame.requestRandomWords();
          await network.provider.send("evm_increaseTime", [
            1000000000000000,
          ]);
          await network.provider.request({ method: "evm_mine", params: [] });
       const requestId = await numberguessinggame.lastRequestId();
    //    await expect(
    //      VRFCoordinatorV2Mock.fulfillRandomWords(
    //        requestId,
    //        numberguessinggame.address
    //      )
    //    ).to.emit(requestId, "ReturnedRandomness");
       const result = await numberguessinggame.getRequestStatus(requestId)
       console.log(result[1]);
     });

    it("Should be able to guess number", async function() {
           const [owner, addr1, addr2] = await ethers.getSigners();
           const { numberguessinggame, VRFCoordinatorV2Mock } =
           await loadFixture(deployRandomNumberConsumerFixture);
           numberguessinggame.connect(owner).startGame()
           numberguessinggame.connect(addr1).joinGame();
           numberguessinggame.connect(addr2).joinGame();
          await network.provider.send("evm_increaseTime", [
               1000000000000000,
             ]);
             await network.provider.request({ method: "evm_mine", params: [] });
             const requestId = await numberguessinggame.lastRequestId();
            assert(
              requestId.gt(ethers.constants.Zero),
              "First random number is greather than zero"
            );

    })
})


describe("QuizGame", async function() {
    it("Should be able to make game", async function() {
         const [owner, addr1, addr2] = await ethers.getSigners();
          const QuizGame = await ethers.getContractFactory(
            "QuizGame"
          );
           const quizgame = await QuizGame.deploy();
           await quizgame.deployed();
           await quizgame.connect(owner).AddQuizOne("What is my name", "L", "J", "C", "D", "L");
          await quizgame.connect(owner).AddQuizOne("What is my name", "L", "J", "C", "D", "L");
          await quizgame.connect(owner).AddQuizOne("What is my name", "L", "J", "C", "D", "L");
           await quizgame.connect(owner).AddQuizTwo("What is my name", "L", "J", "C", "D", "L");
    })

     it("Should be able to join game", async function () {
       const [owner, addr1, addr2] = await ethers.getSigners();
       const QuizGame = await ethers.getContractFactory("QuizGame");
       const quizgame = await QuizGame.deploy();
       await quizgame.deployed();
       await quizgame.connect(owner).AddQuizOne("What is my name", "L", "J", "C", "D", "L");
        await quizgame
          .connect(owner)
          .AddQuizOne("What is my name", "L", "J", "C", "D", "L");
        await quizgame
          .connect(owner)
          .AddQuizOne("What is my name", "L", "J", "C", "D", "L");
       await quizgame.connect(owner).startGameOne();
       await quizgame.connect(addr1).joinGameOne();
     });

      it("Should be able to guess answer and receive nft", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const QuizGame = await ethers.getContractFactory("QuizGame");
        const quizgame = await QuizGame.deploy();
        await quizgame.deployed();
         const mintAddress = await ethers.getContractFactory("MintTeamsOne");
         const mintaddress = await mintAddress.deploy(addr1.address);
         await mintaddress.deployed();
        await quizgame.setMintTeamOneAddress(mintaddress.address)
        await mintaddress.setQuizGameAddress(quizgame.address)
        await quizgame
          .connect(owner)
          .AddQuizOne("What is my name", "L", "J", "C", "D", "L");
        await quizgame
          .connect(owner)
          .AddQuizOne("What is my name", "L", "J", "C", "D", "L");
        await quizgame
          .connect(owner)
          .AddQuizOne("What is my name", "L", "J", "C", "D", "L");
        await quizgame.connect(owner).startGameOne();
        await quizgame.connect(addr1).joinGameOne();
        await quizgame.connect(addr1).guessQuestionsOne("L", "L", "L");
        expect(await quizgame.connect(addr1).getScore(0)).to.be.equal(3);
        await quizgame.connect(addr1).claimPrizeOne();
        expect(await mintaddress.balanceOf(addr1.address, 2)).to.be.equal(1)
      });

      it("Should be able to return quiz info", async function() {
          const [owner, addr1, addr2] = await ethers.getSigners();
          const QuizGame = await ethers.getContractFactory("QuizGame");
          const quizgame = await QuizGame.deploy();
          await quizgame.deployed();
          await quizgame.connect(owner).AddQuizOne("What is my name", "Big", "Foot", "Man", "Aye", "Wow");
          const quizInfo = await quizgame.returnQuizOne(0)
          console.log(quizInfo);
      })
})