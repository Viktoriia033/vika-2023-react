import {useForm} from "react-hook-form";
import {comentsService} from "../services-coments/coments.service";


const ComentsForm = ({setAllComents}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm()
    const saveComents = async (coment) => {
        const {data} = await comentsService.create(coment);
        setAllComents(prev => !prev)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(saveComents)}>
            <input type="text" placeholder={'id'} {...register('id', {valueAsNumber: true})}/>
            {errors.id && <span>Only letters</span>}
            <input type="text" placeholder={'name'}/>
            <input type="text" placeholder={'email'}/>
            <input type="text" placeholder={'body'}/>
            <button>Save</button>
        </form>

    );
};

export default ComentsForm;