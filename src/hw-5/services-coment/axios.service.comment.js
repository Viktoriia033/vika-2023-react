import axios from "axios";
import {baseURLComment} from "../constants-coment/urls-comment";

const axiosServiceComment = axios.create({baseURL:baseURLComment});

export {
    axiosServiceComment
}