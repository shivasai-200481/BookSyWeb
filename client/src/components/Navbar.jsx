import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Login from '../Pages/Login';
import { useAuth } from '../context/AuthContext'; // add at the top
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isAuthenticated, login, logout } = useAuth(); // inside your component
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    }

    const navItems = [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'Books', path: '/Courses' },
        { id: 3, text: 'Contact', path: '/Contacts' },
        { id: 4, text: 'About', path: '/About' },

    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 sticky top-0 z-50 '>

                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navItems.map(({ id, text, path }) => (
                                    <li key={id} >
                                        <NavLink to={path}>

                                            {text}


                                        </NavLink>

                                    </li>
                                ))}

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Booksy</a>
                    </div>
                    <div className='navbar-end space-x-3 '>

                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems.map(({ id, text, path }) => (
                                    <li key={id} >


                                        <NavLink to={path} >
                                            {text}

                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Search Bar */}
                        <div className='block md:block w-24 md:w-full ' >
                            <label className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 focus-within:ring-0 focus-within:border-transparent">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={handleSearch}
                                    required
                                    placeholder="Search"
                                    className='grow  outline-none '
                                />
                            </label>
                        </div>

                        {/* Login Button */}
                        <div className="">
                            {isAuthenticated ? (
                                <NavLink to='/logout' >

                                    <button
                                        onClick={() => {
                                            logout();
                                            navigate('/');
                                        }}
                                        className="btn bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-md duration-300 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </NavLink>
                                
                            ) : (
                                <NavLink
                                    to="/login"
                                    className="btn bg-black text-white hover:bg-slate-600 px-3 py-2 rounded-md duration-300 cursor-pointer"
                                >
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Navbar