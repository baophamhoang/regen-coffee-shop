
import {
    ADD_DISHES,
    DISHES_FAILED,
    DISHES_LOADING
} from './actionTypes'

const dishesReducer = (state = {
    dishes: [],
    errorMsg: null,
    isLoading: true
    }, action) => {
    switch(action.type){
        case DISHES_LOADING:
            return ({
                ...state,
                isLoading: true,
                errorMsg: null,
                // dishes: []
            })
        case DISHES_FAILED:
            return ({
                ...state,
                isLoading: false,
                errorMsg: action.payload
            })
        case ADD_DISHES:
            return ({
                ...state,
                isLoading: false,
                errorMsg: null,
                dishes: action.payload
            })
        default: 
         return state;
    }
}

export default dishesReducer;