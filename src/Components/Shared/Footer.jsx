import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import fbImg from '../../assets/facebook.png'
import instaImg from '../../assets/instagram.png'
import tweeterImg from '../../assets/twitter.png'

const Footer = () => {
    return (
        <footer className=' bg-green-900 text-white text-center  p-16 mt-20'>
            <div className='container mx-auto flex flex-col justify-between items-between'>
                <div className='space-y-3'>
                    <h1 className='text-6xl font-bold'>KeenKeeper</h1>
                    <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p>Social Links</p>
                    <div className='flex justify-center gap-4'>
                        <img src={fbImg} alt="" />
                        <img src={instaImg} alt="" />
                        <img src={tweeterImg} alt="" />

                    </div>
                </div>

                <div>
                    <div className="divider"></div>
                    <div className='flex flex-col  md:flex-row gap-3 md:gap-0 justify-between'>
                        <div>
                            &copy; 2026 KeenKeeper. All rights reserved.
                        </div>
                        <div className='flex justify-around'>
                            <p>privacy policy</p>
                            <p>terms of cook</p>
                            <p>cookies</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;