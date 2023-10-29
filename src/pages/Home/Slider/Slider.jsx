// import React from 'react';
// import slide1 from '../../../assets/english.jpg'
// import slide2 from '../../../assets/banglai.jpg'
// import slide3 from '../../../assets/german.jpg'
// import { Link } from 'react-router-dom';

import banner from '../../../assets/banner.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
        // <div className="carousel h-[350px] md:h-[500px] w-full relative">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src={slide1} className="w-full" />
        //         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        //         <div className="absolute flex justify-between items-center w-full h-full md:px-10">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //             <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        //                 <h1 className="text-3xl md:text-5xl font-bold">Embrace Multilingualism</h1>
        //                 <p className="text-lg">Immerse yourself in the beauty of languages with WorldSpeak's extensive selection of courses</p>
        //                 <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src={slide2} className="w-full" />
        //         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        //         <div className="absolute flex justify-between items-center w-full h-full md:px-10">
        //             <a href="#slide1" className="btn btn-circle ">❮</a>
        //             <a href="#slide3" className="btn btn-circle ">❯</a>
        //             <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        //                 <h1 className="text-3xl md:text-5xl font-bold">Unlock the World's Languages</h1>
        //                 <p className="text-lg">Discover a diverse range of language courses taught by expert teachers on WorldSpeak</p>
        //                 <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src={slide3} className="w-full" />
        //         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        //         <div className="absolute flex justify-between items-center w-full h-full md:px-10">
        //             <a href="#slide2" className="btn btn-circle ">❮</a>
        //             <a href="#slide1" className="btn btn-circle ">❯</a>
        //             <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        //                 <h1 className="text-3xl md:text-5xl font-bold">Learn Any Language, Anytime</h1>
        //                 <p className="text-lg">Explore our marketplace of language courses and embark on a journey of global communication</p>
        //                 <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='h-[500px] relative'>
            {/* <div className='absolute bg-black w-full h-[500px] z-10 opacity-50'></div> */}
            <Swiper

                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            `url(${banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top"
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className=''>
                    <div className="title mt-12 md:mt-28" data-swiper-parallax="-300">
                        <h1 className='text-3xl md:text-5xl font-bold'> Speak the Language of Success</h1>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <h3 className='text-xl md:text-2xl font-semibold my-4'>Your Gateway to Multilingual Excellence</h3>
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Join WorldSpeak and become a confident communicator. Our immersive courses are designed to empower you in every conversation, business meeting, and adventure abroad. Start speaking success!
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title mt-12 md:mt-28" data-swiper-parallax="-300">
                        <h1 className='text-3xl md:text-5xl font-bold'> Discover the Magic of Multilingualism</h1>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <h3 className='text-xl md:text-2xl font-semibold my-4'>Where Every Word Sparks a Connection</h3>
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            WorldSpeak is your passport to a world united by language. Dive into our engaging courses and watch as your ability to connect, understand, and grow flourishes. Embrace the magic of speaking in many tongues!
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title mt-12 md:mt-28" data-swiper-parallax="-300">
                        <h1 className='text-3xl md:text-5xl font-bold'> Unlock a World of Opportunities</h1>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <h3 className='text-xl md:text-2xl font-semibold my-4'>Learn Languages with WorldSpeak</h3>
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Embark on a journey of language mastery with WorldSpeak. Elevate your global communication skills and open doors to endless possibilities. Start your adventure today!
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;