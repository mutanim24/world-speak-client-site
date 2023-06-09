
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                classes.map(cls => <div key={cls._id} className='shadow-lg relative'>
                    <img src={cls.class_image} alt="" />
                    <p className='absolute top-5 right-5 bg-black px-2 rounded font-bold text-white'>${cls.price}</p>
                    <div className='p-5'>
                        <h2 className='font-semibold text-3xl'>{cls.class_name}</h2>
                        <h4>{cls.instructor_name}</h4>
                        <div className='flex items-center justify-between'>
                            <p>{cls.available_seats}</p>
                            <button className='btn btn-sm bg-cyan-600 text-white'>Select</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllClasses;