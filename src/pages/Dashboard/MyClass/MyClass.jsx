import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { useState } from 'react';
import { FcFeedback } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/my-class?email=${user?.email}`)
            .then(data => setMyClasses(data?.data))
            .catch(err => console.log(err))
    }, [axiosSecure])
    return (
        <div className='w-full px-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-[18px] bg-cyan-200'>

                            <th>#</th>
                            <th>Name</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((cls, index) => <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar rounded-sm">
                                            <div className="mask w-20 h-20">
                                                <img src={cls.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cls.class_name}</div>
                                            <div className="text-sm opacity-50">Total Enrolled: {cls.enrolled_class}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className='btn rounded-full'><FcFeedback className='text-2xl'></FcFeedback></button>
                                </td>
                                <td>{cls.class_status}</td>
                                <th>
                                    <Link to={`/dashboard/my-class/${cls._id}`}><button className="btn btn-sm bg-cyan-600 text-white btn-xs">Update</button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;