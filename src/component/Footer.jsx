import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 justify-center py-12 bg-[#1A1F71] text-white px-[4rem] md:text-left">
        
        {/* Company Info */}
        <div>
          <h1 className="mb-3 text-lg font-bold">EBIC</h1>
          <p>
            The adaptive motor for an electric bicycle <br /> intelligently 
            adjusts power output based <br /> on terrain, speed, and
            user input, <br /> optimizing energy efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="mb-3 text-lg font-bold">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <a href="/" className="hover:text-gray-300 transition-colors hover:scale-105 active:scale-95">Home</a>
            <a href="#service" className="hover:text-gray-300 transition-colors hover:scale-105 active:scale-95">Service</a>
            <a href="#about" className="hover:text-gray-300 transition-colors hover:scale-105 active:scale-95">About</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors hover:scale-105 active:scale-95">Contact</a>
          </div>
        </div>

        {/* Additional Resources */}
        <div>
          <h1 className="mb-3 text-lg font-bold">Additional Resource</h1>
          <div className="space-y-2">
            <h2>ebic20877@gmail.com</h2>
            <h2>+233550538536</h2>
          </div>
          <div className="flex justify-center md:justify-start gap-x-4 mt-3 text-2xl">
            <FaFacebook aria-label="Facebook" className="hover:scale-110 hover:text-gray-300 transition-transform cursor-pointer" />
            <FaInstagramSquare aria-label="Instagram" className="hover:scale-110 hover:text-gray-300 transition-transform cursor-pointer" />
            <FaTwitterSquare aria-label="Twitter" className="hover:scale-110 hover:text-gray-300 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="bg-[#1A1F71] text-white text-center p-4 border-t border-white/20">
        <p>&copy; 2025 EBIC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
