import {Meal} from "./Meal";

function MealsList({meal}) {
    return <div className="list">
        {meal.map(item => (
            <Meal key={item.idMeal}{...item}/>
        ))}
    </div>
}
export {MealsList}