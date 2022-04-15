const ADD_BOOK = 'BOOKSTORE/Books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/Books/REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (index) => ({ type: REMOVE_BOOK, payload: index });

const initialState = {
  books: [{
    id: 1, title: 'First', type: 'SciFi, Action', author: 'One',
  },
  {
    id: 2, title: 'Second', type: 'Fantasy, Adventure', author: 'Two',
  },
  {
    id: 3, title: 'Third', type: 'Crime and Investigation', author: 'Three',
  },
  {
    id: 4, title: 'Forth', type: 'Romance, Drama', author: 'Four',
  },
  ],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
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
