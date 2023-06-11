import React from 'react';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const Feedback = () => {
    const axiosSecure = useAxiosSecure();
    const data = useLoaderData()
    console.log(data)
    const handleFeedback = event => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        
        axiosSecure.patch('/classes')
            .then(data => {
                console.log(data)
                if (data.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Feedback Send Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => console.log(err))
    }
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