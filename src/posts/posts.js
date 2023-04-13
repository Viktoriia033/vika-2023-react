import React, {useEffect, useState} from 'react';
import Post from "../post/post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    let [selectedPost, setSelectedPost] = useState(null);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            });


    },[]);
    let handlePostClick = (post) => {
        setSelectedPost(post);
    }
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <button onClick={() => handlePostClick(post)}>
                            {post.title}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedPost && (
                <div>
                    <h2> ID - {selectedPost.id}</h2>
                    <p> TITLE - {selectedPost.title}</p>
                    <p>BODY - {selectedPost.body}</p>
                </div>
            )}
        </div>
    );
};

export default Posts;