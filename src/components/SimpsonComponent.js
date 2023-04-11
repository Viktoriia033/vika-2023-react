import React from 'react';
const SimpsonComponent = (props) => {
let {itemName,pic,p} = props;

    let classNameItem = 'card';
    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
            <p>{p}</p>
        </div>

    );
};

export default SimpsonComponent;