import React from "react";
import Player from "../public/img/card.svg";

const AvailableTeams = () => {
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
        <Player className="text-[26rem]" />
        <Player className="text-[26rem]" />
      </div>
    </div>
  );
};

export default AvailableTeams;
