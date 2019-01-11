import {combineReducers, createStore, applyMiddleware} from 'redux';
import reducer from './Reducers/BookReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// console.log(reducer);
const reducers = combineReducers({
    book: reducer
});
const Store = createStore(combineReducers(reducers),applyMiddleware(thunk,logger));


export default Store;