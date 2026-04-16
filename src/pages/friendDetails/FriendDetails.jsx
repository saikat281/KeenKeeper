import React, { useContext } from 'react';
import { useParams } from 'react-router';
import FriendsHook from '../../hooks/FriendsHook';
import { BounceLoader } from 'react-spinners';
import { MdOutlineSnooze } from 'react-icons/md';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { InstallContextTimeline } from '../../context/TimelineContext';
import toast from 'react-hot-toast';

const FriendDetails = () => {
    const { id } = useParams();
    //console.log(id);
    const { friends, loading } = FriendsHook()

    const expected = friends.find(friend => friend.id == id);

    const handleStatus = (status) => {
        if (status === "overdue") return `bg-red-500 px-4 py-1  rounded-xl text-white font-light rounded-md`
        else if (status === "almost due") return `bg-amber-500 px-4 py-1  rounded-xl text-white font-light rounded-md`
        return `bg-green-600 px-4 py-1  rounded-xl text-white font-light rounded-md`
    }

    const { timeline, setTimeline } = useContext(InstallContextTimeline)
    const handleCheckIn = (status) => {

        const checkInData = {
            status: status,
            name: expected.name,
            date: new Date().toLocaleDateString()
        };
        setTimeline([...timeline, checkInData]);
        toast.success(`${status} with ${expected.name}!`);
    }
    //console.log(timeline);
    return (

        <div>
            {loading ? <div className='h-[100px] flex justify-center items-center'> <BounceLoader color="#244D3F" /> </div> :

                <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-6 mt-20 '>
                    {/* 1 */}
                    <div className='col-span-1   space-y-3 space-y-3 text-center flex flex-col justify-between'>
                        <div className='shadow-sm p-3 space-y-3'>
                            <div className='w-full  flex justify-center'>
                                <img className='bg-green-900 w-auto h-[100px] rounded-full ' src={expected.picture} alt={expected.name} />
                            </div>

                            <h1 className='font-semibold'>{expected.name}</h1>
                            <a className={`${handleStatus(expected.status)}`} href="">{expected.status}</a>
                            <div className='flex justify-center items-center gap-3 mt-2'>
                                {
                                    expected.tags.map((tag, idx) => {
                                        return <p key={idx} className='bg-green-200 px-2 py-1 rounded-xl uppercase text-[14px] text-gray-800 font-light w-max'>{tag}</p>
                                    })
                                }
                            </div>
                            <p className='italic text-[14px] text-gray-700'>{expected.bio}</p>
                            <p className='text-gray-700'>preffered: Email</p>
                        </div>
                        <div className='space-y-2'>
                            <button className='flex justify-center items-center w-full p-6 shadow-sm gap-1 cursor-pointer'>
                                <MdOutlineSnooze />   Snooze: 2 Weeks
                            </button>
                            <button className='flex justify-center items-center w-full p-6 shadow-sm gap-1 cursor-pointer'>
                                <FaArchive />   Archive
                            </button>
                            <button className='flex justify-center items-center w-full p-6 shadow-sm text-red-500 gap-1 cursor-pointer'>
                                <RiDeleteBin6Line />   Delete
                            </button>
                        </div>



                    </div>
                    {/* 2 */}
                    <div className='col-span-2 space-y-4'>
                        <div className='flex justify-between items-center gap-3 '>
                            <div className='shadow text-center py-8 px-10 rounded-lg'>
                                <h1 className='font-semibold text-green-900 text-3xl'>{expected.days_since_contact}</h1>
                                <p className='text-gray-600 font-semibold'>Days since Contact</p>
                            </div>
                            <div className='shadow text-center py-8 px-10 rounded-lg'>
                                <h1 className='font-semibold text-green-900 text-3xl'>{expected.goal}</h1>
                                <p className='text-gray-600 font-semibold'>Goal (Days)</p>
                            </div>
                            <div className='shadow text-center py-8 px-10 rounded-lg'>
                                <h1 className='font-semibold text-green-900 text-3xl'>{expected.next_due_date}</h1>
                                <p className='text-gray-600 font-semibold'>Next Due</p>
                            </div>
                        </div>
                        <div className='shadow p-4 rounded-lg space-y-2'>
                            <div className='w-full  flex justify-between items-center'>
                                <p className='text-green-900 font-semibold'>Relationship Goal</p>
                                <button className='btn'>Edit</button>
                            </div>
                            <p className='text-gray-600 font-semibold'>Connect every <span className='font-bold text-black'>{expected.goal} days</span></p>
                        </div>
                        <div className='shadow p-4'>
                            <p className='text-green-900 font-semibold mb-2'>Quick Check-In</p>
                            <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center'>
                                <button onClick={() => handleCheckIn("call")} className='bg-blue-50 px-20 py-6 rounded-lg flex flex-col items-center text-[20px] cursor-pointer'><IoCallOutline /> <span>Call</span> </button>
                                <button onClick={() => handleCheckIn("text")} className='bg-blue-50 px-20 py-6 rounded-lg flex flex-col items-center text-[20px] cursor-pointer'><IoMdText /> <span>Text</span> </button>
                                <button onClick={() => handleCheckIn("video")} className='bg-blue-50 px-20 py-6 rounded-lg flex flex-col items-center text-[20px] cursor-pointer'><FaVideo /> <span>Video</span> </button>
                            </div>
                        </div>

                    </div>
                </div>
            }


        </div>
    );
};

export default FriendDetails;