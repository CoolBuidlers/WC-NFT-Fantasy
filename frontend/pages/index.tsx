import type { NextPage } from "next";
import Countdown from "../components/Countdown";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countdown />
    </div>
  );
};

export default Home;
