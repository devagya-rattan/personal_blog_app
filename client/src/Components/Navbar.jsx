// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/home">Devagya's Blog</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/home"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;