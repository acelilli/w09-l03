import React from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </>
  );
};

export default BookList;

//BookList è più generico + non gli viene immesso direttamente l'array dei libri = più riutilizzabile e modulare
