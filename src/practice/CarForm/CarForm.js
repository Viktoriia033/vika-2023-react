import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/car.service";

const CarForm = ({setAllCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm()
    const save = async (car) => {
       const {data} = await carService.create(car);
       setAllCars(prev=> !prev)
      reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {pattern: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/})}/>
            {errors.brand && <span>Only letters</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;