import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import footerImg from "../public/img/footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-full relative text-white ">
      <div className="w-[100vw] h-[50vh] sm:h-[40vh]">
        <Image src={footerImg} layout="fill" alt="footer" objectFit="cover" />
      </div>
      <div className="absolute top-[80%] sm:top-3/4 lg:top-4/4 left-2/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full sm:flex justify-between items-center px-10">
        <h2 className="text-lg mb-4">
          Built by CoolBuilders| All rights reserved
        </h2>
        <div className="flex justify-between items-center">
          <Link href="https://twitter.com/KhanAbbas201">
            <a target="_blank">
              <AiOutlineTwitter className="text-5xl bg-transparent rounded-full p-1 cursor-pointer" />
            </a>
          </Link>
          <Link href="https://github.com/CoolBuidlers/WC-NFT-Fantasy">
            <a target="_blank">
              <AiFillGithub className="text-5xl bg-transparent rounded-full p-1 cursor-pointer mx-5" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/abbas-khan-033802222">
            <a target="_blank">
              <AiFillLinkedin className="text-5xl bg-transparent rounded-full p-1 cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
