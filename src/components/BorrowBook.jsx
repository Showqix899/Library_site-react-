import React from "react";



const BorrowBook = ({ borrowedBooks, returnBook }) => {

  if (borrowedBooks.length === 0) {
    return <h1 className="text-red-500">No books borrowed yet!</h1>;
  }

  return (
    <div className="w-full h-[844px] flex flex-col justify-center items-center"> 
      <h1 className="text-3xl font-bold mb-4">Borrowed Books</h1>
      <ul className="flex flex-col items-center h-[600px]  justify-center w-[500px] border border-gray-300 rounded-lg m-5 shadow-xl bg-white shadow-gray-400 overflow-y-scroll">
        {borrowedBooks.map((book) => (
          <div className="w-[400px] h-[200px] p-4 border border-gray-300 rounded-lg m-5 shadow-xl bg-white ">
            <li key={book.id} className="flex flex-col justify-between h-full">
            <h3><b>Title:</b> {book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <button onClick={() => returnBook(book.id)} className="btn bg-[red] text-white font-bold p-3 rounded-lg">Return</button>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BorrowBook;