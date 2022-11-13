import React, { useEffect, useState } from "react";
import Player from "../public/img/card.svg";
import { Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";
import { changeOrderForTop32, changeOrderForTop8, changeOrderForTop16, changeOrderForTop4 } from "../contractInteractions/FunctionCalls";
import { useSigner, useProvider, useAccount } from "wagmi";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { ethers, Contract } from "ethers";

const AvailableTeams = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [teamSwapOne, setTeamSwapOne] = useState<string>("");
  const [teamSwapTwo, setTeamSwapTwo] = useState<string>("");
  const [top32, setTop32] = useState<boolean>(false);
  const [top16, setTop16] = useState<boolean>(false);
  const [top8, setTop8] = useState<boolean>(false);
  const { data: signer } = useSigner();
  const provider = useProvider();
  const isItTop32 = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const isTop32 = await PredictionContract.isPhase32();
      setTop32(isTop32);
      console.log(isTop32)
    } catch (error: any) {
      console.log(error);
    }
  };
  const isItTop16 = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const isTop16 = await PredictionContract.isPhase16();
      setTop16(isTop16);
    } catch (error: any) {
      console.log(error);
    }
  };
  const isItTop8 = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const isTop8 = await PredictionContract.isPhase8();
      setTop8(isTop8);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    isItTop16();
    isItTop8();
    isItTop32();
  }, [teamSwapOne, teamSwapTwo]);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-3xl lg:text-4xl text-white">Available Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Flippable: 4
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 pt-4">
        <Transition
          show={showModal}
          enter="transform transition duration-[500ms] ease-in"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-[300ms] transition ease-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-0 "
          className="w-[100vw] h-[100vh] bg-[#4d4c4cd9] fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <div className=" bg-shade-bg sm:max-w-full  h-1/2 sm:w-1/2 sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
            <p className="sm:mb-14 mb-6 text-lg">
              Please Select Two Prediction Numbers To Switch
            </p>

            <div className="px-2  flex  flex-col sm:flex-row justify-center items-center">
              <input
                type="number"
                min={1}
                max={6}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTeamSwapOne(e.target.value)
                }
                className="text-white bg-shade-9 w-[100px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-4 mb-6 sm:mb-0 sm:mr-2 "
              />

              <BsArrowLeftRight className=" text-3xl mr-2" />

              <input
                type="number"
                min={1}
                max={6}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTeamSwapTwo(e.target.value)
                }
                className="text-white bg-shade-9 w-[100px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-4 mb-6 sm:mb-0 sm:mr-12 "
              />
              <p className="text-3xl">Switch</p>
              <a
                className="self-center text-center fixed z-50 top-1 sm:left-full left-[78%] rounded-full ml-3 bg-purple-900 px-2 py-2 "
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <MdClose className="text-4xl text-white" />
              </a>
            </div>
            <a
              className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10"
              onClick={() => {
                top32 && changeOrderForTop32(signer, teamSwapOne, teamSwapTwo);
                top16 && changeOrderForTop16(teamSwapOne, teamSwapTwo, signer);
                top8 && changeOrderForTop8(teamSwapOne, teamSwapTwo, signer);
                top8 && changeOrderForTop4(teamSwapOne, teamSwapTwo, signer);
              }}
            >
              Confirm
            </a>
          </div>
        </Transition>
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
              className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                1
              </span>
            </Transition>
          </div>
          <Player className="text-[26rem]" />
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
              className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-purple-900 text-white rounded-full">
                2
              </span>
            </Transition>
          </div>
          <Player className="text-[26rem]" />
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
              className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-red-500 text-white rounded-full">
                3
              </span>
            </Transition>
          </div>
          <Player className="text-[26rem]" />
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
              className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-[#86761f] text-white rounded-full">
                4
              </span>
            </Transition>
          </div>
          <Player className="text-[26rem]" />
        </div>
      </div>
      <a
        className="mt-3  text-white px-10 py-4 play-btn animate-text hover:animate-text-hover cursor-pointer rounded"
        onClick={() => setShowModal(!showModal)}
      >
        Swap Prediction Order
      </a>
    </div>
  );
};

export default AvailableTeams;
