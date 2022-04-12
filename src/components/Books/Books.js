import { useState, useEffect } from 'react';
import Book from './Book/Book';
import Form from './Form/Form';

const Books = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    setBookList([]);
  }, []);
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
