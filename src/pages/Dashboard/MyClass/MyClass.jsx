import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { useState } from 'react';
import { FcFeedback } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-class?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [])
    return (
        <div className='w-full px-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map(cls => <tr key={cls._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar rounded-sm">
                                            <div className="mask mask-squircle w-20 h-20">
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
                                    <Link to={`/update-class/${cls._id}`}><button className="btn btn-sm bg-cyan-600 text-white btn-xs">Update</button></Link>
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