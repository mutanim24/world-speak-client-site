import React from 'react';
import useEnrolled from '../../../hook/useEnrolled';

const PaymentHistory = () => {
    const [enrolled] = useEnrolled();
    console.log(enrolled)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-black text-[18px] bg-cyan-200'>
                        <th>#</th>
                        <th>Class</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolled.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask rounded w-20 h-20">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[18px]">{item.className}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{Date(item.date).toLocaleString(undefined, { year: "numeric", month: "long", day: "numeric" })}</td>
                            <td>${item.price}</td>
                            <td>!Successful</td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default PaymentHistory;