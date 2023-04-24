import axios from "axios";
import {baseURLcoment} from "../configs-coments/urls-coment";



const axiosServiceComents = axios.create({baseURL:baseURLcoment});

export {
    axiosServiceComents
}