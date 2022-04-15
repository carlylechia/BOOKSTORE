import { saveBook, loadBooks, removeBook } from '../apiFinctions';

const NEW_BOOK = 'BOOKSTORE/Books/NEW_BOOK';
const ADD_BOOK = 'BOOKSTORE/Books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/Books/REMOVE_BOOK';
const REMOVED_BOOK = 'BOOKSTORE/Books/REMOVED_BOOK';
const LOAD_BOOKS = 'BOOKSTORE/Books/LOAD_BOOKS';
const BOOKS_LOADED = 'BOOKSTORE/Books/BOOKS_LOADED';

export const addBook = (book) => (dispatch) => {
  dispatch({ type: NEW_BOOK });
  saveBook(book).then((status) => {
    if (status === 201 || status === 200) {
      dispatch({ type: ADD_BOOK, payload: book });
    }
  });
};

export const booksLoad = () => (dispatch) => {
  dispatch({ type: LOAD_BOOKS });
  loadBooks().then((books) => dispatch({
    type: BOOKS_LOADED,
    payload: books,
  }));
};

export const bookRemove = (index, id) => (dispatch) => {
  dispatch({ type: REMOVED_BOOK });
  removeBook(id).then((status) => {
    if (status === 201 || status === 200) dispatch({ type: REMOVE_BOOK, payload: index });
  });
};
const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_BOOK:
    case LOAD_BOOKS:
    case REMOVED_BOOK:
      return { ...state, waiting: true };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload], waiting: false };
    case BOOKS_LOADED:
      return { ...state, books: [...state.books, ...action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [...state.books.slice(0, action.payload), ...state.books.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};
export default booksReducer;
