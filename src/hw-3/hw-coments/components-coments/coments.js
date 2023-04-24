import React, {useEffect,useState} from 'react';
import ComentsForm from "../ComentsForm/ComentsForm";
import Coment from "./coment";
import {comentsService} from "../services-coments/coments.service";

const Coments = () => {
    const [coments,setComents]= useState([]);
    const [AllComents,setAllComets] = useState(null);

    useEffect(()=> {
        comentsService.getAll().then(value => value.data).then(value => setComents(value))
    },[AllComents])
    return (
        <div>
            <ComentsForm setAllComents={setAllComets}/>
            <hr/>
            {coments.map(coment=> <Coment key={coment.id} coment={coment}/>)}
        </div>
    );
};

export default Coments;