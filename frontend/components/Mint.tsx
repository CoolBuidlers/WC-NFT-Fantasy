import React, {useState} from "react"
import Link from "next/link";
import CardBg from "../public/img/CardBg.png";
import Neymar from "../public/img/card.svg";
import AbdelKarim from "../public/NFTs/0.png"
import Enner from "../public/NFTs/4.png";
import Sadio from "../public/NFTs/8.png";
import Van from "../public/NFTs/12.png";
import Image from "next/image";
import Carousel from "better-react-carousel";
import { useSigner, useProvider } from "wagmi";
import { buyFirstFourTeams } from "../contractInteractions/Prediction";
//Make 4 useState variables that sets the name of the team to pass in the function
//Make a button that resets the user choices
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Mint = () => {
    const { data: signer } = useSigner();
  const [firstTeam, setFirstTeam] = useState<string>("")
  const [secondTeam, setSecondTeam] = useState<string>("");
  const [thirdTeam, setThirdTeam] = useState<string>("");
  const [fourthTeam, setFourthTeam] = useState<string>("");

  const handleTeamSelection = (teamName:string) => {
     if(firstTeam === "") {
       setFirstTeam(teamName)
     } else if(secondTeam === "") {
       setSecondTeam(teamName)
     } else if(thirdTeam === "") {
       setThirdTeam(teamName)
     } else if(fourthTeam === "") {
      setFourthTeam(teamName)
     }
     console.log(firstTeam)
  }

  const resetSelection = () => {
    setFirstTeam("")
    setSecondTeam("");
    setThirdTeam("");
    setFourthTeam("")
  }

  const leftArrow = () => (
    <button className="w-14 h-14 bg-skin-base flex absolute rounded-full top-[calc(90%+4rem)] left-[calc(50%-80px)] justify-center items-center shadow-md shadow-purple-200 cursor-pointer bg-purple-900 hover:opacity-80 hover:shadow-none transition-all ">
      <AiOutlineArrowLeft className="text-2xl text-white" />
    </button>
  );
  const rightArrow = () => (
    <button className="w-14 h-14 bg-skin-base absolute rounded-full top-[calc(90%+4rem)] right-[calc(50%-80px)] flex justify-center items-center shadow-md shadow-purple-200 cursor-pointer bg-purple-900 hover:opacity-80 transition-all hover:shadow-none">
      <AiOutlineArrowRight className="text-2xl text-white" />
    </button>
  );
  return (
    <section className="">
      <div className="text-white sm:flex justify-between px-6 mt-28 mb-10">
        <h2 className="text-5xl mb-20">MINT your nfts</h2>
        <p className="text-3xl">Unit Price : 0.050 </p>
      </div>

      <div className="flex items-center flex-wrap justify-center px-2">
        <div className="sm:w-[349px] w-[300px] relative cursor-pointer">
          <div>
            <Image
              src={CardBg}
              layout="responsive"
              alt="CardImage"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={AbdelKarim}
              alt=""
              onClick={() => handleTeamSelection("Qatar")}
            />
          </div>
        </div>
        <Image
          src={Enner}
          className="text-[26rem] cursor-pointer"
          width={500}
          height={500}
          alt=""
          onClick={() => handleTeamSelection("Ecuador")}
        />
        <Image
          src={Sadio}
          className="text-[26rem] cursor-pointer"
          width={500}
          height={500}
          alt=""
          onClick={() => handleTeamSelection("Senegal")}
        />
        <Image
          src={Van}
          className="text-[26rem] cursor-pointer"
          width={500}
          height={500}
          alt=""
          onClick={() => handleTeamSelection("Netherlands")}
        />
        {/* <Neymar className="text-[26rem]" /> */}
        {/* <Neymar className="text-[26rem]" />
        <Neymar className="text-[26rem]" />
        <Neymar className="text-[26rem]" /> */}
      </div>
      <div className=" mb-20 3xl:px-40 ">
        <Carousel
          cols={4}
          rows={2}
          gap={1}
          loop={true}
          autoPlay={true}
          scrollSnap
          arrowLeft={leftArrow}
          arrowRight={rightArrow}
        >
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[200px]">
              <Neymar className="text-[25rem]" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-white text-4xl sm:flex justify-center sm:justify-around items-center px-6 pt-20 ">
        <a
          className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mb-12"
          onClick={() =>
            buyFirstFourTeams(firstTeam, secondTeam, thirdTeam, fourthTeam, signer)
          }
        >
          Mint
        </a>
        <div className="relative group w-fit mx-auto sm:mx-0">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-xl transition-all"
          ></div>
          <span className="relative border-t-2 border-[#D100D1] transition-all divide-x divide-white ">
            0.050 | 0.04 $
          </span>
        </div>
      </div>
      <div className=" max-w-2xl mt-10 mb-20 mx-auto text-center">
        <p className="text-white text-2xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          at faucibus blandit egestas congue. Felis, feugia t viverra quis
          felis.
        </p>
      </div>
    </section>
  );
};

export default Mint;
