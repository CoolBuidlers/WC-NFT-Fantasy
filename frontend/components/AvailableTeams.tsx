import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";
import {
  changeOrderForTop32,
  changeOrderForTop8,
  changeOrderForTop16,
  changeOrderForTop4,
} from "../contractInteractions/FunctionCalls";
import { useSigner, useProvider, useAccount } from "wagmi";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { EVOLVE_ADDRESS, EVOLVE_ABI } from "../contractInfo/Evolve";
import {
  depositPoints,
  evolveToLevel2,
  evolveToLevel3,
  evolveToLevel4,
} from "../contractInteractions/FunctionCalls";
import { ethers, Contract } from "ethers";
import { getPrediction } from "./PossibleTeams";

const AvailableTeams = () => {
const { address } = useAccount();
   const query = `query MyQuery {
  predictors(where:{id: "${address}"}) {
    tokens(orderBy:id) {
      id
      team
      level
    }
  }
}`;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [teamSwapOne, setTeamSwapOne] = useState<string>("");
  const [teamSwapTwo, setTeamSwapTwo] = useState<string>("");
  const [top32, setTop32] = useState<boolean>(false);
  const [top16, setTop16] = useState<boolean>(false);
  const [top8, setTop8] = useState<boolean>(false);
  const [top4, setTop4] = useState<boolean>(false);
  const [changedTop32, setChangedTop32] = useState<boolean>(false);
  const [changedTop16, setChangedTop16] = useState<boolean>(false);
  const [changedTop8, setChangedTop8] = useState<boolean>(false);
  const [changedTop4, setChangedTop4] = useState<boolean>(false);
  const [hasUserMintedExtraTwo, setHasUserMintedExtraTwo] =
    useState<boolean>(false);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [teamName1, setTeamName1] = useState<any>();
  const [teamName2, setTeamName2] = useState<any>();
  const [teamName3, setTeamName3] = useState<any>();
  const [teamName4, setTeamName4] = useState<any>();
  const [teamName5, setTeamName5] = useState<any>();
  const [teamName6, setTeamName6] = useState<any>();

  const [userEvolveArray2, setUserEvolveArray2] = useState<boolean[]>([]);

  const [userEvolveArray3, setUserEvolveArray3] = useState<boolean[]>([]);

  const [userEvolveArray4, setUserEvolveArray4] = useState<boolean[]>([]);

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
      return isTop32;
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
      return isTop16;
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
      return isTop8;
    } catch (error: any) {
      console.log(error);
    }
  };

  const isItTop4 = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const isTop4 = await PredictionContract.isPhase4();
      setTop4(isTop4);
      return isTop4;
    } catch (error: any) {
      console.log(error);
    }
  };

  const haveYouMintedExtraTwo = async (): Promise<boolean | undefined> => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const hasUserMintedExtraTwo = await PredictionContract.mintedExtraTwo(
        address
      );
      setHasUserMintedExtraTwo(hasUserMintedExtraTwo);
      return hasUserMintedExtraTwo;
    } catch (error: any) {
      console.log(error);
    }
  };

  const haveYouChangedOrder = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const changedFor32 = await PredictionContract.changedOrder(address, 32);
      const changedFor16 = await PredictionContract.changedOrder(address, 16);
      const changedFor8 = await PredictionContract.changedOrder(address, 8);
      const changedFor4 = await PredictionContract.changedOrder(address, 4);
      setChangedTop32(changedFor32);
      setChangedTop16(changedFor16);
      setChangedTop8(changedFor8);
      setChangedTop4(changedFor4);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getCurrentPhase = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const theCurrentPhase = await PredictionContract.currentPhase();
      setCurrentPhase(theCurrentPhase);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchEvolveStatus = async () => {
    let evolvedLevel2,
      evolvedLevel3,
      evolvedLevel4,
      prediction,
      teamName
    try {
      const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, provider);
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const userMintedExtraTwo = await haveYouMintedExtraTwo();
      prediction = await PredictionContract.getPrediction(address, 1);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
      evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
      evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
      setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
      setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
      setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);

      prediction = await PredictionContract.getPrediction(address, 2);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
      evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
      evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
      setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
      setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
      setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);

      prediction = await PredictionContract.getPrediction(address, 3);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
      evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
      evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
      setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
      setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
      setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);

      prediction = await PredictionContract.getPrediction(address, 4);
      teamName = ethers.utils.defaultAbiCoder.decode(["string"], prediction)[0];
      evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
      evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
      evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
      setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
      setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
      setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);

      if (userMintedExtraTwo) {
        prediction = await PredictionContract.getPrediction(address, 5);
        teamName = ethers.utils.defaultAbiCoder.decode(
          ["string"],
          prediction
        )[0];
        evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
        evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
        evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
        setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
        setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
        setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);

        prediction = await PredictionContract.getPrediction(address, 6);
        teamName = ethers.utils.defaultAbiCoder.decode(
          ["string"],
          prediction
        )[0];
        evolvedLevel2 = await EvolveContract.haveYouEvolvedAlready(teamName, 2);
        evolvedLevel3 = await EvolveContract.haveYouEvolvedAlready(teamName, 3);
        evolvedLevel4 = await EvolveContract.haveYouEvolvedAlready(teamName, 4);
        setUserEvolveArray2([...userEvolveArray2, evolvedLevel2]);
        setUserEvolveArray3([...userEvolveArray3, evolvedLevel3]);
        setUserEvolveArray4([...userEvolveArray4, evolvedLevel4]);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchTeam = async () => {
    let team;
    team = await getPrediction(query, 1, provider, address);
    setTeamName1(team);
    team = await getPrediction(query, 2, provider, address);
    setTeamName2(team);
    team = await getPrediction(query, 3, provider, address);
    setTeamName3(team);
    team = await getPrediction(query, 4, provider, address);
    setTeamName4(team);
    team = await getPrediction(query, 5, provider, address);
    setTeamName5(team);
     team = await getPrediction(query, 6, provider, address);
     setTeamName6(team);
  };



  useEffect(() => {
    isItTop16();
    isItTop8();
    isItTop32();
    isItTop4();
    haveYouMintedExtraTwo();
    haveYouChangedOrder();
    getCurrentPhase();
    fetchEvolveStatus();
    fetchTeam();
  }, [address]);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-xl lg:text-4xl text-white">Available Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-xl lg:text-4xl">
              Flippable: {hasUserMintedExtraTwo && (!top8 || !top4) ? 6 : 4}
            </h1>
          </div>
        </div>
      </div>
      {((!userEvolveArray2[0] && top16) ||
        (!userEvolveArray3[0] && top8) ||
        (!userEvolveArray4[0] && top4) ||
        (!userEvolveArray2[1] && top16) ||
        (!userEvolveArray3[1] && top8) ||
        (!userEvolveArray4[1] && top4) ||
        (!userEvolveArray2[2] && top16) ||
        (!userEvolveArray3[2] && top8) ||
        (!userEvolveArray4[2] && top4) ||
        (!userEvolveArray2[3] && top16) ||
        (!userEvolveArray3[3] && top8) ||
        (!userEvolveArray4[3] && top4) ||
        (!userEvolveArray2[4] && top16) ||
        (!userEvolveArray3[4] && top8) ||
        (!userEvolveArray2[5] && top16) ||
        (!userEvolveArray3[5] && top8)) && (
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent 
        from-shade-2 via-shade-4 to-shade-8 flex justify-center items-center 
         text-xl md:text-4xl tracking-wider py-24 animate-bounce"
        >
          <p> Evolving Now Available </p>
        </div>
      )}

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
          <div className=" bg-shade-bg w-[90%] sm:w-[50%] h-[80%] sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
            <p className="sm:mb-14 mb-6 text-lg mt-10 px-6">
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

              <BsArrowLeftRight className=" text-3xl mr-2 mb-6 sm:mb-0" />

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
                <MdClose className="text-4xl text-white cursor-pointer" />
              </a>
            </div>
            <a
              className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10"
              onClick={() => {
                top32 && changeOrderForTop32(signer, teamSwapOne, teamSwapTwo);
                top16 && changeOrderForTop16(teamSwapOne, teamSwapTwo, signer);
                top8 && changeOrderForTop8(teamSwapOne, teamSwapTwo, signer);
                top4 && changeOrderForTop4(teamSwapOne, teamSwapTwo, signer);
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
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                1
              </span>
            </Transition>
          </div>
          <div
            className="max-w-[250px] relative cursor-pointer"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {((!userEvolveArray2[0] && top16) ||
              (!userEvolveArray3[0] && top8) ||
              (!userEvolveArray4[0] && top4)) && (
              <Transition
                show={isClicked}
                enter="transform transition duration-[1000ms] "
                enterFrom="opacity-0  -rotate-[360deg] scale-0"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-[1000ms] transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-0  rotate-[360deg]"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
              >
                <a
                  className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                  onClick={() => {
                    top16 && evolveToLevel2(teamName1, signer);
                    top8 && evolveToLevel3(teamName1, signer);
                    top4 && evolveToLevel4(teamName1, signer);
                  }}
                >
                  Evolve
                </a>
              </Transition>
            )}
            <Image src={teamName1} />
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
          <div
            className="max-w-[250px] cursor-pointer relative"
            onClick={() => {
              setIsClicked2(!isClicked2);
            }}
          >
            {((!userEvolveArray2[1] && top16) ||
              (!userEvolveArray3[1] && top8) ||
              (!userEvolveArray4[1] && top4)) && (
              <Transition
                show={isClicked2}
                enter="transform transition duration-[1000ms] "
                enterFrom="opacity-0  -rotate-[360deg] scale-0"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-[1000ms] transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-0  rotate-[360deg]"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
              >
                <a
                  className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                  onClick={() => {
                    top16 && evolveToLevel2(teamName2, signer);
                    top8 && evolveToLevel3(teamName2, signer);
                    top4 && evolveToLevel4(teamName2, signer);
                  }}
                >
                  Evolve
                </a>
              </Transition>
            )}
            <Image src={teamName2} className="text-[26rem]" />
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
          <div
            className="max-w-[250px] relative cursor-pointer"
            onClick={() => {
              setIsClicked3(!isClicked3);
            }}
          >
            {((!userEvolveArray2[2] && top16) ||
              (!userEvolveArray3[2] && top8) ||
              (!userEvolveArray4[2] && top4)) && (
              <Transition
                show={isClicked3}
                enter="transform transition duration-[1000ms] "
                enterFrom="opacity-0  -rotate-[360deg] scale-0"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-[1000ms] transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-0  rotate-[360deg]"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
              >
                <a
                  className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                  onClick={() => {
                    top16 && evolveToLevel2(teamName3, signer);
                    top8 && evolveToLevel3(teamName3, signer);
                    top4 && evolveToLevel4(teamName3, signer);
                  }}
                >
                  Evolve
                </a>
              </Transition>
            )}
            <Image src={teamName3} className="text-[26rem]" />
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
          <div
            className="max-w-[250px] relative cursor-pointer"
            onClick={() => {
              setIsClicked4(!isClicked4);
            }}
          >
            {((!userEvolveArray2[3] && top16) ||
              (!userEvolveArray3[3] && top8) ||
              (!userEvolveArray4[3] && top4)) && (
              <Transition
                show={isClicked4}
                enter="transform transition duration-[1000ms] "
                enterFrom="opacity-0  -rotate-[360deg] scale-0"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-[1000ms] transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-0  rotate-[360deg]"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
              >
                <a
                  className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                  onClick={() => {
                    top16 && evolveToLevel2(teamName4, signer);
                    top8 && evolveToLevel3(teamName4, signer);
                    top4 && evolveToLevel4(teamName4, signer);
                  }}
                >
                  Evolve
                </a>
              </Transition>
            )}
            <Image src={teamName4} className="text-[26rem]" />
          </div>
        </div>
        {hasUserMintedExtraTwo && (
          <>
            <div className="max-w-[350px]">
              <div className="relative flex justify-center my-4 ">
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
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-green-600 text-white rounded-full">
                    5
                  </span>
                </Transition>
              </div>
              <div
                className="max-w-[250px] relative cursor-pointer"
                onClick={() => {
                  setIsClicked5(!isClicked5);
                }}
              >
                {((!userEvolveArray2[4] && top16) ||
                  (!userEvolveArray3[4] && top8)) && (
                  <Transition
                    show={isClicked5}
                    enter="transform transition duration-[1000ms] "
                    enterFrom="opacity-0  -rotate-[360deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-[1000ms] transition ease-in-out"
                    leaveFrom="opacity-100 scale-100 "
                    leaveTo="opacity-0 scale-0  rotate-[360deg]"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
                  >
                    <a
                      className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                      onClick={() => {
                        top16 && evolveToLevel2(teamName5, signer);
                        top8 && evolveToLevel3(teamName5, signer);
                      }}
                    >
                      Evolve
                    </a>
                  </Transition>
                )}
                <Image src={teamName5} />
              </div>
            </div>
            <div className="max-w-[350px]">
              <div className="relative flex justify-center my-4 ">
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
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-cyan-800 text-white rounded-full">
                    6
                  </span>
                </Transition>
              </div>
              <div
                className="max-w-[250px] relative cursor-pointer"
                onClick={() => {
                  setIsClicked6(!isClicked6);
                }}
              >
                {((!userEvolveArray2[5] && top16) ||
                  (!userEvolveArray3[5] && top8)) && (
                  <Transition
                    show={isClicked6}
                    enter="transform transition duration-[1000ms] "
                    enterFrom="opacity-0  -rotate-[360deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-[1000ms] transition ease-in-out"
                    leaveFrom="opacity-100 scale-100 "
                    leaveTo="opacity-0 scale-0  rotate-[360deg]"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[356px] bg-shade-10 rounded-xl  z-40 flex justify-center items-center"
                  >
                    <a
                      className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text"
                      onClick={() => {
                        top16 && evolveToLevel2(teamName6, signer);
                        top8 && evolveToLevel3(teamName6, signer);
                      }}
                    >
                      Evolve
                    </a>
                  </Transition>
                )}
                <Image src={teamName6} />
              </div>
            </div>
          </>
        )}
      </div>
      {((!changedTop32 && top32) ||
        (!changedTop16 && top16) ||
        (!changedTop8 && top8) ||
        (!changedTop4 && top4)) && (
        <a
          className="mt-10 text-white px-10 py-4 play-btn animate-text hover:animate-text-hover cursor-pointer rounded flex justify-center items-center mx-auto sm:max-w-lg"
          onClick={() => setShowModal(!showModal)}
        >
          Swap Prediction Order
        </a>
      )}
      {currentPhase === 2 && (
        <a
          className="mt-10 text-white px-10 py-4 play-btn animate-text hover:animate-text-hover cursor-pointer rounded flex justify-center items-center mx-auto sm:max-w-lg"
          onClick={() => depositPoints(signer)}
        >
          Deposit Points
        </a>
      )}
    </div>
  );
};

export default AvailableTeams;
