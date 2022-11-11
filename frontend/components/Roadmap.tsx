import React from "react";

const Roadmap = () => {
  return (
    <div className="py-20 border-8 border-dashed border-[#DB00B6]">
      {/* Roadmap div with transitions starts here */}
      <div className="flex justify-center pb-40">
        <div className="relative inline-block">
          <div
            className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
          ></div>
          <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
            Roadmap
          </h1>
        </div>
      </div>
      {/* Roadmap div with transitions ends here */}
      {/* Roadmap components here */}
      <div className="flex justify-start px-5 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            1{" "}
            <span className="text-white pl-5">Mint Your World Cup NFTs</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            As soon as the countdown finishes and the world cup starts the users will mint their World cup NFTs and start ordering them with the teams that they think will be the top four of the tournament
          </p>
        </div>
      </div>
      <div className="flex justify-end px-5 py-10 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            2{" "}
            <span className="text-white pl-5">KO start & earn Free NFTs</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            During the knockout rounds players can play other games to earn Level 3 NFTs and also switch 2 NFTs in the main game and Upgrade the Teams to another level
          </p>
        </div>
      </div>
      <div className="flex justify-start px-5 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            3{" "}
            <span className="text-white pl-5">QuarterFinals & more fun games</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            During the quarterfinals players can play more games to earn free Level 4 Legendary NFTs and earn more points & upgrade the teams to level 3
          </p>
        </div>
      </div>
      <div className="flex justify-end px-5 py-10 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            4{" "}
            <span className="text-white pl-5">Semi Finals degens, It&apos;s time</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            Play more games, keep earning more NFTs but now you can upgrade your NFTs to legendary Level if your team has made it this far.
          </p>
        </div>
      </div>
      <div className="flex justify-start px-5 py-10 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            5{" "}
            <span className="text-white pl-5">And then there were two 🔥🔥🔥</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            The world Cup final that had 3.5 billion people watching in 2018 will have an even bigger number this time in Qatar and one will be crowned champion.
          </p>
        </div>
      </div>
      <div className="flex justify-end px-5 py-10 md:px-20">
        <div className="text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-[#F20089]">
            6{" "}
            <span className="text-white pl-5">Time to reward the winners 💯💯</span>
          </h2>
          <p className="sm:text-lg md:text-xl text-xl py-2">
            The moment we have all been waiting for, all the players will be rewarded based off their scores which can be seen on the main game page & activity page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
