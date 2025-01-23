import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import ProtectedRoute from "./components/protectedRoute";
import BorrowBook from "./components/BorrowBook";
import Navbar from "./components/Navbar";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrowBook = (book) => {
    console.log(`Book with ID ${book} borrowed`);
    // Add your logic to handle borrowing the book
    // For example, you can add the book to the borrowedBooks state
    const bookdetails = { id: book.id, title: book.title, author: book.author };
    setBorrowedBooks([...borrowedBooks, bookdetails]);
  };

  const handleReturnBook = (bookId) => {
    console.log(`Book with ID ${bookId} returned`);
    // Add your logic to handle returning the book
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
  };

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} />
      <Routes>
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute loggedInUser={loggedInUser}>
              <BookDetails loggedInUser={loggedInUser} onBorrowBook={handleBorrowBook} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/borrowed-books"
          element={
            <ProtectedRoute loggedInUser={loggedInUser}>
              <BorrowBook borrowedBooks={borrowedBooks} returnBook={handleReturnBook} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;