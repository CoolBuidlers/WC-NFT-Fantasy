import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-2 py-20 text-white">
      <div className="flex justify-start">
        <div className="md:w-3/5 md:px-12 px-4 ">
          <h2 className="text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6">
            World Cup{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-400 via-purple-500 to-green-400
            animate-text"
            >
              2022
            </span>
            <br /> NFT Fantasy
          </h2>
          <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
            Purchase Team cards as NFTs and use them for prediction and play
            other games to earn extra points to earn your chance to win a grand
            prize!
          </p>
          <div>
            <Link href="/Usage">
              <span className="play-btn py-4 px-6 animate-text cursor-pointer hover:animate-text-hover ">
                PlayGame
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
