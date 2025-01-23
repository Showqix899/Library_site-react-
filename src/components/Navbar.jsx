import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedInUser }) => {
  return (
    <nav className="w-full bg-[#ade93d]">
      <ul className="flex justify-center space-x-4 p-4 text-white text-2xl gap-10">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/borrowed-books">Borrowed Books</Link></li>
        {loggedInUser ? (
          <li>Welcome, {loggedInUser.full_name}!</li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
