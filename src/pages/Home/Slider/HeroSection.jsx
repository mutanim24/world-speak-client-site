import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";

const HeroSection = () => {
    return (
        <Swiper
            grabCursor
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 6000,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-screen bg-gray-200">
                    <div className="w-full mx-auto p-6 rounded-xl bg-neutral/5">
                        <img
                            src='https://cutewallpaper.org/21/windows-10-4k-backgrounds/Original-Windows-10-Home-Wallpaper-1920x1080-.jpg'
                            alt=""
                            className="w-full aspect-square object-cover object-center"
                        />
                    </div>
                    <div className="space-y-8 px-4 md:px-0">
                        <h1 className="font-extrabold text-xl  md:text-4xl">
                            <Fade cascade damping={0.1} className="inline">
                                The Art of Portrait Photography
                            </Fade>
                        </h1>
                        <p className="md:text-lg">
                            Mastering the Craft of Portraiture and Unleashing the Power of Human Connection
                        </p>
                        <Link
                            to="/allclasses"
                            className="btn bg-green-600 text-white md:btn-lg btn-gradient rounded-full hover:text-black"
                        >
                            Explore Classes
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            {/* Repeat the same structure for other slides */}
        </Swiper>
    );
};

export default HeroSection;
