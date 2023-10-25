import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useData from '../../../hook/useData';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';

const Instructors = () => {
    const [data] = useData();
    return (
        <div className='px-6 md:px-14'>
            <SectionTitle
                title='Language Experts'
                subtitle='Discover our Popular Instructors at WorldSpeak'
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-7'>
                {
                    data.slice(0, 6).map(instructor => <InstructorCard
                        key={instructor._id}
                        teacher={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;