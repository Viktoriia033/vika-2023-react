import React, {useEffect, useState} from 'react';
import UserForm from "../UserForm/UserForm";
import User from "./user";
import {UserService} from "../services/user.service";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [AllUsers,setAllUsers] = useState(null);
    useEffect(()=> {
        UserService.getAll().then(value => value.data).then(value => setUsers(value))
    },[AllUsers])
    return (
        <div>
            <UserForm setAllUsers={setAllUsers}/>
            <hr/>
            {users.map(user=> <User key = {user.id} user={user}/>)}
        </div>
    );
};

export default Users;