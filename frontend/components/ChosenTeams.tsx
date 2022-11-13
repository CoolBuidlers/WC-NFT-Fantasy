import React, { useState } from "react";
import Qatar from "../public/NFTs/0.png";
import Ecuador from "../public/NFTs/4.png";
import Senegal from "../public/NFTs/8.png";
import Netherlands from "../public/NFTs/12.png";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const ChosenTeams = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-3xl lg:text-4xl text-white">Selected Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Points: 10
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
          <div
            className="max-w-[250px] relative "
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
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
              <a className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text">
                Evolve
              </a>
            </Transition>

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
          <div
            className="max-w-[250px] cursor-pointer relative"
            onClick={() => {
              setIsClicked2(!isClicked2);
            }}
          >
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
              <a className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text">
                Evolve
              </a>
            </Transition>
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
          <div
            className="max-w-[250px] relative"
            onClick={() => {
              setIsClicked3(!isClicked3);
            }}
          >
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
              <a className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text">
                Evolve
              </a>
            </Transition>
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
          <div
            className="max-w-[250px] relative"
            onClick={() => {
              setIsClicked4(!isClicked4);
            }}
          >
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
              <a className="text-white z-50 w-40 h-20 flex justify-center items-center play-btn cursor-pointer animate-text">
                Evolve
              </a>
            </Transition>
            <Image src={Netherlands} className="text-[26rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenTeams;
