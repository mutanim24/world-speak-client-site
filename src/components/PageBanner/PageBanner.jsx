import React from 'react';

const PageBanner = ({heading}) => {
    // TODO : change banner design
    return (
        <div className='px-14 py-6 bg-cyan-200'>
            <h1 className='uppercase text-center md:text-left font-semibold text-2xl py-4'>{heading}</h1>
        </div>
    );
};

export default PageBanner;