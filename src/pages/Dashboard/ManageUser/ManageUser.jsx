import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useUsers from '../../../hook/useUsers';

const ManageUser = () => {
    const [users, refetch] = useUsers()
    // const [dbUsers, setDbUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setDbUsers(data))
    // }, [])

    const handleRole = (id, position) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ role: position })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Created an ${position} successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    const handleAdmin = id => {
        handleRole(id, 'admin')
    }

    const handleInstructor = id => {
        handleRole(id, 'instructor')
    }

    return (
        <div className="overflow-x-auto w-full px-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-black text-[18px] bg-cyan-200'>
                        <th>#</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask rounded-sm w-28 h-28">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <th>
                                {
                                    user.role === 'instructor' ?
                                        'instructor' :
                                        <button onClick={() => handleInstructor(user._id)} className="btn hover:text-cyan-600 bg-cyan-600 text-white  btn-xs">Make Instructor</button>
                                }
                            </th>
                            <th>
                                {
                                    user.role === 'admin' ?
                                        'admin' :
                                        <button onClick={() => handleAdmin(user._id)} className="btn hover:text-cyan-600 bg-cyan-600 text-white  btn-xs">Make Admin</button>
                                }
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ManageUser;