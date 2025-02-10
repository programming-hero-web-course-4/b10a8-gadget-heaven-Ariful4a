// import React from 'react';
// import { FaCartArrowDown } from "react-icons/fa6";
// import { GiSelfLove } from "react-icons/gi";

// const Navbar = () => {
//     return (
//         <div className='max-w-6xl mx-auto'>
//             <div className="navbar shadow-sm">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             <li className='text-base font-bold'><a>Home</a></li>
//                             <li>
//                                 <a>Statistics</a>
//                             </li>
//                             <li><a>Dashbord</a></li>
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">Gadget Heaven</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li className='text-base font-bold'><a>Home</a></li>
//                         <li className='text-base font-bold'><a>Statistics</a></li>
//                         <li className='text-base font-bold'><a>Dashbord</a></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end gap-4">
//                     <a className="btn bg-amber-50 text-black"><FaCartArrowDown></FaCartArrowDown></a>
//                     <a className="btn bg-amber-50 text-black"><GiSelfLove></GiSelfLove></a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;






import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar shadow-sm">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Dashbord" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                    Dashbord
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dashbord" className={({ isActive }) => (isActive ? "text-purple-500 font-bold" : "font-bold")}>
                                Dashbord
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-4">
                    <a className="btn bg-amber-50 text-black">
                        <FaCartArrowDown />
                    </a>
                    <a className="btn bg-amber-50 text-black">
                        <GiSelfLove />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
