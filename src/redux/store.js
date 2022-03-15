import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

const store = createStore(
    Reducer, // reducer
    initialState, // our initialState
);

export default store;
