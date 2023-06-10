import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useData from "../../../hook/useData";

const Classes = () => {
    const [data] = useData()
    
    return (
        <div className='px-14'>
            <SectionTitle
                title='Our Popular Language Classes'
                subtitle='Discover the Most Enrolled Classes at WorldSpeak'
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-6 my-10'>
                {
                    data.map(cls => <div key={cls._id} className='shadow-lg relative'>
                        <img src={cls.class_image} alt="" />
                        <p className='absolute top-5 right-5 bg-black px-2 rounded font-bold text-white'>${cls.price}</p>
                        <div className='p-5 space-y-3'>
                            <h2 className='font-bold text-[20px]'>{cls.class_name}</h2>
                            <h4 className='text-[18px] font-semibold'>Instructor: {cls.instructor_name}</h4>
                            <div className='flex items-center justify-between'>
                                <p>Available seats: {cls.available_seats}</p>
                                <button className='btn btn-sm bg-cyan-600 text-white'>Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;