import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book/Book';
import Form from './Form/Form';
import './Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer.books, shallowEqual);
  const id = bookList.length ? bookList[bookList.length - 1].id + 1 : bookList.length + 1;
  return (
    <>
      {
       !bookList.length
         ? <p className="empty-books-msg">There are no books added yet.</p>
         : bookList.map((bookItem, i) => (
           <Book
             key={bookItem.id}
             bookIndex={i}
             bookId={bookItem.id}
             title={bookItem.title}
             author={bookItem.author}
             category={bookItem.type}
           />
         ))
      }
      <Form id={id} />
    </>
  );
};

export default Books;
