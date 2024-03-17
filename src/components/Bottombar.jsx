import React from 'react';
import { BsBook, BsBookmark, BsGrid } from 'react-icons/bs';
import { LuHome } from 'react-icons/lu';
import { PiLightbulbFilament } from 'react-icons/pi';
import { TbMedicineSyrup } from 'react-icons/tb';

const Bottombar = () => {
    return (
            <div className='flex items-center justify-between bg-white rounded-t-[50px] p-6 3xl:p-10 shadow-lg w-full'>
                <button className=' rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <LuHome className='text-xl text-gray-500' />
                </button>
                <button className=' rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsGrid className='text-xl text-gray-500' />
                </button>
                <button className=' rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <PiLightbulbFilament className='text-xl text-gray-500' />
                </button>
                <button className=' rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsBookmark className='text-xl text-gray-500' />
                </button>
                <button className=' rounded-full h-11 w-11 flex justify-center items-center  1s transition hover:scale-110'>
                    <BsBook className='text-xl text-gray-500' />
                </button>
            </div>
    );
};

export default Bottombar;