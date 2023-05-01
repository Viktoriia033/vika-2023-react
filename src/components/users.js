import React from 'react';
import {Component} from "react";
import {userService} from "../services/user.service";
import {User} from "./user";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],

        }
    }
    componentWillUnmount() {
        console.log('componentsWillUnmount');

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentsDidUpdate')
    }

    componentDidMount() {
        userService.getAll().then(value => value.data).then(value => this.setState({users:value}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}

               </div>

        )
    }
}
export {Users}