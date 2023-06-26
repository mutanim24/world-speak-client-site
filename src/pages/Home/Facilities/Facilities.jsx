import React from 'react';
import './Facilities.css'
import { FaLanguage, FaChalkboardTeacher } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiFlexibleLamp } from 'react-icons/gi';

const Facilities = () => {
    return (
        <div className='grid grid-cols-4 gap-4 my-10 px-14'>
            <div className='text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-cyan-100 parent-div'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mb-4'>
                        <FaLanguage className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaLanguage>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold my-3'>Language Diversity</h1>
                        <p>Discover the Joy of Learning Different Languages that Inspire You</p>
                    </div>
                </div>
            </div>
            <div className='text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-cyan-100 parent-div'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mb-4'>
                        <FaChalkboardTeacher className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaChalkboardTeacher>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold my-3'>Expert Instructor</h1>
                        <p>Learn from Seasoned Professionals and Industry Leaders in Language Education</p>
                    </div>
                </div>
            </div>
            <div className='text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-cyan-100 parent-div'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mb-4'>
                        <AiOutlineFundProjectionScreen className='text-[80px] transition-transform duration-300 transform-gpu icon'></AiOutlineFundProjectionScreen>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold my-3'>Interactive Learning</h1>
                        <p>Engage and Make Progress with Immersive Tools and Interactive Resources</p>
                    </div>
                </div>
            </div>
            <div className='text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-cyan-100 parent-div'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mb-4'>
                        <GiFlexibleLamp className='text-[80px] transition-transform duration-300 transform-gpu icon'></GiFlexibleLamp>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold my-3'>Flexible Option</h1>
                        <p>Customize Your Language Journey to Fit Your Busy Schedule and Learning Style</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;