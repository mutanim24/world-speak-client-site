import React from 'react';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useLoaderData, useLocation } from 'react-router-dom';

const Feedback = () => {
    const axiosSecure = useAxiosSecure();
    const data = useLoaderData()

    const location = useLocation();
    const stateValue = location.state;
    const id = stateValue._id

    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const fb = form.feedback.value;

        // Send the feedback to the API
        fetch(`http://localhost:5000/insertFeedback/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fb }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire("Good!", "FeedBack has been sent to instructor !", "success");
                }
            });
    };
    return (
        <div className='w-full'>
            <PageBanner
                heading='Give feedback'
            ></PageBanner>
            <form onSubmit={handleFeedback} className='m-6 md:m-14 p-8 rounded shadow-lg'>
                <div>
                    <textarea name='feedback' className="textarea w-full h-60 textarea-info" placeholder="Write feedback........"></textarea>
                </div>
                <input type="submit" className='btn mt-6 text-white bg-cyan-600 w-full' value="send feedback" />
            </form>
        </div>
    );
};

export default Feedback;