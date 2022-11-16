import React, { useEffect, useState } from "react";
import Music from "../public/img/music.png";
import Controller from "../public/img/controller.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  QUIZ_GAME_CONTRACT_ADDRESS,
  QUIZ_GAME_CONTRACT_ABI,
} from "../Constants/Index";
import { useContract, useProvider, useSigner } from "wagmi";
import Question from "../components/Question";
import toast from "react-hot-toast";

const QuizGame = () => {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: QUIZ_GAME_CONTRACT_ADDRESS,
    contractInterface: QUIZ_GAME_CONTRACT_ABI,
    signerOrProvider: signer || provider,
  });

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [joined, setJoined] = useState<boolean>(false);
  const [hasGuessed, setHasGuessed] = useState<boolean>(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);
  const [firstAnswer, setFirstAnswer] = useState<string>("");
  const [secondAnswer, setSecondAnswer] = useState<string>("");
  const [thirdAnswer, setThirdAnswer] = useState<string>("");
  const [questionsData, setQuestionsData] = useState<any[]>([]);

  function getValue(e: any): void {
    setFirstAnswer(e.target.value);
    setSecondAnswer(e.target.value);
    setThirdAnswer(e.target.value);
  }

  const startGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.startGameOne(); // this will be updated to startGameTwo when the next round starts
      await txn.wait();
      setIsStarted(true);
      toast.success("Game Started!!!");
    } catch (err: any) {
      console.error(err);
      toast.error(err.reason);
    }
  };

  const joinGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.joinGameOne();
      await txn.wait();
      setJoined(true);
      toast.success("Game Joined!!!");
    } catch (err: any) {
      console.error(err);
      toast.error(err.reason);
    }
  };

  const claimPrize = async (): Promise<void> => {
    try {
      const txn: any = await contract.claimPrizeOne();
      await txn.wait();
      toast.success("NFT Claimed");
    } catch (err: any) {
      console.error(err);
      toast.error(err.reason);
    }
  };

  const getQuestions = async (val: any): Promise<void> => {
    try {
      const data = await contract.returnQuizOne(val);
      await data;
      return data;
    } catch (err: any) {
      console.error("ERR IN FETCHING questions", err);
    }
  };

  const fetchAllQuestions = async (): Promise<void> => {
    try {
      const promises: any[] = [];
      for (let i: number = 0; i < 3; i++) {
        const promise = await getQuestions(i);
        console.log("Promise inside loop", promise);
        promises.push(promise);
      }
      const questions = await Promise.all(promises);
      console.log("QUESTIONS INSIDE FUNC", questions);
      setQuestionsData(questions);
    } catch (err: any) {
      console.error("Failed to fetch questions", err);
    }
  };

  const answerQuestions = async (val1: string, val2: string, val3: string) => {
    try {
      if (firstAnswer && secondAnswer && thirdAnswer) {
        const txn: any = await contract.guessQuestionsOne(val1, val2, val3);
        await txn.wait();
        setHasGuessed(true);
        toast.success("Submitted Answer!");
      } else {
        toast.error("Answer all the questions");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const returnScore = async (): Promise<void> => {
    try {
      const _score: any = await contract.getScore(0);
      await _score;
      if (parseInt(_score) === 3) {
        setGuessedCorrectly(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  console.log("questionsData", questionsData);

  useEffect(() => {
    fetchAllQuestions();
    returnScore();
  }, [isStarted, joined, hasGuessed]);

  const returnQuestionsData: JSX.Element[] = questionsData.map(
    (question, idx) => {
      return (
        <Question key={idx} question={question} idx={idx} getValue={getValue} />
      );
    }
  );

  const renderButton = (): JSX.Element | undefined => {
    if (!isStarted) {
      return (
        <div className="flex justify-center cursor-pointer" onClick={startGame}>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
            PlayGame
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
        <div className="flex flex-col items-center justify-center">
          {returnQuestionsData}
          <span
            className="play-btn text-center py-4 w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[10%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white"
            onClick={() =>
              answerQuestions(firstAnswer, secondAnswer, thirdAnswer)
            }
          >
            Sumbit
          </span>
        </div>
      );
    } else if (isStarted && joined && hasGuessed && !guessedCorrectly) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white sm:text-xl md:text-2xl py-10">
            Woops your guess is incorrect Try again Later!
          </h3>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
            Restart
          </span>
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
          <span
            className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white"
            onClick={claimPrize}
          >
            Claim
          </span>
        </div>
      );
    }
  };

  return (
    <div>
      <section className="relative">
        <Navbar />
        <div className="flex justify-center pb-40">
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Quiz Game
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
    </div>
  );
};

export default QuizGame;
