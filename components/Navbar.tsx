



"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="   max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo on the left */}
     
          <div className="line flex items-center justify-start">
            <Link href="/">
              <h1 className="text-white text-2xl font-bold">Cyber<span className='text-blue'>Ez</span></h1>
            </Link>
          </div>
        
          {/* Center Links */}
          <div className="flex-1 flex items-center justify-center sm:justify-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex bg-gray-500  rounded-full space-x-4">
                <Link className="text-gray-300 hover:bg-blue hover:text-white px-3 py-2 rounded-full text-sm font-medium" href="#hero">
                  Home
                </Link>
                <Link className="text-gray-300 hover:bg-blue hover:text-white px-3 py-2 rounded-full text-sm font-medium" href="#footer">
                  contactus
                </Link>
                <Link className="text-gray-300 text-small hover:bg-blue hover:text-white px-3 py-2 rounded-full text-sm font-medium" href="#">
                  FaQ
                </Link>

                <Link className="text-gray-300 text-small hover:bg-blue hover:text-white px-3 py-2 rounded-full text-sm font-medium" href="#home">
                   menu
                </Link>
              </div>
            </div>
          </div>

          {/* Menu button on the right */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col z-index-1 px-2 pt-2 pb-3 space-y-1">
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/">
              Home
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/about">
              About
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
