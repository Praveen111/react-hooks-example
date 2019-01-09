import {combineReducers, createStore, applyMiddleware} from 'redux';
import reducer from './Reducers/BookReducer';
import thunk from 'redux-thunk';

const Store = createStore(combineReducers(reducer),applyMiddleware([thunk]));


export default Store;