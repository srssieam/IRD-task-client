import React from 'react';
import { GoSearch } from "react-icons/go";
import Profile from './Profile';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center flex-1'>
            <h1 className='text-2xl font-poppins'>Duas Page</h1>
            <div className='w-2/5 flex justify-between items-center'>
                <form className='relative'>
                    <input type="text" name="search" placeholder='Search by Dua Name' id="" className='text-sm w-[350px] outline-none p-4 rounded-md focus:border border-green-700 shadow-md' />
                    <button className='absolute top-1 right-1 px-4 py-[13px] bg-[#edf0f1] rounded-md'>
                        <GoSearch className='text-xl text-gray-500' />
                    </button>
                </form>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Navbar;