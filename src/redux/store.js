import {createStore, combineReducers, applyMiddleware} from 'redux';
import dishes from './dishes'
import promotions from './promotions'
import comments from './comments'
import leaders from './leaders'
import feedbacks from './feedbacks'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import { reducer as formReducer } from 'redux-form';

const store = createStore(
    combineReducers({
        dishes: dishes,
        comments: comments,
        promotions: promotions,
        leaders: leaders,
        feedback: feedbacks
    }),
    applyMiddleware(thunk, logger)
);

export default store;
