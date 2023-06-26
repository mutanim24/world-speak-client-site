import React from 'react';
import slide1 from '../../../assets/english.jpg'
import slide2 from '../../../assets/banglai.jpg'
import slide3 from '../../../assets/german.jpg'
import { Link } from 'react-router-dom';

const Slider = () => {

    return (
        <div className="carousel h-[500px] w-full relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full px-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-5xl font-bold">Embrace Multilingualism</h1>
                        <p className="text-lg">Immerse yourself in the beauty of languages with WorldSpeak's extensive selection of courses</p>
                        <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full px-10">
                    <a href="#slide1" className="btn btn-circle ">❮</a>
                    <a href="#slide3" className="btn btn-circle ">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-5xl font-bold">Unlock the World's Languages</h1>
                        <p className="text-lg">Discover a diverse range of language courses taught by expert teachers on WorldSpeak</p>
                        <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full px-10">
                    <a href="#slide2" className="btn btn-circle ">❮</a>
                    <a href="#slide1" className="btn btn-circle ">❯</a>
                    <div className="space-y-5 text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-5xl font-bold">Learn Any Language, Anytime</h1>
                        <p className="text-lg">Explore our marketplace of language courses and embark on a journey of global communication</p>
                        <Link to='/classes' className='btn bg-cyan-600 text-white hover:bg-cyan-800'>All Class!</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;