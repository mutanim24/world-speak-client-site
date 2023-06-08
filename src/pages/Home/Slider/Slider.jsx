import React from 'react';
import slide1 from '../../../assets/logo.png'

const Slider = () => {

    return (
        <div className="carousel h-[450px] w-full relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold">Slide 1</h1>
                        <p className="text-lg">Description of slide 1</p>
                        <a className="btn btn-primary mt-4">Learn More</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full">
                    <a href="#slide1" className="btn btn-circle ">❮</a>
                    <a href="#slide3" className="btn btn-circle ">❯</a>
                    <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold">Slide 2</h1>
                        <p className="text-lg">Description of slide 2</p>
                        <a className="btn btn-primary mt-4">Learn More</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute flex justify-between items-center w-full h-full">
                    <a href="#slide2" className="btn btn-circle ">❮</a>
                    <a href="#slide1" className="btn btn-circle ">❯</a>
                    <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold">Slide 3</h1>
                        <p className="text-lg">Description of slide 3</p>
                        <a className="btn btn-primary mt-4">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;