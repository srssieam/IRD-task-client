import CategorySection from '@/components/CategorySection';
import SmallCategoryBar from '@/components/SmallCategoryBar';
import React from 'react';

export const metadata = {
    title: "Duas",
    description: "This is Duas page where you can find all duas.",
  };

const DuasLayout = ({ children }) => {
    return (
        <div className="flex gap-7 justify-between pt-5">
            <div className="w-0 hidden 3xl:block 4xl:w-[40%] 5xl:w-[30%] rounded-lg bg-white overflow-hidden">
                <CategorySection></CategorySection>
            </div>
            <div className="w-full 5xl:flex-1">
                <div className="w-full 3xl:hidden bg-white rounded-lg mb-6 z-10">
                    <SmallCategoryBar></SmallCategoryBar>
                </div>
                {children}
            </div>
        </div>
    );
};

export default DuasLayout;