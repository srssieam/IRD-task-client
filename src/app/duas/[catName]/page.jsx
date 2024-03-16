"use client"
import usePublicAPI from '@/hooks/usePublicAPI';
const DuaDetails = ({params, searchParams}) => {
    const publicAPI = usePublicAPI();
    
    return (
        <div>
            <h1><span className='text-green-600 font-semibold'>Section:</span></h1>
            <h1>{searchParams.cat}</h1>
        </div>
    );
};

export default DuaDetails;