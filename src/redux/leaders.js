import { LEADERS } from '../shared/leaders';

const leadersReducer = (state = LEADERS, action) => {
    switch(action.type){
        default: 
         return state;
    }
}

export default leadersReducer;