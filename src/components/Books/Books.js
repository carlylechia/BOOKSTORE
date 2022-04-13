import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book/Book';
import Form from './Form/Form';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer.books, shallowEqual);
  return (
    <>
      {
       !bookList.length
         ? <p>there are no books added yet.</p>
         : bookList.map((bookItem) => (
           <Book
             key={bookItem.id}
             title={bookItem.title}
             author={bookItem.author}
           />
         ))
      }
      <Form />
    </>
  );
};

export default Books;
