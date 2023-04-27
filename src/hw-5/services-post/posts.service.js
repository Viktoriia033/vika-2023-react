import {axiosServiceComment} from "../services-coment/axios.service.comment";
import {urlPosts} from "../constants-post/url-posts";


class PostsService {
    getAll() {
        return axiosServiceComment.get(urlPosts.posts)
    }
}
export const postsService = new PostsService()