import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../../../Redux/Books/Books';

const Book = ({
  author, title, category, bookIndex, bookId,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button
        book-index={bookIndex}
        onClick={(e) => {
          const index = Number(e.target.getAttribute('book-index'));
          dispatch(bookRemove(index, bookId));
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
  category: PropTypes.string.isRequired,
  bookIndex: PropTypes.number.isRequired,
  bookId: PropTypes.number.isRequired,
};
export default Book;
