import { DISHES } from '../shared/dishes';

const dishesReducer = (state = DISHES, action) => {
    switch(action.type){
        default: 
         return state;
    }
}

export default dishesReducer;