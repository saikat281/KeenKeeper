import React from 'react';
import { Link } from 'react-router';

const DisplayFriends = ({ friend }) => {

    const { name, email, id, picture,tags,status } = friend;

    const handleStatusBg = (status)=>{
        if(status === "overdue") return "bg-red-500";
        else if (status === "almost due") return "bg-amber-500";
        else return "bg-green-900";
    }

    return (
        <Link to={`/friends/${id}`} className='bg-green-50 hover:bg-green-100 shadow flex flex-col justify-center items-center p-4 rounded-lg 
        transition duration-300  hover:scale-103'>
            <img className='bg-green-900 w-auto h-[100px] rounded-full' src={picture} alt={name} />
            <h1>{name}</h1>
            <h1>{email}</h1>
            <p className='text-gray-600'>62 days ago</p>
            <div className='flex items-center gap-2 '>
                {
                    tags.map((tag, idx) => {
                        return <div key={idx}>
                            <p className="px-3 py-1 rounded-full bg-green-200">{tag}</p>
                        </div>
                    })
                }
            </div>
            <p className={`px-3 py-1 rounded-full text-white mt-3 ${handleStatusBg(status)}`}>{status}</p>

        </Link>
    );
};

export default DisplayFriends;