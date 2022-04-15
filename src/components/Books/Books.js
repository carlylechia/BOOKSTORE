import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { booksLoad } from '../../Redux/Books/Books';
import Book from './Book/Book';
import Form from './Form/Form';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksLoad());
  }, []);
  const bookList = useSelector((state) => state.booksReducer.books, shallowEqual);
  const id = bookList.length ? bookList[bookList.length - 1].id + 1 : bookList.length + 1;
  return (
    <>
      {
       !bookList.length
         ? <p>there are no books added yet.</p>
         : bookList.map((bookItem, i) => (
           <Book
             key={bookItem.id}
             bookIndex={i}
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
