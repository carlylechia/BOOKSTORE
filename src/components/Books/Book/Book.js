import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../Redux/Books/Books';

const Book = ({ author, title, bookIndex }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button
        book-index={bookIndex}
        onClick={(e) => {
          const index = Number(e.target.getAttribute('book-index'));
          dispatch(removeBook(index));
        }}
        type="button"
      >
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookIndex: PropTypes.number.isRequired,
};
export default Book;
