import {Component} from "react";

import {commentService} from "../services-coment/comment.service";
import {Comment} from "./comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }
    componentWillUnmount() {
        console.log('componentsWillUnmount');

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentsDidUpdate')
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments:value}))
    }
    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}
export {Comments}
