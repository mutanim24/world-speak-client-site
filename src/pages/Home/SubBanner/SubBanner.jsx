import React from 'react';
import banner2 from '../../../assets/banner2.jpg'
import { Link } from 'react-router-dom';

const SubBanner = () => {
    return (
        <section className="relative my-8 text-center">
            <div className="h-96 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-xl font-semibold">STARTING ONLINE LEARNING</h2>
                    <h1 className="text-4xl font-bold my-5">ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES</h1>
                    <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>Get Start Now!!</Link>
                </div>
            </div>
        </section>
    );
};

export default SubBanner;