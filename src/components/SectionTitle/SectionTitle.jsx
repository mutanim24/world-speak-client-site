import React from 'react';

const SectionTitle = ({title, subtitle, textColor}) => {
    return (
        <div className={`text-center my-5 p-3 mx-auto ${textColor}`}>
           <h1 className=' text-2xl md:text-3xl font-semibold mb-3 uppercase'>{title}</h1> 
           <p>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;