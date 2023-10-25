import React, { useState } from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    fetch("review.json")
        .then(res => res.json())
        .then(data => setReviews(data))

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='md:m-14'>
            <SectionTitle
                title='Student Testimonial'
                subtitle='Hear What Our Students Have to Say!'
            ></SectionTitle>
            <Slider {...settings}>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </Slider>
        </div>
    );
};

export default Testimonial;