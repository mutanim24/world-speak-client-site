import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className='px-14'>
            <SectionTitle
                title='Popular Language Experts'
                subtitle='Discover our Popular Instructors at WorldSpeak'
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-7'>
                {
                    instructors.map(instructor => <Instructor
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;