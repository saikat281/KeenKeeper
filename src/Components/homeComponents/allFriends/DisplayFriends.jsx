import React from 'react';

const DisplayFriends = ({friend}) => {

    const {name,email} = friend;
    return (
        <div className='bg-amber-200'>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export default DisplayFriends;