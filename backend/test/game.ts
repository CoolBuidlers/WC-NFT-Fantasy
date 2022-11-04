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
            const VRFCoordinatorV2Mock =
              await VRFCoordinatorV2MockFactory.deploy(
                BASE_FEE,
                GAS_PRICE_LINK
              );

            const fundAmount = "10000000000000000000";
            const transaction = await VRFCoordinatorV2Mock.createSubscription();
            const transactionReceipt = await transaction.wait(1);
            const subscriptionId = ethers.BigNumber.from(
              transactionReceipt.events[0].topics[1]
            );
            await VRFCoordinatorV2Mock.fundSubscription(
              subscriptionId,
              fundAmount
            );

            const vrfCoordinatorAddress = VRFCoordinatorV2Mock.address;
            const keyHash = 
              "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";

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
          }

      xit("Should be able to start game", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const GuessingGame = await ethers.getContractFactory(
          "GuessingGameMock"
        );
        const guessinggame = await GuessingGame.deploy(2278);
        await guessinggame.deployed();

        await guessinggame.startGame();
      });

      xit("Should be able to join game", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const GuessingGame = await ethers.getContractFactory(
          "GuessingGameMock"
        );
        const guessinggame = await GuessingGame.deploy(2278);
        await guessinggame.deployed();
        await guessinggame.startGame();
        await guessinggame
          .connect(addr1)
          .joinGame({ value: ethers.utils.parseEther("0.1") });
        //   expect(
        //     await guessinggame
        //       .connect(addr1)
        //       .joinGame({ value: ethers.utils.parseEther("0.1") })
        //   ).to.be.revertedWith("You have already Entered the game!");
        expect(await guessinggame.players(0));
        expect(
          await guessinggame.addressToAmountSent(addr1.address)
        ).to.be.equal(ethers.utils.parseEther("0.1"));
      });

      it("Should successfully request a random number", async function () {
                      const { numberguessinggame, VRFCoordinatorV2Mock } = await loadFixture(
                          deployRandomNumberConsumerFixture
                      )
                      await expect(numberguessinggame.requestRandomWords()).to.emit(
                          VRFCoordinatorV2Mock,
                          "RandomWordsRequested"
                      )
    });
     it("Should be able to request RandomNumber", async function () {
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
})


describe("QuizGame", async function() {
    it("Should be able to make game", async function() {
         const [owner, addr1, addr2] = await ethers.getSigners();
          const QuizGame = await ethers.getContractFactory(
            "QuizGame"
          );
           const quizgame = await QuizGame.deploy();
           await quizgame.deployed();
           await quizgame.connect(owner).AddQuiz("What is my name", "L", "J", "C", "D", 1);

    })

     it("Should be able to join game", async function () {
       const [owner, addr1, addr2] = await ethers.getSigners();
       const QuizGame = await ethers.getContractFactory("QuizGame");
       const quizgame = await QuizGame.deploy();
       await quizgame.deployed();
       await quizgame
         .connect(owner)
         .AddQuiz("What is my name", "L", "J", "C", "D", 1);
         await quizgame.connect(addr1).joinGame({value: ethers.utils.parseEther("0.01")})
         expect(await quizgame.connect(addr1).returnBalance()).to.be.equal(
           ethers.utils.parseEther("0.01")
         );
     });
})