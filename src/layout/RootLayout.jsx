import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* dynamic */}
            <Outlet></Outlet>

            <h1>Footer</h1>


            <Toaster></Toaster>
        </div>
    );
};

export default RootLayout;