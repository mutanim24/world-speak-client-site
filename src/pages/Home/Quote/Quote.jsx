import React from 'react';
import CEOPhoto from '../../../assets/tanim.png'
import signature from '../../../assets/signature (2).png'

const Quote = () => {
    return (
        <div className='m-5 my-14 md:my-0 md:mx-20 md:my-24 shadow-2xl md:flex gap-10 bg-gray-200 items-center p-10'>
            <div className='md:p-4 md:w-7/12'>
                <h1 className='text-3xl md:text-4xl font-bold'>Unlock a World of Opportunities with WorldSpeak</h1>
                <p className='my-5'>❝WorldSpeak offers a wide range of interactive language courses led by experienced instructors. With tailored learning paths, cultural insights, and practical application, learners gain practical skills for real-world communication. Flexible scheduling, personalized feedback, and a supportive community make WorldSpeak an ideal choice for language enthusiasts of all levels. Start your language journey with us today!❞</p>
                <div className='mt-12'>
                    <img className='w-20' src={signature} alt="" />
                    <h3 className='text-2xl font-semibold'>Tanim Ahmed</h3>
                    <p>CEO Of WorldSpeak</p>
                </div>
            </div>
            <img className='w-5/12' src={CEOPhoto} alt="" />
        </div>
    );
};

export default Quote;