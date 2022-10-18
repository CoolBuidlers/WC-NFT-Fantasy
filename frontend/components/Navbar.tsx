import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logo from "../public/img/logo.png";

const Navbar = () => {
  // --------- States here -------------
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <nav className="max-w-full bg-[#14032F] px-4 grid grid-cols-2 grid-rows-1 gap-y-7 justify-items-end h-full content-center lg:flex lg:justify-around lg:px-0 font-plus relative lg:items-center text-white">
      
      <div className="flex justify-between w-full lg:w-72">
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
        <div className="flex items-start justify-start space-x-2 w-auto">
            <Image src={logo} alt="logo"/>
          </div>
      </div>
      <ul className="hidden lg:flex justify-around items-center basis-2/5 text-lg">
        <Link href="/">
          <button className="cursor-pointer shadow-sm hover:ease-in duration-400 hover:bg-[#c743b1] hover:border-t-2 hover:border-[#DB00B6] transition-all text-skin-muted">
            HOME
          </button>
        </Link>
        <Link
          href="/"
        >
          <button className="cursor-pointer hover:border-y- hover:border-black transition-all text-skin-muted">
            MINT
          </button>
        </Link>
        <Link href="/">
          <button className="cursor-pointer hover:border-y- hover:border-black transition-all text-skin-muted">
            ROADMAP
          </button>
        </Link>
        <Link href="/">
          <button className="cursor-pointer hover:border-y- hover:border-black transition-all text-skin-muted">
            TEAM
          </button>
        </Link>
        <Link href="/">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
            ACTIVITY
          </button>
        </Link>

      </ul>
      <div className="flex items-center">
      <ConnectButton />
      </div>
      {/* --------------- Mobile and Tablets --------------- */}
      {/* ------------- Transition for Mobile Menu -------------- */}
      <Transition
        show={expand}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-500 transfrom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="lg:hidden w-screen h-screen fixed overflow-y left-0 top-0 z-10"
      >
        <div
          className="lg:hidden flex flex-col items-start h-full px-4 w-2/4 bg-[#14032F] py-10 md:px-8"
          id="mobile-menu"
        >
          <div className="flex space-x-2 items-center w-auto mb-24">
            <Image src={logo} width={259} height={180} alt="logo"/>
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
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                ACTIVITY
              </button>
            </Link>

          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;