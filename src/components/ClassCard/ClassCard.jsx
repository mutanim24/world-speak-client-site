import React, { useContext } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';
import useInstructor from '../../hook/useInstructor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



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

    // AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


    return (
        <div className="overflow-hidden rounded bg-transparent shadow-md shadow-slate-200" data-aos="zoom-in">
            {/*  <!-- Image --> */}
            <figure>
                <img
                    src={cls.class_image}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
                <header className="mb-4">
                    <h3 className="text-xl font-medium">
                    {cls.class_name}
                    </h3>
                    <p className=" text-slate-400">${cls.price}</p>
                </header>
                <p>By {cls.instructor_name}</p>
                <p>Available seats: {cls.available_seats}</p>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-6 pt-0">
                <button disabled={isAdmin || isInstructor} onClick={() => handleSelectClass(cls)} className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-cyan-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-cyan-800">
                    <span>Select now!</span>
                </button>
            </div>
        </div>
    );
};

export default ClassCard;