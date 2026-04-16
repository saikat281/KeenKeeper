import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='  pt-30'>
            <div className='container mx-auto p-10 space-y-6'>
                <div className='text-center space-y-3'>
                    <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                    <button className='btn bg-green-900 text-white border-none'><FaPlus /> Add a Friend</button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='bg-green-50 w-full rounded-lg flex flex-col justify-center items-center px-10 py-7 '>
                        <h1 className='text-3xl text-green-900 font-semibold'>10</h1>
                        <p className='text-gray-700 text-2xl'>Total Friends</p>
                    </div>
                    <div className='bg-green-50 w-full h-[200px] rounded-lg flex flex-col justify-center items-center px-10 py-7 '>
                        <h1 className='text-3xl text-green-900 font-semibold'>3</h1>
                        <p className='text-gray-700 text-2xl'>On Track</p>
                    </div>
                    <div className='bg-green-50 w-full h-[200px] rounded-lg flex flex-col justify-center items-center px-10 py-7 '>
                        <h1 className='text-3xl text-green-900 font-semibold'>6</h1>
                        <p className='text-gray-700 text-2xl'>Need Attention</p>
                    </div>
                    <div className='bg-green-50 w-full h-[200px] rounded-lg flex flex-col justify-center items-center px-10 py-7 '>
                        <h1 className='text-3xl text-green-900 font-semibold'>12</h1>
                        <p className='text-gray-700 text-2xl'>Interactions This Month</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;