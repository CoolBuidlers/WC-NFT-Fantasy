import React from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link';
import footerImg from '../public/img/footer.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="max-w-full relative text-white">
          <Image src={footerImg} layout="responsive" alt="footer"/>
          <div className="absolute top-2/4 sm:top-3/4 lg:top-4/4 left-2/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between items-center px-10">
            <h2 className='text-lg'>Created by CoolBuilders| All rights reserved</h2>
            <div className='flex justify-between items-center'>
            <Link href='https://twitter.com/KhanAbbas201'>
                <a target="_blank">
                <AiOutlineTwitter className="text-5xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://github.com/Abbas-Khann'>
                <a target="_blank">
                <AiFillGithub className="text-5xl bg-transparent rounded-full p-1 cursor-pointer mx-5" />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/abbas-khan-033802222'>
                <a target="_blank">
                <AiFillLinkedin className="text-5xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            </div>
          </div>
          </footer>
  )
}

export default Footer