import Link from "next/link";
import CardBg from "../public/img/CardBg.png";
import Neymar from "../public/img/card.svg";
import Image from "next/image";
import Carousel from "better-react-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Mint = () => {
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
        <div className="sm:w-[349px] w-[300px] relative ">
          <div>
            <Image
              src={CardBg}
              layout="responsive"
              alt="CardImage"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Neymar className="text-[22rem]" />
          </div>
        </div>

        <Neymar className="text-[26rem]" />
        <Neymar className="text-[26rem]" />
        <Neymar className="text-[26rem]" />
        <Neymar className="text-[26rem]" />
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
        <Link href="/">
          <a className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mb-12">
            Mint
          </a>
        </Link>
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
