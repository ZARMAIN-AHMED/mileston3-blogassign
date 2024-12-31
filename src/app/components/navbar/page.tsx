'use client'
import { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              BlogMaster
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-lg hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link href="/components/about" className="text-lg hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link href="/components/blog" className="text-lg hover:text-blue-400 transition duration-300">
              Blog
            </Link>
            <Link href="/components/contact" className="text-lg hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white space-y-4 py-4 px-6 transition-transform transform ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } duration-300 ease-in-out`}
      >
        <Link
          href="/"
          className="text-lg hover:text-blue-400 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          href="/components/about"
          className="text-lg hover:text-blue-400 transition duration-300"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
          href="/components/blog"
          className="text-lg hover:text-blue-400 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Blog
        </Link>
        <Link
          href="/components/contact"
          className="text-lg hover:text-blue-400 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
