"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import catIcon from "@/assets/icon.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SmallCategoryBar = () => {
    const [category, setCategory] = useState()
    const [searchText, setSearchText] = useState("")
    const publicAPI = usePublicAPI();
    const [isOpen, setIsOpen] = useState(false)

    // fetch category data
    useEffect(() => {
        publicAPI.get(`/category-data?search=${searchText}`)
            .then(res => setCategory(res.data))
    }, [publicAPI, searchText])



    const pathName = usePathname();
    // console.log(pathName)


    return (
        <div>
            <div className='p-3'>
                <div onClick={()=>setIsOpen(!isOpen)} className=' cursor-pointer flex gap-4 items-center'>
                    <FaBars className='text-3xl' />
                    <p>Category</p>
                </div>
                {/* categories */}
                <div className={`${isOpen ? "flex flex-col gap-2 rounded-md overflow-y-scroll py-4" : "hidden"} `}>
                    {
                        category?.map(cat => (
                            <div key={cat.id} className='flex flex-col'>

                                {/* category */}
                                <Link href={`/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}?cat=${cat.cat_id}`}>
                                    <div onClick={()=>setIsOpen(false)} className={`hover:bg-[#E8F0F5] p-2 flex justify-between items-center rounded-md ${pathName === `/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}` ? "bg-[#E8F0F5]" : ""}`}>
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

export default SmallCategoryBar;