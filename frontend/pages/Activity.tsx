import React from "react";
import ActivityTable from "../components/ActivityTable";
import Footer from "../components/Footer";
import LevelSection from "../components/LevelSection";
import Navbar from "../components/Navbar";
import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import PlayersTable from "../components/PlayersTable";
import { NextSeo } from "next-seo";
import { worldCupQuery } from "../fetchSubgraphs/subgraphs";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import GamesTable from "../components/GamesTable";

const Activity = () => {
  // Holds all the activity that get's tracked
  const [predictors, setPredictors] = useState<any[]>();
  const [swaps, setSwaps] = useState<any[]>();
  const [balance, setBalance] = useState<string>();

  // Loading State
  const [loading, setLoading] = useState(false);

  // Using Provider
  const provider = useProvider();

  // Fetches all Predictors
  const fetchData = async (): Promise<void> => {
    // Load Prize Pool
    const balance = await provider.getBalance(
      "0x1Cb18ccfD5e659a4217aa33a365f05A9ea1a66C8"
    );
    setBalance(ethers.utils.formatEther(balance));

    // The GraphQL query to run
    const activityQuery = `
          query activityQuery {
            predictors {
                id
                tokens {
                  id
                  level
                  team
                }
            }
          }
        `;

    const data = await worldCupQuery(activityQuery);
    setPredictors(data.predictors);

    // The GraphQL query to run
    const swapsQuery = `
        query swapsQuery {
          swaps {
            id
            first
            second
          }
        }
      `;

    const temp = await worldCupQuery(swapsQuery);
    setSwaps(temp.swaps);
  };

  // Run this when component loads
  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <main className="flex justify-center items-center min-w-[100vw] min-h-screen">
      <NextSeo
        title="Activity | WC NFT Fantasy"
        description="See your the activity happening on the WC NFT Fantasy Platform"
      />
      {loading ? (
        <CircleLoader
          color="#9a00ff"
          cssOverride={{}}
          loading
          size={150}
          speedMultiplier={0.5}
        />
      ) : (
        <div>
          <Navbar />
          <div className="flex justify-center py-8">
            <div className="relative inline-block">
              <div
                className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
              ></div>
              <h2 className="relative border-4 p-12 border-[#D100D1] py-2 text-white text-3xl lg:text-5xl text-center mx-4">
                PRIZE POOL OF{" "}
                {parseInt(balance as string).toString() ?? "ALOT OF"} ETH
              </h2>
            </div>
          </div>
          <h1 className="my-12 w-full relative text-center border-b-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
            ACTIVITY
          </h1>
          <p className="text-white text-xl text-center w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
            In this section, you can see all the activity going on in our dApp
            with the prize pot, the address of the players and their levelling
            up as well as the round and the current Teams
          </p>
          <div className="py-10 px-6 ">
            <LevelSection predictors={predictors} swaps={swaps} />
            <div className="flex flex-col space-y-8 justify-center items-center">
              <h1 className="text-5xl text-white">Players Status</h1>
              <PlayersTable predictors={predictors} />
            </div>

            <div className="flex flex-col space-y-8 justify-center items-center ">
              <h1 className="text-5xl text-white mt-32">Game Status</h1>
              <GamesTable />
            </div>
            <div className="flex flex-col space-y-8 justify-center items-center">
              <h1 className="text-5xl text-white mt-32">All Countries</h1>
              <ActivityTable />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Activity;
