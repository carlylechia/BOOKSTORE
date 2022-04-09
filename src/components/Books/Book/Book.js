import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
  </>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
