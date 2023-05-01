import {Component} from "react";


class User extends Component {
    constructor(props) {
        super(props);
    }
    render () {
         const {id,name,email} = this.props.user;
        return (
            <div>
                <div> {id}</div>
                <div> {name}</div>
                <div> {email}</div>
            </div>
        )
    }

}
export {User}