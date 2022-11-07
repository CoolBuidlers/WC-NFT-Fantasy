import Link from "next/link";
import CardBg from "../public/img/CardBg.png";
import Neymar from "../public/img/card.svg";
import Image from "next/image";
import Carousel from "better-react-carousel";
import { MdClose } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { isHexString } from "ethers/lib/utils";
const Mint = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowing2, setIsShowing2] = useState(false);
  const [isShowing3, setIsShowing3] = useState(false);
  const [isShowing4, setIsShowing4] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

      <div className=" mb-20 3xl:px-40 w-full">
        <Carousel
          cols={4}
          rows={2}
          gap={1}
          loop={true}
          scrollSnap={true}
          arrowLeft={leftArrow}
          arrowRight={rightArrow}
          responsiveLayout={[
            {
              breakpoint: 1350,
              cols: 3,
              rows: 2,
              loop: true,
            },
            {
              breakpoint: 700,
              cols: 1,
              rows: 2,
              loop: true,
            },
            {
              breakpoint: 1050,
              cols: 2,
              rows: 1,
              loop: true,
            },
          ]}
        >
          <Carousel.Item>
            <div className="max-w-[350px]">
              <div className=" relative flex justify-center my-4 ">
                <Transition
                  show={isShowing}
                  enter="transform transition duration-[500ms] ease-in"
                  enterFrom="opacity-0 rotate-[180deg] scale-0"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                  className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
                >
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                    1
                  </span>
                </Transition>
              </div>
              <Neymar
                className="text-[25rem]"
                onClick={() => {
                  setIsShowing(!isShowing);
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[350px]">
              <div className=" relative flex justify-center my-4 ">
                <Transition
                  show={isShowing2}
                  enter="transform transition duration-[500ms] ease-in"
                  enterFrom="opacity-0 rotate-[180deg] scale-0"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                  className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
                >
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-[#CF128F] text-white rounded-full">
                    2
                  </span>
                </Transition>
              </div>
              <Neymar
                className="text-[25rem]"
                onClick={() => {
                  setIsShowing2(!isShowing2);
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[350px]">
              <div className=" relative flex justify-center my-4 ">
                <Transition
                  show={isShowing3}
                  enter="transform transition duration-[500ms] ease-in"
                  enterFrom="opacity-0 rotate-[180deg] scale-0"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                  className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
                >
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-red-500 text-white rounded-full">
                    3
                  </span>
                </Transition>
              </div>
              <Neymar
                className="text-[25rem]"
                onClick={() => {
                  setIsShowing3(!isShowing3);
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[350px]">
              <div className=" relative flex justify-center my-4 ">
                <Transition
                  show={isShowing4}
                  enter="transform transition duration-[500ms] ease-in"
                  enterFrom="opacity-0 rotate-[180deg] scale-0"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                  className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
                >
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-[#86761f] text-white rounded-full">
                    4
                  </span>
                </Transition>
              </div>
              <Neymar
                className="text-[25rem]"
                onClick={() => {
                  setIsShowing4(!isShowing4);
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-[350px]">
              <div className=" relative flex justify-center my-4 ">
                <Transition
                  show={isShowing}
                  enter="transform transition duration-[500ms] ease-in"
                  enterFrom="opacity-0 rotate-[180deg] scale-0"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                  className=" max-w-[200px] absolute -top-2 left-1/2 transform -translate-x-1/2 ml-4 "
                >
                  <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                    1
                  </span>
                </Transition>
              </div>
              <Neymar
                className="text-[25rem]"
                onClick={() => {
                  setIsShowing(!isShowing);
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-white text-4xl sm:flex justify-center sm:justify-around items-center px-6 pt-20 ">
        <a
          className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mb-12 md:mb-0"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Mint
        </a>

        <Transition
          show={showModal}
          enter="transform transition duration-[500ms] ease-in"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-[300ms] transition ease-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-0 "
          className="w-[100vw] h-[100vh] bg-[#4d4c4cd9] fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <div className=" bg-shade-bg sm:max-w-full  h-1/2 sm:w-1/2 sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
            <p className="sm:mb-14 mb-6 text-lg">Please Select Amount</p>

            <div className="px-2  flex  flex-col sm:flex-row justify-center items-center">
              <input
                type="text"
                className="text-white bg-shade-9 w-[300px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-1 mb-6 sm:mb-0 sm:mr-24"
              />
              <p>MATIC</p>
              <a
                className="self-center text-center fixed z-50 top-1 sm:left-full left-[78%] rounded-full ml-3 bg-purple-900 px-2 py-2 "
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <MdClose className="text-4xl text-white" />
              </a>
            </div>
            <a
              className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10"
              onClick={() => {}}
            >
              Confirm
            </a>
          </div>
        </Transition>
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
{
  /* 
                
                 */
}
