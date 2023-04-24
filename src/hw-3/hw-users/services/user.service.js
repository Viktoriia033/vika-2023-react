
import {axiosServiceUser} from "./axios.service.user";
import user from "../components-user/user";
import {urlsUser} from "../configs/urls-user";


const UserService = {
    getAll:() => axiosServiceUser.get(urlsUser.users),
    create:(user) =>axiosServiceUser.post(urlsUser.users,user),
    getById:(id) => axiosServiceUser.get(`${urlsUser.users}/${id}`),
    updateById:(id,user)=>axiosServiceUser.put(`${urlsUser.users}/${id}`,user),
    deleteById:(id)=>axiosServiceUser.delete(`${urlsUser.users}/${id}`)

}
export {
    UserService
}