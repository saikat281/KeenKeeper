import React from 'react';
import errorImg from '../../assets/404 Error - Page Not Found.jpg'

const ErrorPage = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;