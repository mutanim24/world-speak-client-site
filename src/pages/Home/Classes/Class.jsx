import React from 'react';
import engBg from '../../../assets/english.jpg'
import { FaArrowRight, FaUserGraduate } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';

const Class = ({ cls }) => {
    return (
        <div className='relative'>
            <img src={engBg} alt="" />
            <div className='absolute top-0 left-0 text-white m-8 bg-black bg-opacity-40 p-3 w-8/12 h-4/12'>
                <h4 className='font-bold text-3xl'>{cls.language}</h4>
                <p>-{cls.teacherName}</p>
                <div className='p-3 grid grid-cols-2'>
                    <div className='flex items-center gap-2'><FaUserGraduate></FaUserGraduate> {cls.enrolledStudents}</div>
                    <div className='flex items-center gap-2'><AiOutlineDollar></AiOutlineDollar> {cls.price}</div>
                </div>
                <button className='text-sm flex items-center gap-2 hover:gap-3 underline'>Read more <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Class;