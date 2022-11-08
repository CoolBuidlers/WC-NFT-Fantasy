import React, {useEffect, useState} from "react";
import Music from "../public/img/music.png";
import Controller from "../public/img/controller.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { QUIZ_GAME_CONTRACT_ADDRESS, QUIZ_GAME_CONTRACT_ABI } from "./Constants/Index";
import { useContract, useProvider, useSigner } from "wagmi";
import Question from "../components/Question";

const QuizGame = () => {

  const provider = useProvider();
  const {data: signer} = useSigner();
  const contract = useContract({
    addressOrName: QUIZ_GAME_CONTRACT_ADDRESS,
    contractInterface: QUIZ_GAME_CONTRACT_ABI,
    signerOrProvider: signer || provider
  });

  const [isStarted, setIsStarted] = useState<boolean>(true);
  const [joined, setJoined] = useState<boolean>(true);
  const [hasGuessed, setHasGuessed] = useState<boolean>(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);
  const [firstAnswer, setFirstAnswer] = useState<string | undefined>('');
  const [secondAnswer, setSecondAnswer] = useState<string | undefined>('');
  const [thirdAnswer, setThirdAnswer] = useState<string | undefined>('');
  const [questionsData, setQuestionsData] = useState<Object []>([]);

  function getValue(e: any): void {
    setFirstAnswer(e.target.value);
    setSecondAnswer(e.target.value);
    setThirdAnswer(e.target.value);
  }
  console.log(firstAnswer)
  console.log(secondAnswer)
  console.log(thirdAnswer)

  const startGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.startGameOne(); // this will be updated to startGameTwo when the next round starts
      await txn.wait();
      setIsStarted(true);
    } 
    catch (err: any) {
      console.error(err);  
    }
  }

  const joinGame = async (): Promise<void> => {
    try {
      const txn: any = await contract.joinGameOne();
      await txn.wait();
      setJoined(true);
      // getQuestions(0)
    }
    catch (err: any) {
      console.error(err)
    }
  }

  const claimPrize = async (): Promise<void> => {
    try {
      const txn: any = await contract.claimPrizeOne();
      await txn.wait();
    } 
    catch (err: any) {
      console.error(err);
      console.log(err.reason)
    }
  }

  const getQuestions = async (val: any): Promise<void> => {
    try {
      const data = await contract.returnQuizOne(val);
      console.log("data", data)
      setQuestionsData(data);
    }
    catch (err: any) {
      console.error("ERR IN FETCHING questions",err)
    }
  }

  const fetchQuizId = async (): Promise<void> => {
    try {
      const _quizId = await contract.quizIdOne();
      console.log("QUIZ ID here: ", _quizId);
    } 
    catch (err: any) {
      console.error(err)
    }
  }

  console.log("questionsData", questionsData);

    useEffect(() => {
    getQuestions(0);
    fetchQuizId();
    }, [])

  const returnQuestionsData = questionsData.map((question, idx) => {
      return <Question key={idx} />
  })

  const renderButton = (): JSX.Element | undefined => {
    if(!isStarted) {
      return (
        <div className="flex justify-center cursor-pointer"
        onClick={startGame}
        >
              <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
                PlayGame
              </span>
          </div>
      )
    }
    else if (isStarted && !joined) {
      return (
        <div className="flex justify-center cursor-pointer"
        onClick={joinGame}
        >
              <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
                JoinGame
              </span>
          </div>
      )
    }
    else if (isStarted && joined && !hasGuessed) {
      return (
        <div className="flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-[#E500A4] to-[#8900F2] mb-5 rounded">
                <h1 className="text-center text-white text-2xl py-8 px-20">Who is the greatest player of all time</h1>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]"
                    onClick={getValue}
                    >Ronaldo</p>
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">Messi</p>
                </div>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">Ronaldo</p>
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">Ronaldo</p>
                </div>
              </div>
              <span className="play-btn text-center py-4 w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[10%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white"
              // onClick={() => guessQuestionsOne(firstGuessQuestions)}
              >
                Sumbit
              </span>
          </div>
      )
    }
    else if(isStarted && joined && hasGuessed && !guessedCorrectly) {
      return(
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white sm:text-xl md:text-2xl py-10">Woops your guess is incorrect Try again Later!</h3>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
                Restart
          </span>
        </div>
      )
    }
    else if(isStarted && joined && hasGuessed && guessedCorrectly) {
      return(
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white sm:text-xl md:text-2xl py-10">Your guess was correct! You have won a Legendary NFT</h3>
          <h3 className="text-white sm:text-xl md:text-2xl pb-8">Click here to claim your NFT</h3>
          <span className="play-btn text-center py-4 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[20%] block animate-text cursor-pointer hover:animate-text-hover text-2xl text-white">
                Claim
          </span>
        </div>
      )
    }
  }

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
            Quiz Game
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex justify-between w-full mx-auto">
        <div className="absolute top-80 overflow-hidden sm:right-[1030px]">
          <Image src={Music} width={700} height={700} alt="MusicImg"/>
        </div>
        <div className="absolute top-80 overflow-hidden sm:left-[1030px]">
          <Image src={Controller} width={600} height={600} alt="controllerImg"/>
        </div>
      </div>
      {renderButton()}
    </section>
  )
}

export default QuizGame