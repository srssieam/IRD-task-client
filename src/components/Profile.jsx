import React from 'react';
import avater from "@/assets/avater.png"
import Image from 'next/image';
import { FaSortDown } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='flex justify-between items-center gap-2 cursor-pointer'>
            <Image src={avater} alt="logo" className="h-10 w-10"></Image>
            <FaSortDown className=' text-gray-600' />
        </div>
    );
};

export default Profile;