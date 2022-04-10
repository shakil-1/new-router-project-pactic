import React from 'react';

const Friend = (props) => {
    const { name, username } = props.friend;
    <div>
        <h2>Name : {name}</h2>
        <button>User Name : {username}</button>
    </div>

};

export default Friend;