import React from 'react';
import {useForm} from "react-hook-form";
import {UserService} from "../services/user.service";

const UserForm = ({setAllUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm()
    const save = async (user) => {
        const {data} = await UserService.create(user);
        setAllUsers(prev=> !prev)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'id'}/>
                {errors.name && <span>Only official name</span>}
                <input type={"text"} placeholder={'name'}/>
                <input type={"text"} placeholder={'username'}/>
                <input type={"text"} placeholder={'email'}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default UserForm;