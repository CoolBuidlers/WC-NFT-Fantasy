import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import logo from "../public/img/logo.png";
import * as Scroll from "react-scroll";
import CustomButton from "./CustomButton";

const Navbar = () => {
  // --------- States here -------------
  const [expand, setExpand] = useState<boolean>(false);
  let scroll = Scroll.animateScroll;

  const allScrolls = {
    home: (): void => {
      scroll.scrollTo(0);
      setExpand(!expand);
    },
    mint: (): void => {
      scroll.scrollTo(1300);
      setExpand(!expand);
    },
    mintM: (): void => {
      scroll.scrollTo(800);
      setExpand(!expand);
    },
    roadmap: (): void => {
      scroll.scrollTo(3850);
      setExpand(!expand);
    },
    roadmapM: (): void => {
      scroll.scrollTo(4300);
      setExpand(!expand);
    },
    Team: (): void => {
      scroll.scrollTo(5200);
      setExpand(!expand);
    },
    TeamM: (): void => {
      scroll.scrollTo(6300);
      setExpand(!expand);
    },
  };

  return (
    <nav className="max-w-full bg-[#14032F] flex justify-between items-center px-6  lg:flex lg:justify-around lg:px-0 font-plus relative lg:items-center text-white">
      {!expand ? (
        <a
          href="#"
          className="self-center ml-2 lg:hidden"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <BiMenu className="text-5xl" />
        </a>
      ) : (
        <a
          href="#"
          className="self-center text-center lg:hidden fixed left-[80%] z-50 rounded-full ml-3 bg-purple-900 px-2 py-2"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <MdClose className="text-4xl text-white" />
        </a>
      )}
      <div className="flex justify-between w-[200px] -order-1 lg:w-72">
        <div className="flex items-start justify-start space-x-2 w-auto cursor-pointer">
          <Link
            href="/"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Image src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <ul className="hidden lg:flex justify-around items-center basis-2/5 text-lg">
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
              onClick={allScrolls.home}
            >
              HOME
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
              onClick={allScrolls.mint}
            >
              MINT
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
              onClick={allScrolls.roadmap}
            >
              ROADMAP
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
              onClick={allScrolls.Team}
            >
              TEAM
            </button>
          </div>
        </Link>
        <Link href="/Activity">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all">
              ACTIVITY
            </button>
          </div>
        </Link>
      </ul>
      <div className="hidden lg:flex items-center">
        <CustomButton />
      </div>
      {/* --------------- Mobile and Tablets --------------- */}
      {/* ------------- Transition for Mobile Menu -------------- */}
      <Transition
        show={expand}
        enter="transition ease-out duration-1000 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="lg:hidden w-screen h-screen fixed overflow-y left-0 top-0 z-10"
      >
        <div
          className="lg:hidden flex flex-col items-center h-full px-4 w-full bg-[#14032F] py-10 md:px-8"
          id="mobile-menu"
        >
          <div className="flex justify-center space-x-2 items-center w-auto mb-24">
            <Link
              href="/"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <Image src={logo} width={259} height={180} alt="logo" />
            </Link>
          </div>
          <ul className=" flex flex-col justify-between basis-2/6 items-start mb-6">
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.home}
              >
                HOME
              </button>
            </Link>
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.mintM}
              >
                MINT
              </button>
            </Link>
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.roadmapM}
              >
                ROADMAP
              </button>
            </Link>
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.TeamM}
              >
                TEAM
              </button>
            </Link>
            <Link href="/Activity">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                ACTIVITY
              </button>
            </Link>
          </ul>
          <div className="flex items-center ">
            <CustomButton />
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
