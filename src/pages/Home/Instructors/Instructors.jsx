import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useData from '../../../hook/useData';

const Instructors = () => {
    const [data] = useData();
    return (
        <div className='px-14'>
            <SectionTitle
                title='Popular Language Experts'
                subtitle='Discover our Popular Instructors at WorldSpeak'
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-7'>
                {
                    data.map(instructor => <Instructor
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;