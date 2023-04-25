import React, {useEffect, useState} from 'react';
import Coment from "./coment";
import {Outlet} from "react-router-dom";

const Coments = () => {
    const [coments,setComents] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComents([...value]);
            });
    },[]);
    return (
        <div>
            <h4>Post details</h4>
            <Outlet/>
            {
                coments.map(value => <Coment key={value.id} item={value}/>)
            }

        </div>
    );
};

export default Coments;