import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './Categories/Categories';
import booksReducer from './Books/Books';

const rootReducer = combineReducers({ categoriesReducer, booksReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
