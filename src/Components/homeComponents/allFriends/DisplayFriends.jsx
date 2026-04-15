import React from 'react';
import { Link } from 'react-router';

const DisplayFriends = ({friend}) => {

    const {name,email,id} = friend;
    return (
        <Link to={`/friends/${id}`} className='bg-amber-200'>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </Link>
    );
};

export default DisplayFriends;