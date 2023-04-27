import {baseURLPosts} from "../constants-post/url-posts";
import axios from "axios";

const axiosServicePosts = axios.create({baseURL:baseURLPosts});

export {
    axiosServicePosts
}