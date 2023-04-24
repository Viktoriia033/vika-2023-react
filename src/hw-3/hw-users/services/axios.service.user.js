import {baseUrlUser} from "../configs/urls-user";
import axios from "axios";


const axiosServiceUser = axios.create({baseURL:baseUrlUser});

export {
    axiosServiceUser
}