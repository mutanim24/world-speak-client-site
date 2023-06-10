import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const SelectedClass = () => {
    const [selectedClass, setSelectedClass] = useState([])
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    axiosSecure(`/select-class?email=${user?.email}`)
        .then(data => {
            setSelectedClass(data.data)
        })
        .catch(err => console.log(err))

    const handleDelete = (id) => {
        const { data: selectClass = [], refetch } = useQuery(["users"], async () => {
            const res = await axiosSecure.delete(`/select-class/${id}`)
            console.log(res.data);
            return res.data;
        })
    }

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
                        <th>Delete</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        selectedClass.map((cls, index) => <tr key={cls._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask rounded-sm w-24 h-24">
                                            <img src={cls.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[19px]">{cls.class_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>-By {cls.instructor_name}</td>
                            <td>${cls.price}</td>
                            <td>
                                <button onClick={() => handleDelete(cls._id)} className="btn hover:text-cyan-600 bg-cyan-600 text-white btn-sm">Delete</button>
                            </td>
                            <th>
                                <button className="btn hover:text-cyan-600 bg-cyan-600 text-white btn-sm">Pay</button>

                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;