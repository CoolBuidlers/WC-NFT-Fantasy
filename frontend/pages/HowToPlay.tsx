import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Tut1 from "../public/img/Tutorial-1.png";
import Tut2 from "../public/img/Tutorial-2.png";
import Tut3 from "../public/img/Tutorial-3.png";
import Tut4 from "../public/img/Tutorial-4.png";

type Props = {};

const HowToPlay = (props: Props) => {
  return (
    <section className="flex flex-col ">
      <Navbar />
      <div>
        <div className="flex justify-center pb-40">
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              How To Play
            </h1>
          </div>
        </div>

        <article className="flex px-4 justify-between items-center flex-wrap mb-36">
          <div className="md:w-1/2">
            <p className="text-white text-lg mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sit tincidunt sed viverra a nunc pharetra, risus.Sit tincidunt sed
              viverra a nunc pharetra, risus.
            </p>
          </div>
          <div className="max-w-xl border-8 border-shade-2">
            <Image src={Tut1} />
          </div>
        </article>
        <article className="flex px-4 justify-between items-center flex-wrap mb-36">
          <div className="md:w-1/2">
            <p className="text-white text-lg mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sit tincidunt sed viverra a nunc pharetra, risus.Sit tincidunt sed
              viverra a nunc pharetra, risus.
            </p>
          </div>
          <div className="max-w-xl border-8 border-shade-2">
            <Image src={Tut2} />
          </div>
        </article>
        <article className="flex px-4 justify-between items-center flex-wrap mb-36">
          <div className="md:w-1/2">
            <p className="text-white text-lg mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sit tincidunt sed viverra a nunc pharetra, risus.Sit tincidunt sed
              viverra a nunc pharetra, risus.
            </p>
          </div>
          <div className="max-w-xl border-8 border-shade-2">
            <Image src={Tut3} />
          </div>
        </article>
        <article className="flex px-4 justify-between items-center flex-wrap mb-10">
          <div className="md:w-1/2">
            <p className="text-white text-lg mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sit tincidunt sed viverra a nunc pharetra, risus.Sit tincidunt sed
              viverra a nunc pharetra, risus.
            </p>
          </div>
          <div className="max-w-xl border-8 border-shade-2">
            <Image src={Tut4} />
          </div>
        </article>
      </div>
      <Footer />
    </section>
  );
};
export default HowToPlay;
