import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../../../Redux/Books/Books';
import Progress from './Progress/Progress';
import './Book.css';

const Book = ({
  author, title, category, bookIndex, bookId,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <section className="book-info">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <button type="button" className="book-btn">Comments</button>
        <button
          book-index={bookIndex}
          className="book-btn"
          onClick={(e) => {
            const index = Number(e.target.getAttribute('book-index'));
            dispatch(bookRemove(index, bookId));
          }}
          type="button"
        >
          Remove
        </button>
        <button type="button" className="book-btn">Edit</button>
      </section>
      <section className="progress-info">
        <Progress />
        <div className="reading-progress">
          <p className="state-title">progress state</p>
          <p className="state">not started</p>
          <button className="update-state" type="button">UPDATE PROGRESS</button>
        </div>
      </section>
    </div>
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
