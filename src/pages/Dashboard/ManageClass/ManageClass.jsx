import React, { useEffect, useState } from 'react';

const ManageClass = () => {
    const [classes, setClasses] = useState([]);
    // TODO: use tan stack query
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full px-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-black text-1xl'>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map(cls => <tr key={cls._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
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