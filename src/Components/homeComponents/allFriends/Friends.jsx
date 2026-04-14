import React, { useEffect, useState } from 'react';
import DisplayFriends from './DisplayFriends';

const Friends = () => {

    const [friends,setFriends] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("/data.json");
            const data = await res.json();
            setFriends(data);
        }
        fetchData();
    },[])
    console.log(friends);
    return (
        <div>
            <h1>Your Friends</h1>
            <div className='grid  grid-cols-4 gap-4'>
                {
                    friends.map(friend=> <DisplayFriends friend={friend} key={friend.id}></DisplayFriends>)
                }
            </div>
            
        </div>
    );
};

export default Friends;