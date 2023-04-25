import React from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

const Coment = ({item}) => {
    let navigate = useNavigate();
    const { id } = useParams();
    return (
        <div>

            <h4>Coments:</h4>
            <h5>postId: {item.postId}</h5>
            <h5>id: {item.id}</h5>
            <h5>name: {item.name}</h5>
            <h5>email: {item.email}</h5>
            <Link to={'/info/coments/' + item.id.toString()} state={{...item}} >
            <h5>body: {item.body}</h5>
        </Link>
            <button onClick={() => {
                navigate(item.postId.toString());
            }}>details coment
            </button>
            <div>
                {id === item.postId.toString() &&
                    (<Outlet id={item.postId}/>)}
            </div>
        </div>
    );
};

export default Coment;