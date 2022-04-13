import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../Redux/Books/Books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const book = { title, author };
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
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
      <button type="submit">Add new</button>
    </form>
  );
};

export default Form;
