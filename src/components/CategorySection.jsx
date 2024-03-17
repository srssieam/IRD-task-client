"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import catIcon from "@/assets/icon.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategorySection = () => {
    const [category, setCategory] = useState()
    const [subCategory, setSubCategory] = useState([])
    const [duas, setDuas] = useState([])
    const [openSubCat, setOpenSubCat] = useState()
    const [searchText, setSearchText] = useState("")
    const publicAPI = usePublicAPI();

    // fetch category data
    useEffect(() => {
        publicAPI.get(`/category-data?search=${searchText}`)
            .then(res => setCategory(res.data))
    }, [publicAPI, searchText])


    // fetch sub category data
    useEffect(() => {
        publicAPI.get(`/sub-category-data`)
            .then(res => setSubCategory(res.data))
    }, [, publicAPI])

    // fetch dua data
    useEffect(() => {
        publicAPI.get(`/dua-data`)
            .then(res => setDuas(res.data))
    }, [, publicAPI])

    const pathName = usePathname();
    // console.log(pathName)

    // search functionality
    const handleSearchChange = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        setSearchText(e.target.value)
    }


    return (
        <div>
            <h1 className='bg-[#1FA45B] text-white p-4 text-center '>Categories</h1>
            <div className='p-3'>
                {/* category searchbar */}
                <form className='relative'>
                    <GoSearch className='absolute text-xl text-gray-500  top-4 left-4' />
                    <input onChange={handleSearchChange} type="text" name="search" placeholder='Search Categories' id="" className='text-sm w-full outline-none border border-gray-200 pl-14 p-4 rounded-md focus:border-[3px] focus:border-green-700' />
                </form>

                {/* categories */}
                <div className='flex flex-col gap-2 rounded-md overflow-y-scroll max-h-[60vh] 5xl:max-h-[68vh] py-4'>
                    {
                        category?.map(cat => (
                            <div key={cat.id} className='flex flex-col'>

                                {/* category */}
                                <Link href={`/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}?cat=${cat.cat_id}`}>
                                    <div className={`hover:bg-[#E8F0F5] p-2 flex justify-between items-center rounded-md ${pathName === `/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}` ? "bg-[#E8F0F5]" : ""}`}>
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

                                {/* sub category */}
                                <div className={`${pathName === `/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}` ? "block ml-7 p-4 border-l-2 border-l-green-700 border-dotted space-y-5" : "hidden"}`}>
                                    {
                                        subCategory.filter(subCat => subCat.cat_id === cat.cat_id).map(sub => (
                                            <div key={sub.id + "sub"}>
                                                <div className='relative text-sm '>
                                                    <Link onClick={() => setOpenSubCat(sub.subcat_id)} href={`/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}?cat=${sub.cat_id}#subcat=${sub.subcat_id}`}  >
                                                        <div className='absolute -left-5 top-1 bg-green-600 w-2 h-2 rounded-full'></div>
                                                        <h1 className='text-zinc-700 font-semibold'>{sub.subcat_name_en}</h1>
                                                    </Link>
                                                </div>
                                                <div className={`space-y-5 mt-5`}>

                                                    {/* dua */}
                                                    {
                                                        duas.filter(dua => sub.subcat_id === dua.subcat_id).map(singleDua => (
                                                            <div key={singleDua.id + "dua"} className={`ml-5 text-sm ${singleDua.subcat_id === openSubCat ? "block" : "hidden"}`}>
                                                                <Link href={`/duas/${cat.cat_name_en.replace(/\s+/g, '-').toLowerCase()}?cat=${singleDua.cat_id}#subcat=${singleDua.subcat_id}#dua=${singleDua.dua_id}`}>
                                                                    &gt; {singleDua.dua_name_en}
                                                                </Link>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategorySection;