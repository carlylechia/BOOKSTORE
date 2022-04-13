const BOOK_STATUS = 'BOOKSTORE/Categories/BOOK_STATUS';

export const checkStatus = (status) => ({ type: BOOK_STATUS, payload: status });

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_STATUS:
      return { ...state, status: 'Under construction' };
    default:
      return state;
  }
};
export default categoriesReducer;
