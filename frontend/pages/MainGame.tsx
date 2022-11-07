import React from "react";
import AvailableTeams from "../components/AvailableTeams";
import ChosenTeams from "../components/ChosenTeams";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainGame = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-10 px-2">
        <ChosenTeams />
      </div>
      <div className="md:px-10 px-2">
        <AvailableTeams />
      </div>
      <Footer />
    </div>
  );
};

export default MainGame;
