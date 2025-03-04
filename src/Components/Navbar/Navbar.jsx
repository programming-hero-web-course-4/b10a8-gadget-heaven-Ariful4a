import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { getStoredProductList } from '../../Utility/adToLo';

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => {
        const storedProducts = getStoredProductList();
        setCartCount(storedProducts.length);
    };

    useEffect(() => {
        updateCartCount(); 
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            updateCartCount(); 
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

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
                            <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500 font-bold" : "font-bold")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "text-red-500 font-bold" : "font-bold")}>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dashbord" className={({ isActive }) => (isActive ? "text-red-500 font-bold" : "font-bold")}>
                                Dashbord
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-4">
                    <NavLink to="/Dashbord" className="btn bg-amber-50 text-black relative">
                        <FaCartArrowDown />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartCount}
                            </span>
                        )}
                    </NavLink>
                    <a className="btn bg-amber-50 text-black">
                        <GiSelfLove />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
