import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import useSelectedClass from '../../../hook/useSelectedClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    // const { user } = useContext(AuthContext);
    // const axiosSecure = useAxiosSecure();

    const [selectedClass, refetch] = useSelectedClass();

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select-class/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }

    // axiosSecure(`/select-class?email=${user?.email}`)
    //     .then(data => {
    //         setSelectedClass(data.data)
    //     })
    //     .catch(err => console.log(err))

    // const handleDelete = async (id) => {
    //     const { data = [], refetch } = useQuery({
    //         queryKey: ['data'],
    //         queryFn: async () => {
    //             const res = await fetch(`http://localhost:5000/select-class/${id}`, {
    //                 method: 'DELETE'
    //             });
    //             return res.json();
    //         }
    //     });

    //     // Call the refetch function to update the data after deletion
    //     await refetch();
    // };

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
                                <Link to="/dashboard/payment" state={cls}><button className='btn btn-warning btn-sm'>Pay</button></Link>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;