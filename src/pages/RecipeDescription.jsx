import React from "react";


function RecipeDescription(props) {
    const {strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube,} = props;

    return <>
        <div className="2">
            <div className="card-image recipe-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <h1>{strMeal}</h1>
                <h5>Category: {strCategory}</h5>
                <h5>Country: {strArea}</h5>
                <span>{strInstructions}</span>
                <table className="centered striped">
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(props).map(key => {
                            if(key.includes('Ingredient') && props[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{props[key]}</td>
                                        <td>{
                                            props[`strMeasure${key.slice(13)}`]
                                        }</td>
                                    </tr>
                                )
                            } return null;
                        })
                    }
                    </tbody>
                </table>
                { strYoutube &&
                <iframe width="100%" height="360px" src={"https://www.youtube.com/embed/"+ strYoutube.slice(-11)}
                        title={strMeal} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                }
            </div>
        </div>
    </>

}

export {RecipeDescription};