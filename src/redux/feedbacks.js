import { ADD_FEEDBACKS, POST_FEEDBACKS } from "./actionTypes";


 const feedbackReducer = (state = [] , action) => {
    switch(action.type){
        case ADD_FEEDBACKS:
            console.log(action.payload);
            return [...state, action.payload];
        default: 
            return state;
        }
    }

export default feedbackReducer;
