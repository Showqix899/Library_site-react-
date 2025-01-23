import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import book_img from "./book_img.json"

const BookDetails = ({ loggedInUser, onBorrowBook }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { book,index } = location.state || {}; // Safely retrieve book from state

  const handleBorrow = () => {
    console.log("handleBorrow called");
    console.log("loggedInUser:", loggedInUser);
    console.log("book:", book);

    if (!loggedInUser) {
      alert("Access denied. Please log in to borrow a book.");
      navigate("/login"); // Redirect to Login page
    } else {
      onBorrowBook(book);
      alert(`Book borrowed successfully by ${loggedInUser.full_name}`);
    }
  };

  // If no book is available, show an error message
  if (!book) {
    return <p>Book details not available. Please navigate from the home page.</p>;
  }

  return (
    <div className="flex flex-col justify-center w-[100%] items-center h-full">
        <h1 className="mt-5 text-2xl font-bold text-gray-400">Book Details</h1>
    <div className="flex flex-col shadow-2xl border border-gray-100 m-10 h-[70%] items-start p-4 rounded-lg">
    <img src={book_img.image_urls[index]} alt=""  className="w-[330px] rounded-lg"/>
      <h2 className="text-2xl">{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p>Publication Year: {book.publication_year}</p>
      <p>Genre: {book.genre.join(", ")}</p>
      <p className="font-bold">Description:</p>
      <p>{book.description}</p>
      <button onClick={handleBorrow} className="btn bg-rose-500 p-3 mt-3 rounded-lg text-white">Borrow</button>
    </div>
    </div>
  );
};

export default BookDetails;