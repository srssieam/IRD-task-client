import CategorySection from '@/components/CategorySection';
import Setting from '@/components/Setting';
import SmallCategoryBar from '@/components/SmallCategoryBar';
import React from 'react';

const DuasLayout = ({ children }) => {
    return (
        <div className="flex gap-7 justify-between pt-5">
            <div className="w-0 hidden 3xl:block 3xl:w-[140%] 4xl:w-[40%] 5xl:w-[23%] rounded-lg bg-white overflow-hidden">
                <CategorySection></CategorySection>
            </div>
            <div className="w-full 5xl:flex-1">
                <div className="w-full 3xl:hidden bg-white rounded-lg mb-6 z-10">
                    <SmallCategoryBar></SmallCategoryBar>
                </div>
                {children}
            </div>
            <div className="hidden w-0 5xl:block 5xl:w-[22%] rounded-3xl bg-white shadow-md overflow-hidden">
                <Setting></Setting>
            </div>

        </div>
    );
};

export default DuasLayout;