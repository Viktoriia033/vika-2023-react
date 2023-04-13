import React from 'react';

const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div>
            <div> {id}</div>
            <div> {name}</div>
            <div> {status}</div>
            <div> {species}</div>
            <div> {gender}</div>
          <img src ={image} alt={name}/>
        </div>
    );
};

export default Character;