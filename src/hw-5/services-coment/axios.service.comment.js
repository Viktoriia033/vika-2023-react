import axios from "axios";
import {baseURLComment} from "../constants-coment/urls-comment";

const axiosServiceComment = axios.create({baseURLComment});

export {
    axiosServiceComment
}