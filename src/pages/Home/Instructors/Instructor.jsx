import React from 'react';

const instructor = ({ instructor }) => {
    return (
        <div className='border shadow-md'>
            <img src={instructor.image} alt="" />
            <div className='p-4'>
                <h2 className="card-title">{instructor.name}</h2>
                <p>-{instructor.email}</p>
                <div className='divider'></div>
                <div className='flex justify-between'>
                    <p>Classes: <span className='badge-accent text-white rounded px-3'>{instructor.classNumber}</span></p>
                    <button className='btn bg-cyan-600 btn-sm text-white'>See classes</button>
                </div>
            </div>
        </div >
    );
};

export default instructor;