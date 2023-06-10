import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageClass = () => {
    const [classes, setClasses] = useState([]);
    const axiosSecure = useAxiosSecure();
    // TODO: use tan stack query
    useEffect(() => {
        axiosSecure('/classes')
            .then(data => setClasses(data.data))
    }, [])
    return (
        <div className="overflow-x-auto w-full px-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-black text-[18px] bg-cyan-200'>
                        <th>#</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((cls, index) => <tr key={cls._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask  w-20 h-20">
                                            <img src={cls.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cls.class_name}</div>
                                        <div className="text-sm opacity-50">Seats: {cls.available_seats}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {cls.instructor_name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{cls.instructor_email}</span>
                            </td>
                            <td>${cls.price}</td>
                            <td>{cls.class_status}</td>
                            <th>
                                <button className="btn hover:text-cyan-600 w-full bg-cyan-600 text-white btn-xs">Approve</button>
                                <br />
                                <button className="btn hover:text-cyan-600 w-full bg-cyan-600 text-white btn-xs">Deny</button>
                                <br />
                                <button className="btn hover:text-cyan-600 w-full bg-cyan-600 text-white btn-xs">Feedback</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;