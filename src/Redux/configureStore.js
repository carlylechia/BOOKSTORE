import { createStore, combineReducers } from 'Redux';
import categoriesReducer from './Categories/Categories';
import booksReducer from './Books/Books';

const rootReducer = combineReducers({ categoriesReducer, booksReducer });
const store = createStore(rootReducer);

export default store;
