import React from "react";
import Player from "../public/img/card.svg";
import { Transition } from "@headlessui/react";

const ChosenTeams = () => {
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
    </div>
  );
};

export default ChosenTeams;
