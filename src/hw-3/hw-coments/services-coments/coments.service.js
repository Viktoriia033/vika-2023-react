import {axiosServiceComents} from "./axios.service.coments";
import {urlsComent} from "../configs-coments/urls-coment";
import coment from "../components-coments/coment";


const comentsService = {
    getAll:() => axiosServiceComents.get(urlsComent.coments),
    create:(coment) =>axiosServiceComents.post(urlsComent.coments,coment),
    getById:(id) => axiosServiceComents.get(`${urlsComent.coments}/${id}`),
    updateById:(id,coment)=>axiosServiceComents.put(`${urlsComent.coments}/${id}`,coment),
    deleteById:(id)=>axiosServiceComents.delete(`${urlsComent.coments}/${id}`)
}
export {
    comentsService
}