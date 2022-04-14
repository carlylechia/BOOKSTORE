const ADD_BOOK = 'BOOKSTORE/Books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/Books/REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (index) => ({ type: REMOVE_BOOK, payload: index });

const initialState = {
  books: [{
    id: 1, title: 'First', author: 'One',
  },
  {
    id: 2, title: 'Second', author: 'Two',
  },
  {
    id: 3, title: 'Third', author: 'Three',
  },
  {
    id: 4, title: 'Forth', author: 'Four',
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
