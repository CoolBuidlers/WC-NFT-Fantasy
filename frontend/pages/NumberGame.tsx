import React from "react";
import Music from "../public/img/music.png";
import Controller from "../public/img/controller.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar";
type Props = {};

const NumberGame = (props: Props) => {
  return (
    <section className="relative">
      <Navbar />
      
      <div className="hidden lg:flex justify-between w-full mx-auto">
        <div className="absolute top-80 overflow-hidden sm:right-[1030px]">
          <Image src={Music} width={700} height={700} alt="MusicImg"/>
        </div>
        <div className="absolute top-80 overflow-hidden sm:left-[1030px]">
          <Image src={Controller} width={600} height={600} alt="controllerImg"/>
        </div>
      </div>
    </section>
  );
};
export default NumberGame;

{/* <div className="absolute hidden sm:flex justify-between">
  <Image src={Music} width={800} height={800} alt="MusicImg"/>
  <Image src={Controller} width={800} height={800} alt="Controller"/>
</div> */}