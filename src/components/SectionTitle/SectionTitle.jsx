import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='text-center my-5 p-3 mx-auto'>
           <h1 className=' text-2xl md:text-4xl font-bold mb-3 uppercase'>{title}</h1> 
           <p>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;