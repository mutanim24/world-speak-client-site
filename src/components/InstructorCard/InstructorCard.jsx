import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FiMail } from "react-icons/fi"

const InstructorCard = ({ teacher }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (

        <div data-aos="fade-down" className="w-full relative mt-16 bg-gray-300 rounded-xl pt-16 text-center p-6 my-10">
            <div  className="w-48 h-48 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={teacher.instructor_image}
                    alt="Instructor"
                    className="w-full aspect-square object-cover rounded-full object-center"
                />
            </div>
            <div data-aos="fade-up" className="mt-10">
                <header>
                    <h3 className="text-lg md:text-2xl font-bold mb-4">
                        {teacher.instructor_name}
                    </h3>

                </header>
                <span className="text-sm underline flex items-center justify-center gap-3"><FiMail />{teacher.instructor_email}</span>
                {/* Additional instructor information can be added here */}
            </div>
        </div>

        // <div className="overflow-hidden rounded bg-transparent shadow-md shadow-slate-200" data-aos="zoom-in">
        //     {/*  <!-- Image --> */}
        //     <figure>
        //         <img
        //             src={teacher.instructor_image}
        //             alt="card image"
        //             className="aspect-video w-full"
        //         />
        //     </figure>
        //     {/*  <!-- Body--> */}
        //     <div className="p-6">
        //         <header className="mb-4">
        //             <h3 className="text-xl font-medium">
        //                 {teacher.instructor_name}
        //             </h3>
        //             <p className=" text-slate-400">{teacher.instructor_email}</p>
        //         </header>
        //         {/* <p>Available seats: {cls.available_seats}</p> */}
        //     </div>
        //     {/*  <!-- Action base sized basic button --> */}
        //     <div className="flex justify-end p-6 pt-0">
        //         <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-cyan-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-cyan-800">
        //             <span>See Classes!</span>
        //         </button>
        //     </div>
        // </div>
    );
};

export default InstructorCard;




