// src/components/Header.js
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle closing the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-blue-600 p-4 md:py-2 md:px-4 fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">My Logo</div>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (Mobile Fullscreen Menu and Horizontal Menu for Larger Screens) */}
        <nav
          ref={menuRef}
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } fixed top-0 left-0 w-full h-screen bg-blue-600 z-10 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:relative md:flex md:flex-row md:items-center md:space-x-6 md:w-auto md:h-auto md:bg-transparent md:opacity-100 md:translate-x-0`}
        >
          {/* Close Button on Mobile */}
          <button
            className="absolute top-4 right-4 text-white focus:outline-none md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Close (X) icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Links */}
          <a
            href="#home"
            className="text-white block py-4 px-6 text-2xl hover:bg-blue-500 md:hover:bg-transparent md:text-base md:py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white block py-4 px-6 text-2xl hover:bg-blue-500 md:hover:bg-transparent md:text-base md:py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white block py-4 px-6 text-2xl hover:bg-blue-500 md:hover:bg-transparent md:text-base md:py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white block py-4 px-6 text-2xl hover:bg-blue-500 md:hover:bg-transparent md:text-base md:py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
