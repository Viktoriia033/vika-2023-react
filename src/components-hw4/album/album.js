import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            <h4>Albums</h4>
            <div>
                <h5>id: {item.id}</h5>
                <h5>title: {item.title}</h5>
            </div>
        </div>
    );
};

export default Album;