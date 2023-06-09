import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const role = '';

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-cyan-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-transparent text-white p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        (role === 'admin') ?
                            <>
                                <li><NavLink to='manage-class'>Manage Classes</NavLink></li>
                                <li><NavLink to='/manage-class'>Manage User</NavLink></li>
                            </> : 
                            (role === 'instructor') ?
                            <>
                                <li><NavLink to='add-class'>Add Class</NavLink></li>
                                <li><NavLink to='/manage-class'>My Class</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to='selected-class'>My Selected Classes</NavLink></li>
                                <li><NavLink to='/manage-class'>My Enrolled Classes</NavLink></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;