import React from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { IoIosStats } from 'react-icons/io';
import { MdOutlineTimeline } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div>
                <p className='text-4xl font-bold'>Keen<span className='text-green-800'>Keeper</span></p>
            </div>

            <div className='flex gap-3'>
                <NavLink to={"/"} className={({isActive}) => `flex items-center py-1 px-2 rounded-md gap-1 ${isActive ? "text-white bg-green-900" : ""}` }>
                    <GrHomeRounded />
                    Home
                </NavLink>
                <NavLink to={"/timeline"} className={({isActive}) => `flex items-center py-1 px-2 rounded-md gap-1 ${isActive ? "text-white bg-green-900" : ""}` }>
                    <MdOutlineTimeline />
                    timeline
                </NavLink>
                <NavLink to={"/stats"} className={({isActive}) => `flex items-center py-1 px-2 rounded-md gap-1 ${isActive ? "text-white bg-green-900" : ""}` }>
                    <IoIosStats />
                    stats
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;