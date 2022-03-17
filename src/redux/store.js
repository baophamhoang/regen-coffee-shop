import {createStore, combineReducers, applyMiddleware} from 'redux';
import dishes from './dishes'
import promotions from './promotions'
import comments from './comments'
import leaders from './leaders'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(
    combineReducers({
        dishes: dishes,
        comments: comments,
        promotions: promotions,
        leaders: leaders
    }),
    applyMiddleware(thunk, logger)
);

export default store;
