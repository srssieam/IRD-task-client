"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
import React, { useEffect } from 'react';
const DuaDetails = ({params, searchParams}) => {

    const publicAPI = usePublicAPI();
    useEffect(()=>{

    },[])
    return (
        <div>
            <h1>{searchParams.cat}</h1>
        </div>
    );
};

export default DuaDetails;