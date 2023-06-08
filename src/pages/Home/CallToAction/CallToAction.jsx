import React from 'react';
import { AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineHeadsetMic } from 'react-icons/md';
import { Link } from 'react-router-dom';


const CallToAction = () => {
    return (
        <div className='bg-cyan-700 my-5 p-14 grid grid-cols-3'>
            <div className='text-white space-y-3'>
                <AiOutlineMail className='text-5xl'></AiOutlineMail>
                <Link>
                    <h1 className='text-4xl font-semibold hover:text-yellow-600'>Get Quote</h1>
                </Link>
                <p>Find the price of your ideal course</p>
            </div>
            <div className='text-white space-y-3'>
                <MdOutlineHeadsetMic className='text-5xl'></MdOutlineHeadsetMic>
                <Link>
                    <h1 className='text-4xl font-semibold hover:text-yellow-600'>Ask a question</h1>
                </Link>
                <p>Not sure what you need? Ask our Advisors</p>
            </div>
            <div className='text-white space-y-3'>
                <AiOutlineUserAdd className='text-5xl'></AiOutlineUserAdd>
                <Link>
                    <h1 className='text-4xl font-semibold hover:text-yellow-600'>Join today</h1>
                </Link>
                <p>ing Up Now for a Free 30 Day Tria</p>
            </div>
        </div>
    );
};

export default CallToAction;