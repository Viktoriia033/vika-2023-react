import React from 'react';

const SpaceX = ({spaceX}) => {
    let {mission_name,launch_year,mission_patch_small} = spaceX;
    return (
        <div>
            <div>mission_name:{mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div>mission_patch_small: {mission_patch_small}</div>
        </div>
    );
};

export default SpaceX;