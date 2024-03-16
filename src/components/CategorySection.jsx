"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import catIcon from "@/assets/icon.png"
import Link from 'next/link';

const CategorySection = () => {
    const [category, setCategory] = useState()
    const publicAPI = usePublicAPI();
    useEffect(() => {
        publicAPI.get('/category-data')
            .then(res => setCategory(res.data))
    }, [publicAPI])

    useEffect(() => {
        publicAPI.get('/category-data')
            .then(res => setCategory(res.data))
    }, [publicAPI])


    return (
        <div className=''>
            <h1 className='bg-[#1FA45B] text-white p-4 text-center '>Categories</h1>
            <div className='p-3'>
                <form className='relative'>
                    <GoSearch className='absolute text-xl text-gray-500  top-4 left-4' />
                    <input type="text" name="search" placeholder='Search Categories' id="" className='text-sm w-full outline-none border border-gray-200 pl-14 p-4 rounded-md focus:border-[3px] focus:border-green-700' />
                </form>
                <div className='flex flex-col gap-2 rounded-md overflow-y-scroll max-h-[68vh] py-4'>
                    {
                        category?.map(cat => (
                            <div key={cat.id} className='flex flex-col'>
                                <Link href={`/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}?cat=${cat.cat_id}`}>
                                    <div className='hover:bg-[#E8F0F5] p-2 flex justify-between items-center rounded-md'>
                                        <div className='flex gap-2 items-center'>
                                            <Image src={catIcon} alt="logo" className="h-14 w-14 p-2 rounded-md bg-[#CFE0E5]"></Image>
                                            <div>
                                                <h1 className='font-semibold'>{cat.cat_name_en}</h1>
                                                <p className='text-xs text-gray-400'>Subcategory: {cat.no_of_subcat}</p>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <h1>{cat.no_of_dua}</h1>
                                            <p className='text-xs text-gray-400'>Duas</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategorySection;