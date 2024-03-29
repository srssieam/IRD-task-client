import React from 'react';
import { GoSearch } from 'react-icons/go';
import Profile from './Profile';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { IoMdSettings } from "react-icons/io";

const NavSmall = () => {
    return (
        <div className='flex justify-between items-center flex-1 bg-white p-5'>
            <div className='flex gap-3 items-center'>
                <Link href="/">
                    <Image src={logo} alt="logo" className="h-14 w-14 "></Image>
                </Link>
                <h1 className='text-2xl font-poppins'>Dua & Ruqyah</h1>
            </div>
            <div className='hidden lg:flex justify-between gap-6 items-center'>
                <form className='relative'>
                    <input type="text" name="search" placeholder='Search by Dua Name' id="" className='text-sm w-[300px] outline-none p-4 rounded-md focus:border border-green-700 shadow-md' />
                    <button className='absolute top-1 right-1 px-4 py-[13px] bg-[#edf0f1] rounded-md'>
                        <GoSearch className='text-xl text-gray-500' />
                    </button>
                </form>
                <button><IoMdSettings className='text-green-600 text-2xl' /></button>
                <button><Profile></Profile></button>
            </div>
            <button><IoMdSettings className='lg:hidden text-green-600 text-2xl' /></button>
        </div>
    );
};

export default NavSmall;