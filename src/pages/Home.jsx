import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import book_img from "./book_img.json"
const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get("https://www.freetestapi.com/api/v1/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "asc"
        ? a.publication_year - b.publication_year
        : b.publication_year - a.publication_year
    );
  return (
    <div className="mx-auto bg-gray-200 flex justify-center items-center flex-col">
      <SearchBar search={search} setSearch={setSearch} setSort={setSort} />
      <div className="flex flex-wrap justify-center w-full">
      <ul className="flex flex-wrap justify-center ">
        {filteredBooks.map((book,index) => (
          <div className="w-[300px] p-4 border border-gray-300 rounded-lg m-5 shadow-xl bg-white ">
            <li key={book.id} className="flex flex-col justify-between h-full">
            <img src={book_img.image_urls[index]} alt="" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="mt-2"><b>Author: </b>{book.author}</p>
            <p><b>Published:</b> {book.publication_year}</p>
            {/* Pass book object as state to the Link */}
            <Link to={`/book/${book.id}`} state={{ book,index}} >
            <button className="btn bg-[#c436c4] text-white p-2 mt-3 font-sans  rounded-lg font-bold text-sm ">View Details</button>
            </Link>
          </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Home;
