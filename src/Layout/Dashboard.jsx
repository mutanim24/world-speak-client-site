import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';


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
                                <li><NavLink to='manage-class'>Manage Classes</NavLink></li>
                                <li><NavLink to='manage-user'>Manage User</NavLink></li>
                                <li><NavLink to='/'>Back To Home</NavLink></li>
                            </> :
                            isInstructor ?
                                <>
                                    <li><NavLink to='add-class'>Add Class</NavLink></li>
                                    <li><NavLink to='my-class'>My Class</NavLink></li>
                                    <li><NavLink to='/'>Back To Home</NavLink></li>

                                </> :
                                <>
                                    <li><NavLink to='selected-class'>My Selected Classes</NavLink></li>
                                    <li><NavLink to='enrolled-class'>My Enrolled Classes</NavLink></li>
                                    <li><NavLink to='/'>Back To Home</NavLink></li>

                                </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;