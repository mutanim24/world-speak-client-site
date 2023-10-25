import React from 'react';

const ReviewCard = ({ review }) => {
    
    return (
        <div className='p-8 border-2 mx-5 h-96'>
            <img className='h-28 w-28 rounded-full mx-auto' src={review.image} alt="" />
            <div className='text-center mt-4'>
                <h3 className='text-2xl font-bold'>{review.name}</h3>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;