import React from 'react';
import { useParams } from 'react-router';
import FriendsHook from '../../hooks/FriendsHook';
import { BounceLoader } from 'react-spinners';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { friends, loading } = FriendsHook()


    const expected = friends.find(friend => friend.id == id);
    return (

        <div>
            {loading ? <div className='h-[100px] flex justify-center items-center'> <BounceLoader color="#244D3F" /> </div> :
                <div>
                    <h1>{expected.id}</h1>
                    <h1>{expected.name}</h1>
                    <h1>{expected.email}</h1>
                </div>
            }


        </div>
    );
};

export default FriendDetails;