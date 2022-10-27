import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logo from "../public/img/logo.png";
import * as Scroll from "react-scroll";

const Navbar = () => {
  // --------- States here -------------
  const [expand, setExpand] = useState<boolean>(false);
  let scroll = Scroll.animateScroll;

  const allScrolls = {
    home: (): void => {
      scroll.scrollTo(0)
    },
    mint: (): void => {
      scroll.scrollTo(1600)
    },
    roadmap: (): void => {
      scroll.scrollTo(3050)
    },
    Team: (): void => {
      scroll.scrollTo(4500)
    }
  }

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
          <BiMenu className="text-3xl" />
        </a>
      ) : (
        <a
          href="#"
          className="self-center text-center lg:hidden fixed top-10 left-2/4 z-50 rounded-full ml-3 bg-transparent px-2 py-2"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <MdClose className="text-2xl text-white" />
        </a>
      )}
      <div className="flex justify-between w-[200px] -order-1 lg:w-72">
        <div className="flex items-start justify-start space-x-2 w-auto">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <ul className="hidden lg:flex justify-around items-center basis-2/5 text-lg">
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
            ></div>
            <button className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
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
            <button className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
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
            <button className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
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
            <button className="relative group-hover:border-t-2 border-[#D100D1] py-1 transition-all"
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
        <ConnectButton />
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
            <Image src={logo} width={259} height={180} alt="logo" />
          </div>
          <ul className=" flex flex-col justify-between basis-2/6 items-start mb-20">
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                HOME
              </button>
            </Link>
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                MINT
              </button>
            </Link>
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                ROADMAP
              </button>
            </Link>
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                TEAM
              </button>
            </Link>
            <Link href="/Activity">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                ACTIVITY
              </button>
            </Link>
          </ul>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
