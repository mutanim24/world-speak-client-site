import React, { useEffect, useState } from 'react';

const ManageUser = () => {
    const [dbUsers, setDbUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setDbUsers(data))
    }, [])
    console.log(dbUsers)
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        dbUsers.map((user, index) => <tr key={user._id}>
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
                                <button className="btn hover:text-cyan-600 bg-cyan-600 text-white btn-xs">Make Instructor</button>
                                <button className="btn hover:text-cyan-600 bg-cyan-600 text-white btn-xs">Make Admin</button>

                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;