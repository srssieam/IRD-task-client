import React from 'react';
import { HiLanguage } from "react-icons/hi2";

const Setting = () => {
    return (
        <div>
            <h1 className='text-center p-5 text-xl'>Settings</h1>
            <div className='p-4 space-y-6 text-sm'>
                <button className='flex gap-3 text-green-700 items-center p-2 rounded-lg border-l-[6px] border-[#1FA45B]'>
                    <div className='p-2 rounded-full bg-[#e6ebee]'>
                        <HiLanguage className='text-2xl' />
                    </div>
                    <p className='font-semibold'>Language Settings</p>
                </button>
                <div className='flex justify-center gap-4'>
                    <button className='bg-[#1FA45B] rounded-md text-white px-4 py-2 text-sm'>English</button>
                    <button className=' px-4 py-2 text-sm rounded-md border border-zinc-700 hover:bg-[#1FA45B] hover:text-white hover:border-none'>Bangla</button>
                </div>
                <hr />
                <button className='flex gap-3 items-center p-2 rounded-lg hover:text-green-700 hover:border-l-[6px] border-[#1FA45B] text-zinc-600'>
                    <div className='p-2 rounded-full bg-[#e6ebee]'>
                        <HiLanguage className='text-2xl' />
                    </div>
                    <p className='font-semibold'>General Settings</p>
                </button>
                <button className='flex gap-3 items-center p-2 rounded-lg hover:text-green-700 hover:border-l-[6px] border-[#1FA45B] text-zinc-600'>
                    <div className='p-2 rounded-full bg-[#e6ebee]'>
                        <HiLanguage className='text-2xl' />
                    </div>
                    <p className='font-semibold'>Font Settings</p>
                </button>
                <button className='flex gap-3 items-center p-2 rounded-lg hover:text-green-700 hover:border-l-[6px] border-[#1FA45B] text-zinc-600'>
                    <div className='p-2 rounded-full bg-[#e6ebee]'>
                        <HiLanguage className='text-2xl' />
                    </div>
                    <p className='font-semibold'>Appearance Settings</p>
                </button>
            </div>
        </div>
    );
};

export default Setting;