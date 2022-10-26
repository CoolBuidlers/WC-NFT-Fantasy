import React from 'react';
import Image from 'next/image';
import teamCard from '../public/img/CardBg.png';
import khan from '../public/img/teamMember.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link';

const Team = () => {
  return (
    <div>
        <div className='flex justify-center py-32'> 
        <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
              ></div>
            <button className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Our Team
            </button>
          </div>
        </div>
        {/* <div className=' flex-wrap items-center justify-around'> */}
        {/* <div className='grid grid-cols-3 gap-x-14 gap-y-20'> */}
        <div className="max-w-xs relative mx-auto text-white">
          <Image src={teamCard} layout="responsive" alt="teamCard"/>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={khan} alt="Abbas"/>
          </div>

          <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className='mt-44 border-b-2 border-solid border-[#D100D1] text-2xl text-center'>Abbas Khan</h1>
            <h1 className='text-center my-2'>UI Designer & Full stack developer</h1>
            <div className='flex justify-evenly'>

            <Link href='https://twitter.com/KhanAbbas201'>
                <a target="_blank">
                <AiOutlineTwitter className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://github.com/Abbas-Khann'>
                <a target="_blank">
                <AiFillGithub className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/abbas-khan-033802222'>
                <a target="_blank">
                <AiFillLinkedin className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            </div>
          </div>
          </div>  {/* Ending tag of abbas */}
        <div className="max-w-xs relative mx-auto  text-white">
          <Image src={teamCard} layout="responsive" alt="teamCard"/>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={khan} alt="Abbas"/>
          </div>

          <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className='mt-44 border-b-2 border-solid border-[#D100D1] text-2xl text-center'>Abbas Khan</h1>
            <h1 className='text-center my-2'>UI Designer & Full stack developer</h1>
            <div className='flex justify-evenly'>

            <Link href='https://twitter.com/KhanAbbas201'>
                <a target="_blank">
                <AiOutlineTwitter className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://github.com/Abbas-Khann'>
                <a target="_blank">
                <AiFillGithub className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/abbas-khan-033802222'>
                <a target="_blank">
                <AiFillLinkedin className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            </div>
          </div>
          </div>  {/* Ending tag of abbas */}
        <div className="max-w-xs relative mx-auto text-white">
          <Image src={teamCard} layout="responsive" alt="teamCard"/>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={khan} alt="Abbas"/>
          </div>

          <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className='mt-44 border-b-2 border-solid border-[#D100D1] text-2xl text-center'>Abbas Khan</h1>
            <h1 className='text-center my-2'>UI Designer & Full stack developer</h1>
            <div className='flex justify-evenly'>

            <Link href='https://twitter.com/KhanAbbas201'>
                <a target="_blank">
                <AiOutlineTwitter className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://github.com/Abbas-Khann'>
                <a target="_blank">
                <AiFillGithub className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/abbas-khan-033802222'>
                <a target="_blank">
                <AiFillLinkedin className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            </div>
          </div>
          </div>  {/* Ending tag of abbas */}
        <div className="max-w-xs relative mx-auto text-white">
          <Image src={teamCard} layout="responsive" alt="teamCard"/>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={khan} alt="Abbas"/>
          </div>

          <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className='mt-44 border-b-2 border-solid border-[#D100D1] text-2xl text-center'>Abbas Khan</h1>
            <h1 className='text-center my-2'>UI Designer & Full stack developer</h1>
            <div className='flex justify-evenly'>

            <Link href='https://twitter.com/KhanAbbas201'>
                <a target="_blank">
                <AiOutlineTwitter className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://github.com/Abbas-Khann'>
                <a target="_blank">
                <AiFillGithub className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            <Link href='https://www.linkedin.com/in/abbas-khan-033802222'>
                <a target="_blank">
                <AiFillLinkedin className="text-4xl bg-transparent rounded-full p-1 cursor-pointer" />
                </a>
            </Link>
            </div>
          </div>
          </div>  {/* Ending tag of abbas */}
        {/* </div> */}
    </div>
  )
}

export default Team