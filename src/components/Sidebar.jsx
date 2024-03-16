import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import { LuHome } from "react-icons/lu";
import { BsGrid, BsBookmark, BsBook } from "react-icons/bs";
import { PiLightbulbFilament, PiChatsTeardrop } from "react-icons/pi";
import { TbMedicineSyrup } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';


const Sidebar = () => {
    return (
        <div className="bg-white h-full flex flex-col items-center justify-between p-6 rounded-3xl font-poppins">
            <Link href="/">
                <Image src={logo} alt="logo" className="h-14 w-14 "></Image>
            </Link>
            <div className='flex flex-col gap-5'>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <LuHome className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsGrid className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <PiLightbulbFilament className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsBookmark className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <TbMedicineSyrup className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <PiChatsTeardrop className='text-xl text-gray-500' />
                </button>
                <button className='bg-[#e6ebee] rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsBook className='text-xl text-gray-500' />
                </button>
            </div>
            <div className='bg-[#1FA45B] p-3 rounded-md'>
                <FaHandHoldingHeart className='text-2xl text-white' />
            </div>
        </div>
    );
};

export default Sidebar;