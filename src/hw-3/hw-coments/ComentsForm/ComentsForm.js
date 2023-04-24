import {useForm} from "react-hook-form";
import {comentsService} from "../services-coments/coments.service";


const ComentsForm = ({setComents}) => {
    const {register, handleSubmit, reset} = useForm()
    const saveComents = async (coment) => {
        const {data} = await comentsService.create(coment);
        console.log(data);
        setComents(prev => [...prev,data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(saveComents)}>

            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>

    );
};

export default ComentsForm;