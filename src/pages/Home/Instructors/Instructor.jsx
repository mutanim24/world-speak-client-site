import React from 'react';

const instructor = ({ instructor }) => {
    return (
        <div className='border shadow-md'>
            <img src={instructor.instructor_image} alt="" />
            <div className='p-4'>
                <h2 className="card-title">{instructor.instructor_name}</h2>
                <p>-{instructor.instructor_email}</p>
                <div className='divider'></div>
                <div className='flex justify-between'>
                    <p>Seats: <span className='badge-accent text-white rounded px-3'>{instructor.available_seats}</span></p>
                    <button className='btn bg-cyan-600 btn-sm text-white'>See classes</button>
                </div>
            </div>
        </div >
    );
};

export default instructor;