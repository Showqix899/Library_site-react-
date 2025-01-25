import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./users.json";

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      alert(`Welcome, ${user.full_name}!`);
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full  mt-20">
    <form onSubmit={handleLogin} className="flex flex-col justify-center items-center border border-gray-300 p-5 rounded-lg shadow-xl">
      <h2 className="font-bold text-2xl mb-5">Login</h2>
      <label>
        <p className="">Username: </p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 w-[300px]" 
        />
      </label>
      <br />
      <label>
      <p className="mr-1.5">Password: </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 w-[300px]" 

        />
      </label>
      <br />
      <button type="submit" className="btn bg-lime-400 p-3 rounded-lg text-white">Login</button>
    </form>
    </div>
  );
};

export default Login;
