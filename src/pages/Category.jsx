import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {getFiltered} from "../api";

import Preloader from "../components/Preloader";
import {MealsList} from "../components/MealsList"


function Category() {
    const [meal, setMeal] = useState([])
    const {name} = useParams();

    useEffect(()=> {
        getFiltered(name).then(data => {
            setMeal(data.meals)
        })
    }, [name])
    return <>
        {!meal.length ? <Preloader/> : <MealsList meal={meal}/>}
    </>
}
export {Category}