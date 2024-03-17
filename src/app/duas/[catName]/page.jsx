"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import card from "@/assets/duacard.svg"
import { IoCopyOutline } from "react-icons/io5";
import { BsBookmark, BsShare } from "react-icons/bs";
import { PiLightbulbFilament } from "react-icons/pi";
import { MdReportGmailerrorred } from "react-icons/md";
import "./tooltip.css"

const DuaDetails = ({ params, searchParams }) => {
    const publicAPI = usePublicAPI();
    const [duaData, setDuaData] = useState();
    const [subCategory, setSubCategory] = useState([])

    useEffect(() => {
        publicAPI.get(`/duas/${searchParams.cat}`)
            .then(res => setDuaData(res.data))
    }, [publicAPI, searchParams.cat])


    useEffect(() => {
        publicAPI.get(`/sub-category/${searchParams.cat}`)
            .then(res => setSubCategory(res?.data))
    }, [searchParams.cat, publicAPI])

    return (
        <div className='max-h-[85vh] overflow-y-auto font-poppins'>

            {
                subCategory.map(subcat => (
                    <div key={subcat.id} className='flex flex-col gap-6 mb-7'>
                        <h1 className='bg-white px-6 py-4 rounded-xl'><span className='text-[#1FA45B] font-semibold'>Section:</span>{subcat.subcat_name_en}</h1>
                        {
                            duaData?.filter(findDua => findDua.subcat_id === subcat.subcat_id).map(dua => (
                                <div id={`subcat=${dua.subcat_id}`} key={dua.id} className='flex flex-col gap-6'>
                                    <div id={`subcat=${dua.subcat_id}#dua=${dua.dua_id}`} className='bg-white px-6 py-4 rounded-xl space-y-5'>
                                        <div className='flex gap-3 items-center text-[#1FA45B] font-semibold'>
                                            <Image src={card} alt="logo" className="h-8 w-8"></Image>
                                            <h1>{dua.dua_id}. {dua.dua_name_en}</h1>
                                        </div>
                                        <div className='space-y-6'>
                                            {dua.top_en && <p className='text-lg'>{dua.top_en}</p>}
                                            {dua.dua_arabic && <p className='text-3xl text-right font-poppins leading-loose'>{dua.dua_arabic}</p>}
                                            {dua.transliteration_en && <p className='text-lg italic'><strong>Transliteration: </strong>{dua.transliteration_en}</p>}
                                            {dua.translation_en && <p className='text-lg text-zinc-600'><strong>Translation: </strong>{dua.translation_en}</p>}
                                            {dua.bottom_en && <p className='text-lg'>{dua.bottom_en}</p>}
                                            {dua.refference_en && <p className='text-lg text-zinc-700 font-semibold'><span className='text-[#1FA45B] text-xl'>Reference:</span><br />{dua.refference_en}</p>}
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            {
                                                dua.audio ? <audio controls>
                                                    <source src={dua.audio} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio> :
                                                <div></div>
                                            }
                                            <div className='flex gap-7'>
                                                <button className='relative button'><IoCopyOutline className='text-zinc-600 text-lg' /><span className='absolute showTooltip bg-zinc-800 text-white py-1 px-2 rounded-md -top-9 -right-3 opacity-0 '>copy</span></button>
                                                <button className='relative button'><BsBookmark className='text-zinc-600 text-lg' /><span className='absolute showTooltip bg-zinc-800 text-white py-1 px-2 rounded-md -top-9 -right-8 opacity-0 '>Bookmark</span></button>
                                                <button className='relative button'><PiLightbulbFilament className='text-zinc-600 text-2xl' /><span className='absolute showTooltip bg-zinc-800 text-white py-1 px-2 rounded-md -top-9 -right-8 opacity-0 '>Memorize</span></button>
                                                <button className='relative button'><BsShare className='text-zinc-600 text-lg' /><span className='absolute showTooltip bg-zinc-800 text-white py-1 px-2 rounded-md -top-9 -right-6 opacity-0 '>share</span></button>
                                                <button className='relative button'><MdReportGmailerrorred className='text-zinc-600 text-2xl' /><span className='absolute showTooltip bg-zinc-800 text-white py-1 px-2 rounded-md -top-9 -right-5 opacity-0 '>report</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }


        </div>
    );
};

export default DuaDetails;