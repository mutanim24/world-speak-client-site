import banner from '../../../assets/banner.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
    
        <div className='h-[600px] relative'>
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