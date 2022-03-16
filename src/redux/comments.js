import { COMMENTS } from '../shared/comments';
import { ADD_COMMENT } from './actionTypes';

const commentsReducer = (state = COMMENTS, action) => {
    console.log(state);
    switch(action.type){
        case ADD_COMMENT:
            return ([
                ...state,
                action.payload
            ])
        default: 
         return state;
    }
}

export default commentsReducer;