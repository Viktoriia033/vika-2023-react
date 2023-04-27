import {Component} from "react";


class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const {postId,id,name,email,body} = this.props.comments;
        return (
            <div>
                <div>postId: {postId}</div>
                <div>Id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}
export {Comment}