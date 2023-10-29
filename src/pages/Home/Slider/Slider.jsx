// import React from 'react';
// import slide1 from '../../../assets/english.jpg'
// import slide2 from '../../../assets/banglai.jpg'
// import slide3 from '../../../assets/german.jpg'
// import { Link } from 'react-router-dom';

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
                            'url(https://motto-jp.com/media/wp-content/uploads/2021/04/AdobeStock_74877484.jpeg)',
                            backgroundSize: "cover",
                            backgroundPosition: "top"
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className='z-50'>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;