import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';
import { BiAddToQueue, BiSelectMultiple, BiBookAdd } from 'react-icons/bi';
import { GrSelect } from 'react-icons/gr';
import { AiFillHome, AiFillFileAdd, AiOutlineUsergroupAdd, AiOutlineDollarCircle } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdOutlineBookmarkAdded } from 'react-icons/md';


const Dashboard = () => {

    const [isAdmin, ,] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(isAdmin)
    // const role = '';

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-cyan-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-transparent font-semibold text-white p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='manage-class'><MdOutlineManageAccounts className='text-2xl'></MdOutlineManageAccounts>Manage Classes</NavLink></li>
                                <li><NavLink to='manage-user'><AiOutlineUsergroupAdd className='text-2xl'></AiOutlineUsergroupAdd>Manage User</NavLink></li>
                                <li><NavLink to='/'><AiFillHome className='text-2xl'></AiFillHome>Back To Home</NavLink></li>
                            </> :
                            isInstructor ?
                                <>
                                    <li><NavLink to='add-class'><BiAddToQueue className='text-2xl'></BiAddToQueue>Add Class</NavLink></li>
                                    <li><NavLink to='my-class'><MdOutlineBookmarkAdded className='text-2xl'></MdOutlineBookmarkAdded>My Class</NavLink></li>
                                    <li><NavLink to='/'><AiFillHome className='text-2xl'></AiFillHome>Back To Home</NavLink></li>

                                </> :
                                <>
                                    <li><NavLink to='selected-class'><AiFillFileAdd className='text-2xl'></AiFillFileAdd>My Selected Classes</NavLink></li>
                                    <li><NavLink to='enrolled-class'><BiSelectMultiple className='text-2xl'></BiSelectMultiple>My Enrolled Classes</NavLink></li>
                                    <li><NavLink to='payment-history'><AiOutlineDollarCircle className='text-2xl'></AiOutlineDollarCircle>Payment History</NavLink></li>
                                    <li><NavLink to='/'><AiFillHome className='text-2xl'></AiFillHome>Back To Home</NavLink></li>

                                </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;