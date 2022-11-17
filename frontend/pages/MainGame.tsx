import React, { useState, useEffect } from "react";
import AvailableTeams from "../components/AvailableTeams";
import ChosenTeams from "../components/ChosenTeams";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { Contract } from "ethers";
import { useProvider, useAccount } from "wagmi";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as Scroll from "react-scroll";

const MainGame = () => {
  let scroll = Scroll.animateScroll;

  const allScrolls = {
    home: (): void => {
      scroll.scrollTo(0);
    },
    mint: (): void => {
      scroll.scrollTo(1400);
    },
    mintM: (): void => {
      scroll.scrollTo(1200);
    },
    roadmap: (): void => {
      scroll.scrollTo(2950);
    },
    roadmapM: (): void => {
      scroll.scrollTo(2400);
    },
    Team: (): void => {
      scroll.scrollTo(4500);
    },
    TeamM: (): void => {
      scroll.scrollTo(3900);
    },
  };
  const { address } = useAccount();
  const provider = useProvider();
  const [userMinted, setHasUserMinted] = useState<boolean>(true);
  const haveYouMinted = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const hasUserMinted = await PredictionContract.haveYouMinted(address);
      setHasUserMinted(hasUserMinted);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    haveYouMinted();
  }, [address]);
  return (
    <div>
      <NextSeo
        title="Main Game | WC NFT Fantasy"
        description="Enter the main game of WC NFT Fantasy"
      />
      {userMinted ? (
        <>
          <Navbar />
          <div className="md:px-10 px-2">
            <ChosenTeams />
          </div>
          <div className="md:px-10 px-2">
            <AvailableTeams />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <div
            className="text-2xl text-white pt-40 pb-5 flex justify-center items-center bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-400 via-purple-500 to-green-400
            animate-text uppercase mx-4 md:mx-0"
          >
            You have not minted any team!
          </div>
          <Link href="/">
            <div
              className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl md:mb-0 text-white m-auto mx-4 md:mx-auto"
              onClick={allScrolls.mint}
            >
              Click here to mint
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default MainGame;
