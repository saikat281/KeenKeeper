import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* dynamic */}
            <Outlet></Outlet>

            <Footer></Footer>


            <Toaster></Toaster>
        </div>
    );
};

export default RootLayout;