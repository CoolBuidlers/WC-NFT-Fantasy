import React, { useState, useEffect } from "react";
import Qatar from "../public/NFTs/0.png";
import Ecuador from "../public/NFTs/4.png";
import Senegal from "../public/NFTs/8.png";
import Netherlands from "../public/NFTs/12.png";
import USA from "../public/NFTs/24.png";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import { useSigner, useProvider, useAccount } from "wagmi";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { ethers, Contract } from "ethers";
import { getPrediction } from "./PossibleTeams";

const ChosenTeams = () => {
  const [userPoints, setUserPoints] = useState<number>(0);
  const [userBalance, setUserBalance] = useState<string>("0");
  const provider = useProvider();
  const { address } = useAccount();
  const [team1, setTeam1] = useState<any>();
  const [team2, setTeam2] = useState<any>();
  const [team3, setTeam3] = useState<any>();
  const [team4, setTeam4] = useState<any>();
  const [thisArray, setThisArray] = useState();

  const getUserPoints = async (): Promise<void> => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const points = await PredictionContract.viewPoints();
      setUserPoints(points.toNumber());
    } catch (error: any) {
      console.log(error);
    }
  };
  const getBalance = async (): Promise<void> => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const balance = await PredictionContract.balances(address);
      setUserBalance(ethers.utils.formatEther(balance.toString()));
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchTeams = async () => {
    try {
      const predictionArray: any = [];
      for (let i = 1; i < 4; i++) {
        const team = await getPrediction(i, provider, address);
        !predictionArray.includes(team) && predictionArray.push(team);
      }
      setThisArray(predictionArray);
      console.log(predictionArray);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserPoints();
    getBalance();
  }, [address]);

  useEffect(() => {
    fetchTeams();
  }, [address]);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-5 py-5 mb-2">
          <h3 className="text-3xl lg:text-4xl text-white">
            Balance: {userBalance} Matic
          </h3>
        </div>
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-xl lg:text-4xl text-white">Selected Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-xl lg:text-4xl">
              Points: {userPoints}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 pt-4">
        <div className="max-w-[350px]">
          <div className=" relative flex justify-center my-4 ">
            <Transition
              show={true}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 rotate-[180deg] scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                1
              </span>
            </Transition>
          </div>
          <div className="max-w-[250px]">
            <Image src={team1} />
          </div>
        </div>

        <div className="max-w-[350px]">
          <div className=" relative flex justify-center my-4 ">
            <Transition
              show={true}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 rotate-[180deg] scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-purple-900 text-white rounded-full">
                2
              </span>
            </Transition>
          </div>
          <div className="max-w-[250px]">
            <Image src={team2} className="text-[26rem]" />
          </div>
        </div>
        <div className="max-w-[350px]">
          <div className=" relative flex justify-center my-4 ">
            <Transition
              show={true}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 rotate-[180deg] scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-red-500 text-white rounded-full">
                3
              </span>
            </Transition>
          </div>
          <div className="max-w-[250px]">
            <Image src={team3} className="text-[26rem]" />
          </div>
        </div>
        <div className="max-w-[350px] relative">
          <div className=" relative flex justify-center my-4 ">
            <Transition
              show={true}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 rotate-[180deg] scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-[#86761f] text-white rounded-full">
                4
              </span>
            </Transition>
          </div>
          <div className="max-w-[250px]">
            <Image src={team4} className="text-[26rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenTeams;
