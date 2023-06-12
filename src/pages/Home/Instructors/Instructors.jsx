import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useData from '../../../hook/useData';

const Instructors = () => {
    const [data] = useData();
    return (
        <div className='px-6 md:px-14'>
            <SectionTitle
                title='Popular Language Experts'
                subtitle='Discover our Popular Instructors at WorldSpeak'
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    data.slice(0, 6).map(instructor => <Instructor
                        instructor={instructor}
                        key={instructor._id}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;