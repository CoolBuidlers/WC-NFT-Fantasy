import React, { useState, useEffect } from "react";
import Qatar from "../public/NFTs/0.png";
import Ecuador from "../public/NFTs/4.png";
import Senegal from "../public/NFTs/8.png";
import Netherlands from "../public/NFTs/12.png";
import USA from "../public/NFTs/24.png";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useSigner, useProvider, useAccount } from "wagmi";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { ethers, Contract } from "ethers";

const ChosenTeams = () => {
  const [userPoints, setUserPoints] = useState<number>(0);
  const [userBalance, setUserBalance] = useState<string>("0");
  const provider = useProvider();
  const { address } = useAccount();
  const [teamName1, setTeamName1] = useState<string>("");
  const [teamName2, setTeamName2] = useState<string>("");
  const [teamName3, setTeamName3] = useState<string>("");
  const [teamName4, setTeamName4] = useState<string>("");

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
    let evolvedLevel2, evolvedLevel3, evolvedLevel4, prediction, teamName;
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      prediction = await PredictionContract.getPrediction(address, 1);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      setTeamName1(teamName);

      prediction = await PredictionContract.getPrediction(address, 2);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      setTeamName2(teamName);

      prediction = await PredictionContract.getPrediction(address, 3);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      setTeamName3(teamName);

      prediction = await PredictionContract.getPrediction(address, 4);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      setTeamName4(teamName);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserPoints();
    getBalance();
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
          <h3 className="text-3xl lg:text-4xl text-white">Selected Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
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
            <Image src={Qatar} />
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
            <Image src={Ecuador} className="text-[26rem]" />
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
            <Image src={Senegal} className="text-[26rem]" />
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
            <Image src={Netherlands} className="text-[26rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenTeams;
