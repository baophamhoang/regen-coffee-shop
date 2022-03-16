import {createStore, combineReducers} from 'redux';
import dishes from './dishes'
import promotions from './promotions'
import comments from './comments'
import leaders from './leaders'

const store = createStore(
    combineReducers({
        dishes: dishes,
        comments: comments,
        promotions: promotions,
        leaders: leaders
    })
);

export default store;
