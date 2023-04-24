import React, {useEffect, useState} from 'react';
import {carService} from "../services/car.service";
import Car from "./car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars,setCars]= useState([]);
     const [AllCars,setAllCars] = useState(null);

    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[AllCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars}/>
            <hr/>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;