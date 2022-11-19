import type { NextPage } from "next";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mint from "../components/Mint";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import { NextSeo } from "next-seo";
const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-w-[100vw] min-h-screen ">
      <NextSeo
        title="WC NFT Fantasy"
        description="Welcome to the Worldcup NFT Fantasy Game!"
      />

      <div>
        <Navbar />
        <Hero />
        <Countdown />
        <Mint />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
