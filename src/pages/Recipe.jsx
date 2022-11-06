import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getMealById} from "../api";
import {RecipeDescription} from "./RecipeDescription";

function Recipe() {
    const [recipe, setRecipe] = useState([]);
    const {idMeal} = useParams();

    useEffect(()=>{
        getMealById(idMeal).then(data => {
            setRecipe(data.meals)
        })
    }, [idMeal])

    const navigate = useNavigate;
    const goBack = () => navigate('/category');

    return<>
        {/*<button className="btn" onClick={goBack()}>Go go Back</button>*/}
        {recipe.map(item => (
                <RecipeDescription key={item.idMeal}{...item}/>
            ))}
    </>
}
export {Recipe}