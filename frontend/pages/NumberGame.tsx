import React, { useState } from "react";
import Music from "../public/img/music.png";
import Controller from "../public/img/controller.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useSigner, useProvider, useContract, useAccount } from "wagmi";
import {
  NUMBER_GUESSING_GAME_ABI,
  NUMBER_GUESSING_GAME_CONTRACT_ADDRESS,
} from "../Constants/Index";
import { BigNumber, ethers } from "ethers";

type Props = {};

const NumberGame = (): JSX.Element => {
  const connectedWallet = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: NUMBER_GUESSING_GAME_CONTRACT_ADDRESS,
    contractInterface: NUMBER_GUESSING_GAME_ABI,
    signerOrProvider: signer || provider,
  });

  const [isStarted, setIsStarted] = useState<boolean>(true);
  const [joined, setJoined] = useState<boolean>(true);
  const [hasGuessed, setHasGuessed] = useState<boolean>(true);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);
  const [playerGuess, setPlayerGuess] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  // StartGame function here
  const startGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.startGame();
      await txn.wait();
      setIsStarted(true);
<<<<<<< HEAD
    }
    catch (err: any) {
      console.log(err)
=======
    } catch (err: any) {
      console.log(err);
>>>>>>> eb2389810376487fd6f7e043926534c77d0e90c6
      // use the hot toast to display the reason
    }
  };

  const joinGame = async (): Promise<void> => {
    try {
<<<<<<< HEAD
      const txn: any = await contract.joinGame();
=======
      const txn: any = await contract.joinGame({
        value: ethers.utils.formatEther("0.1"),
      });
>>>>>>> eb2389810376487fd6f7e043926534c77d0e90c6
      await txn.wait();
      await requestRandomWords();
      setJoined(true);
    } catch (err: any) {
      console.error(err);
    }
  };

  const requestRandomWords = async (): Promise<void> => {
    try {
      const txn: any = await contract.requestRandomWords();
      await txn.wait();
    } catch (err: any) {
      console.error(err);
    }
  };

  const guessTheNumber = async (val: number): Promise<void> => {
    try {
      const txn: any = await contract.guessTheNumberValue(val);
      await txn.wait();
      setHasGuessed(true);
    } catch (err: any) {
      console.error(err);
    }
  };

  const checkIfGuessIsCorrect = async (): Promise<void> => {
    try {
      const rand: BigNumber = await contract.randomResult(); // Need you to create a state and add randomResult to it
      setRandomNumber(rand.toNumber());
      if (randomNumber === playerGuess) {
        setGuessedCorrectly(true);
        setHasGuessed(true);
      } else {
        setHasGuessed(true);
        restartGame();
        // message with hot toast
      }
    } catch (err: any) {
      console.error(err);
    }
<<<<<<< HEAD
    catch(err: any) 
    {
      console.error(err);
    }
  }
=======
  };
>>>>>>> eb2389810376487fd6f7e043926534c77d0e90c6

  const restartGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.restartGame();
      await txn.wait();
      setIsStarted(false);
      setJoined(false);
      setHasGuessed(false);
      setGuessedCorrectly(false);
      // call some function here to check the same user doesn't play more than once
<<<<<<< HEAD
    }
    catch (err: any) {
      console.error(err)
=======
    } catch (err: any) {
      console.error(err);
>>>>>>> eb2389810376487fd6f7e043926534c77d0e90c6
    }
  };

  function handleChange(event: any): void {
    setPlayerGuess(parseInt(event.target.value));
    console.log(playerGuess);
  }

  const renderButton = (): JSX.Element | undefined => {
    if (!isStarted) {
      return (
        <div className="flex justify-center cursor-pointer" onClick={startGame}>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
            Start Game
          </span>
        </div>
      );
    } else if (isStarted && !joined) {
      return (
        <div className="flex justify-center cursor-pointer" onClick={joinGame}>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
            JoinGame
          </span>
        </div>
      );
    } else if (isStarted && joined && !hasGuessed) {
      return (
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <input
            className="bg-transparent border-b-4 border-[#DB00B6] mb-10 text-center py-4 w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[10%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white"
            type="number"
            onChange={handleChange}
          />
          <span
            className="play-btn text-center py-4 w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[10%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white"
            onClick={() => guessTheNumber(playerGuess)}
          >
            Sumbit
          </span>
        </div>
      );
    } else if (isStarted && joined && hasGuessed && !guessedCorrectly) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white sm:text-xl md:text-2xl">
            Woops your guess is incorrect Try again in the next round
          </h3>
          {/* <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
                Restart
          </span> */}
        </div>
      );
    } else if (isStarted && joined && hasGuessed && guessedCorrectly) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white sm:text-xl md:text-2xl py-10">
            Your guess was correct! You have won a Legendary NFT
          </h3>
          <h3 className="text-white sm:text-xl md:text-2xl pb-8">
            Click here to claim your NFT
          </h3>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
            Claim
          </span>
        </div>
      );
    }
  };

  return (
    <section className="relative">
      <Navbar />
      <div className="flex justify-center pb-40">
        <div className="relative inline-block">
          <div
            className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
          ></div>
          <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
            Guessing Game
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex justify-between w-full mx-auto">
        <div className="absolute top-80 overflow-hidden sm:right-[1030px]">
          <Image src={Music} width={700} height={700} alt="MusicImg" />
        </div>
        <div className="absolute top-80 overflow-hidden sm:left-[1030px]">
          <Image
            src={Controller}
            width={600}
            height={600}
            alt="controllerImg"
          />
        </div>
      </div>
      {renderButton()}
    </section>
  );
};
export default NumberGame;
