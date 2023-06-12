import React, { useContext } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';
import useInstructor from '../../hook/useInstructor';

const ClassCard = ({ cls }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { class_name, class_image, instructor_name, price } = cls;
    const axiosSecure = useAxiosSecure();

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor();

    const handleSelectClass = cls => {
        if (user?.email) {
            const newClass = { userEmail: user?.email, class_name, class_image, instructor_name, price }
            axiosSecure.post('/select-class', newClass)
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
        else {
            Swal.fire({
                title: 'You are not login?',
                text: "Login before select class!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Do you want to login?'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <div key={cls._id} className='shadow-lg relative'>
            <img src={cls.class_image} alt="" />
            <p className='absolute top-5 right-5 bg-black px-2 rounded font-bold text-white'>${cls.price}</p>
            <div className='p-5 space-y-2'>
                <h2 className='font-bold text-[20px]'>{cls.class_name}</h2>
                <h4 className='text-[18px] font-semibold'>Instructor: {cls.instructor_name}</h4>
                <hr />
                <p>Enrolled: {cls.enrolled_class}</p>
                <div className='flex items-center justify-between'>
                    <p>Available seats: {cls.available_seats}</p>
                    <button disabled={isAdmin || isInstructor} onClick={() => handleSelectClass(cls)} className='btn btn-sm bg-cyan-600 text-white'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;