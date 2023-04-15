import React, {useEffect, useState} from 'react';
import axios from "axios";
import spaceX from "../spaceX/spaceX";
const SpacesX = () => {
    let [spacesX,setSpacesX] = useState([]);
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => {
           let filter_space = value.filter(item=> item.launch_year != "2020");
           setSpacesX(filter_space)
        })
    }, [])
    return (
        <div>
            {spacesX.map((spaceX, index) => <SpaceX key={index} spaceX={spaceX}/>)}

        </div>
    );
};

export default SpacesX;