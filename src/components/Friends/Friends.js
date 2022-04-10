import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2 className=' text-red-400 mt-3 text-3xl'>Hello friends how are yor</h2>
            <p className=' text-2xl text-fuchsia-500'>Parle kicho taka dar dis.. {friends.length}</p>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
            
        </div>
    );
};

export default Friends;