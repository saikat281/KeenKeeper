import React from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { IoIosStats } from 'react-icons/io';
import { MdOutlineTimeline } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-3 md:gap-0  justify-between items-center mt-6 '>
            <div>
                <p className='text-4xl font-bold'>Keen<span className='text-green-800'>Keeper</span></p>
            </div>

            <div className='flex gap-3'>
                <NavLink to={"/"} className={({ isActive }) => `flex items-center  px-3 rounded-md gap-1 ${isActive ? "text-white bg-green-900 transition duration-300" : ""}`}>
                    <GrHomeRounded />
                    Home
                </NavLink>
                <NavLink to={"/timeline"} className={({ isActive }) => `flex items-center  px-3 rounded-md gap-1 ${isActive ? "text-white bg-green-900 transition duration-300" : ""}`}>
                    <MdOutlineTimeline />
                    timeline
                </NavLink>
                <NavLink to={"/stats"} className={({ isActive }) => `flex items-center  px-3 rounded-md gap-1 ${isActive ? "text-white bg-green-900 transition duration-300" : ""}`}>
                    <IoIosStats />
                    stats
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;