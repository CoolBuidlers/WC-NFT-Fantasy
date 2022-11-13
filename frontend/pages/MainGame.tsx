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
          <div className="text-white flex justify-center items-center">
            YOU NEVER MINTED ANY TEAMS BITCH
          </div>
        </>
      )}
    </div>
  );
};

export default MainGame;
