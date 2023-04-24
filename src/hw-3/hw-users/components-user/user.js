import React from 'react';

const User = ({user}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div>price: {username}</div>
            <div> email: {email}</div>
        </div>
    );
};

export default User;