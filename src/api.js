import {API_URL} from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL +'lookup.php?i='+ mealId );
    return await response.json();
}
const getAllCategory = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}
const getFiltered = async (catMeal) => {
    const response = await fetch(API_URL + `filter.php?c=` + catMeal);
    return await response.json();
}
export {getMealById, getAllCategory, getFiltered}