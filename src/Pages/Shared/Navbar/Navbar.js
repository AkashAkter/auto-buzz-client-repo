import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>
        <li className='hover:border-b-2 hover:border-[#ff4605]'><Link to='/'>Home</Link></li>
        <li className='hover:border-b-2 hover:border-[#ff4605]'><Link to='/about'>About Us</Link></li>
        <li className='hover:border-b-2 hover:border-[#ff4605]'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.email
                ?
                <li className='hover:border-b-2 hover:border-[#ff4605]'><Link to='/Dashboard'>Dashboard</Link></li>
                : <></>
        }


    </React.Fragment>
    return (
        <div>

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost hover:border hover:border-[#ff4605] hover:bg-white normal-case font-extrabold  text-2xl">Auto <span className='text-[#ff4605]'>Buzz</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.uid ?
                            <Link to='/login'><button onClick={handleLogOut} className="btn btn-xs btn-outline hover:bg-[#ff4605]">Log Out</button></Link>
                            :
                            <Link to='/login'><button className="btn btn-outline hover:bg-[#ff4605]">Login</button></Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;