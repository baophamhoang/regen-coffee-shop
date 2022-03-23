import { 
    ADD_LEADERS,
    LEADERS_FAILED,
    LEADERS_LOADING
 } from './actionTypes';

const leadersReducer = (state = {
    leaders: [],
    isLoading: true,
    errorMsg: null
}, action) => {
    switch(action.type){
        case ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errorMsg: null,
                leaders: action.payload
            }
        case LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
        case LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMsg: null
            }
        default: 
         return state;
    }
}

export default leadersReducer;