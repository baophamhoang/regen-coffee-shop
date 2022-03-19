
import { ADD_COMMENT,
        ADD_COMMENTS, 
        COMMENTS_FAILED} from './actionTypes';

const commentsReducer = (state = { comments: [], errorMsg: null}, action) => {
    switch(action.type){
        case ADD_COMMENT:
            return {
                ...state,
                errorMsg: null,
                comments: [
                    ...state.comments,
                    action.payload
                ]
            }
        case ADD_COMMENTS:
            return {
                ...state,
                errorMsg: null,
                comments: action.payload
            }
        case COMMENTS_FAILED:
            return {
                ...state,
                errorMsg: action.payload
            }
        default: 
         return state;
    }
}

export default commentsReducer;