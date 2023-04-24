import React from 'react';

const Coment = ({coment}) => {
    const {id,name,email,body} = coment;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Coment;