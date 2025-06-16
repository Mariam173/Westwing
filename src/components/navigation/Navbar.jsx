import React from "react";
import Logo from "../home/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0063a4] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between space-x-8">
        
      
        <Logo />

      
        <ul className="hidden md:flex items-center space-x-30">
          <a href="/courses" className="hover:text-pink-400">Courses</a>
          <Link to="/about" className="hover:text-pink-400">About StackJunior</Link>
          <li><a href="#" className="hover:text-pink-400">Quick Tutorials</a></li>
          <li><a href="#" className="hover:text-pink-400">My Account</a></li>
        </ul>

        
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
          Start Learning
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
