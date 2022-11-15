import React, { useState, useEffect } from "react";
import AvailableTeams from "../components/AvailableTeams";
import ChosenTeams from "../components/ChosenTeams";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { Contract } from "ethers";
import { useProvider, useAccount } from "wagmi";

const MainGame = () => {
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
      {!userMinted ? (
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
          <div className="text-lg text-white pt-40 pb-5 flex justify-center items-center bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-400 via-purple-500 to-green-400
            animate-text uppercase">
            You have not minted any teams fren!
          </div>
            <a
              className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl md:mb-0 text-white m-auto"
              href="/"
            >
             Click here to mint 
            </a>
        </>
      )}
    </div>
  );
};

export default MainGame;
