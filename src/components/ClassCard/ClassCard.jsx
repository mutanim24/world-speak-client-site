import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ClassCard = ({ cls }) => {
    const axiosSecure = useAxiosSecure();

    const handleSelectClass = cls => {
        axiosSecure.post('/select-class', cls)
            .then(data => {
                console.log(data.data.insertedId)
                if (data.data.insertedId) {
                    Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
        })
            .catch(err => console.log(err))
    }
    return (
        <div key={cls._id} className='shadow-lg relative'>
            <img src={cls.class_image} alt="" />
            <p className='absolute top-5 right-5 bg-black px-2 rounded font-bold text-white'>${cls.price}</p>
            <div className='p-5 space-y-3'>
                <h2 className='font-bold text-[20px]'>{cls.class_name}</h2>
                <h4 className='text-[18px] font-semibold'>Instructor: {cls.instructor_name}</h4>
                <div className='flex items-center justify-between'>
                    <p>Available seats: {cls.available_seats}</p>
                    <button onClick={() => handleSelectClass(cls)} className='btn btn-sm bg-cyan-600 text-white'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;