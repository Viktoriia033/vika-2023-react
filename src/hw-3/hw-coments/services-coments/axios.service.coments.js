import axios from "axios";
import {baseURLcoment} from "../configs-coments/urls-coment";



const axiosServiceComents = axios.create({baseURLcoment:baseURLcoment});

export {
    axiosServiceComents
}