import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import InstructorCard from '../../components/InstructorCard/InstructorCard';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    // TODO: use tan stack query
    useEffect(() => {
        fetch('https://world-speak-server-site.vercel.app/classes')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className='space-y-20'>
            <PageBanner
                heading='our instructors'
            ></PageBanner>
            <div className='grid md:grid-cols-4 gap-6 my-10 px-6 md:px-14'>
                {
                    instructors.map(teacher => <InstructorCard
                        key={teacher._id}
                        teacher={teacher}
                    ></InstructorCard>)
                    // <div key={teacher._id} className='shadow-lg'>
                    //     <img src={teacher.instructor_image} alt="" />
                    //     <div className='p-5 space-y-3'> added coment
                    //         <h2 className='font-bold text-3xl'>{teacher.instructor_name}</h2>
                    //         <h4 className='text-1xl font-semibold'>Email: {teacher.instructor_email}</h4>
                    //     </div>
                    // </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;