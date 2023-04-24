import React from 'react';
import {useForm} from "react-hook-form";
import {UserService} from "../services/user.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm()
    const save = async (user) => {
        const {data} = await UserService.create(user);
        console.log(data);
        setUsers(prev=> [...prev,data])
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'name'} {...register('name')} />
                <input type={"text"} placeholder={'username'} {...register('username')}/>
                <input type={"text"} placeholder={'email'} {...register('email')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default UserForm;