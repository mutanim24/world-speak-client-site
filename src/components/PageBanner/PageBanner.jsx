import React from 'react';

const PageBanner = ({heading}) => {
    // TODO : change banner design
    return (
        <div className='p-8 bg-cyan-700'>
            <h1 className='uppercase text-center text-white font-bold text-5xl py-4 border-y-2 border-double'>{heading}</h1>
        </div>
    );
};

export default PageBanner;