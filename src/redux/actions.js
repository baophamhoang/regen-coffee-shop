import { DISHES } from "../shared/dishes";
import { 
    ADD_COMMENT,
    ADD_DISHES,
    DISHES_LOADING,
    DISHES_FAILED
 } from "./actionTypes";

export const addComment = (payload) => {
    return ({
        type: ADD_COMMENT,
        payload
    })
}
export const dishesLoading = () => {
    return ({
        type: DISHES_LOADING
    })
}
export const dishesFailed = (payload) => {
    return ({
        type: DISHES_FAILED,
        payload
    })
}
export const addDishes = (payload) => {
    return ({
        type: ADD_DISHES,
        payload
    })
}
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    },2000)
}