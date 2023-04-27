import {axiosServiceComment} from "./axios.service.comment";
import {urlsComment} from "../constants-coment/urls-comment";
import axios from "axios";

class CommentService {
    getAll() {
        return axiosServiceComment.get(urlsComment.comments)
    }
}
export const commentService = new CommentService()

