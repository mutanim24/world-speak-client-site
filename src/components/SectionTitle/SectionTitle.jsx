import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='text-center my-5 p-3 border-y-2 border-cyan-500 w-6/12 mx-auto'>
           <h1 className='text-4xl font-bold mb-3 uppercase'>{title}</h1> 
           <p>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;