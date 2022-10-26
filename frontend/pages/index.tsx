import type { NextPage } from "next";
import Countdown from "../components/Countdown";
import Hero from "../components/Hero";
import Mint from "../components/Mint";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countdown />
      <Mint />
      <Roadmap />
      <Team />
    </div>
  );
};

export default Home;
