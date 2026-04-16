
import DisplayFriends from './DisplayFriends';
import { BounceLoader } from 'react-spinners';
import FriendsHook from '../../../hooks/FriendsHook';

const Friends = () => {

    const {friends,loading} = FriendsHook()

    return (
        <div className='container mx-auto mt-6'>
            <h1 className='text-3xl font-bold py-4'>Your Friends</h1>
            {loading ? <div className='h-[100px] flex justify-center items-center'> <BounceLoader color="#244D3F" /> </div> : 
            <div className='grid  grid-cols-4 gap-4'>
                {
                    friends.map(friend => <DisplayFriends friend={friend} key={friend.id}></DisplayFriends>)
                }
            </div>
            }


        </div>
    );
};

export default Friends;