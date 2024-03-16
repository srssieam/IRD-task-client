import CategorySection from '@/components/CategorySection';
import Setting from '@/components/Setting';
import React from 'react';

const DuasLayout = ({children}) => {
    return (
        <div className="flex gap-7 justify-between pt-5">
            <div className="w-[23%] rounded-lg bg-white overflow-hidden">
                <CategorySection></CategorySection>
            </div>
            <div className="flex-1">
                {children}
            </div>
            <div className="w-1/6 rounded-3xl bg-white shadow-md overflow-hidden">
                <Setting></Setting>
            </div>

        </div>
    );
};

export default DuasLayout;