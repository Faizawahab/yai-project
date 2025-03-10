import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-[#1a1f71] z-50">
      <div className="flex justify-between items-center px-6 md:px-28 h-16 text-white">
        <div id="mlogo" className="text-xl font-bold">EBIC</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="#service" className="hover:text-gray-300">Service</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#1a1f71] text-center">
          <ul className="flex flex-col space-y-4 py-4">
            <li><a href="/" className="hover:text-gray-300 text-white" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#service" className="hover:text-gray-300 text-white" onClick={() => setIsOpen(false)}>Service</a></li>
            <li><a href="#about" className="hover:text-gray-300 text-white" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" className="hover:text-gray-300 text-white" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
