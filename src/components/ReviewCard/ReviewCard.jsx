import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ReviewCard = ({ review }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='p-8 border-2 mx-5 h-96' data-aos="zoom-out-up">
            <img className='h-28 w-28 rounded-full mx-auto' src={review.image} alt="" />
            <div className='text-center mt-4'>
                <h3 className='text-2xl font-bold'>{review.name}</h3>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;