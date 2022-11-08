import React from 'react';
import { QUIZ_GAME_CONTRACT_ADDRESS, QUIZ_GAME_CONTRACT_ABI } from '../pages/Constants/Index';
import { useContract, useProvider, useSigner } from "wagmi";

const Question = () => {

    const provider = useProvider();
    const {data: signer} = useSigner();
    const contract = useContract({
      addressOrName: QUIZ_GAME_CONTRACT_ADDRESS,
      contractInterface: QUIZ_GAME_CONTRACT_ABI,
      signerOrProvider: signer || provider
    });

  return (
    <div className="flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-[#E500A4] to-[#8900F2] mb-5 rounded">
                <h1 className="text-center text-white text-2xl py-8 px-20">Who is the greatest player of all time</h1>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]"
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

export default Question