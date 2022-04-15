import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../../Redux/Books/Books';

const Form = ({ id }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const categories = ['Action', 'SciFi', 'SciFi, Action', 'Adventure', 'Fantasy', 'Fantasy, Adventure', 'Crime', 'Detective', 'Crime and Investigation', 'Romance', 'Drama', 'Romance, Drama', 'Thriller', 'Musical', 'Fiction', 'Discovery'];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!type.length) return;
        const book = {
          id, title, author, type,
        };
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
        setType('');
      }}
    >
      <h2>Add new book</h2>
      <input
        type="text"
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="Book author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <select
        value={type.length ? type : 'select your category'}
        onChange={(e) => setType(e.target.value)}
        name="categories"
      >
        <option value="select your category" disabled>select your category</option>
        {
        categories.map((category) => <option key={category} value={category}>{category}</option>)
      }
      </select>
      <button type="submit">Add new</button>
    </form>
  );
};
Form.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Form;
