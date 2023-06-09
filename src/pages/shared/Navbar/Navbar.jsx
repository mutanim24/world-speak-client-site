import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then(() => [])
        .catch(err => console.log(err.message))
    }

    const menuBar = <>
        <li className='uppercase font-bold'><NavLink className={({ isActive }) => isActive ? 'rounded-none font-bold border-b-2 border-cyan-600 mb-0' : ''} to='/'>Home</NavLink></li>
        <li className='uppercase font-bold'><NavLink className={({ isActive }) => isActive ? 'rounded-none font-bold border-b-2 border-cyan-600 mb-0' : ''} to='/all-toys'>Instructors</NavLink></li>
        <li className='uppercase font-bold'><NavLink className={({ isActive }) => isActive ? 'rounded-none font-bold border-b-2 border-cyan-600 mb-0' : ''} to='/classes'>Classes</NavLink></li>
        <li className='uppercase font-bold'><NavLink className={({ isActive }) => isActive ? 'rounded-none font-bold border-b-2 border-cyan-600 mb-0' : ''} to='/all-toys'>Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <Link to='/' className='flex gap-1 items-center'>
                    <h2 className='font-bold text-2xl hidden md:block'>WorldSpeak</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="avatar mr-4">
                            <div className="w-12 rounded-full">
                                <img title={user.displayName} src={user.photoURL} />
                            </div>
                        </div>
                        <button onClick={handleLogout} className='btn text-white bg-cyan-600'>Logout</button>
                    </> :
                    <Link to='/login'><button className='btn text-white bg-cyan-600'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;