import React from "react";
import Music from "../public/img/music.jpg";
import Controller from "../public/img/controller.jpg";
import Image from "next/image";
type Props = {};

const NumberGame = (props: Props) => {
  return (
    <section className="relative ">
      <div className=" overflow-hidden">
        <div className="absolute top-40 overflow-hidden right-[1030px]">
          <Image src={Music} />
        </div>
        <div className="absolute top-20 left-[730px]">
          <Image src={Controller} />
        </div>
      </div>
    </section>
  );
};
export default NumberGame;
