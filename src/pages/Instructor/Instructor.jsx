import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    // TODO: use tan stack query
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <PageBanner
                heading='our instructors'
            ></PageBanner>
            <div className='grid grid-cols-3 gap-6 my-10 px-14'>
                {
                    instructors.map(teacher => <div key={teacher._id} className='shadow-lg'>
                        <img src={teacher.instructor_image} alt="" />
                        <div className='p-5 space-y-3'>
                            <h2 className='font-bold text-3xl'>{teacher.instructor_name}</h2>
                            <h4 className='text-1xl font-semibold'>Email: {teacher.instructor_email}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;