import React from 'react';
import useEnrolled from '../../../hook/useEnrolled';

const EnrolledClass = () => {
    const [enrolled] = useEnrolled();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-[18px] bg-cyan-200'>
                            <th>#</th>
                            <th>Class</th>
                            <th>TranactionId</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((cls, index) => <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded w-20 h-20">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[18px]">{cls.className}</div>
                                            <div className="text-sm opacity-50">By {cls.InstructorName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.transactionId}</td>
                                <td>${cls.price}</td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;