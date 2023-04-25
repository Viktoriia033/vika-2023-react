import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const ComentsDetails = () => {
    let {id} = useParams();
    let [post, setPost] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.data)
            .then(value => {
                setPost(value);
            });
    }, [id]);
     const {state} = useLocation();
    return (
        <div>
            <h4>Details: </h4>
            {post && <h4>id: {post.id}</h4>}
            {post && <h3>title: {post.title}</h3>}
            {post && <h4>body: {post.body}</h4>}
        </div>
    );
};

export default ComentsDetails;