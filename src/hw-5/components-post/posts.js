import {Comments} from "../components-coment/comments";
import {commentService} from "../services-coment/comment.service";
import {Post} from "./post";


class Posts extends Comments  {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentWillUnmount() {
        console.log('componentsWillUnmount');

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentsDidUpdate')
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
    }
    render () {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}
export {Posts}