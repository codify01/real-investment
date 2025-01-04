// components/NavBar.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pry text-white fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Invest
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-sec transition">
            Features
          </Link>
          <Link href="#about" className="hover:text-sec transition">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-sec transition">
            Contact
          </Link>
          <Link
            href="#"
            className="bg-sec text-pry px-4 py-2 rounded-md hover:bg-white transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12' // Close icon
                  : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-pry text-white space-y-4 px-6 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <a href="#features" className="block hover:text-sec">
            Features
          </a>
          <a href="#about" className="block hover:text-sec">
            About Us
          </a>
          <a href="#contact" className="block hover:text-sec">
            Contact
          </a>
          <a
            href="#"
            className="block bg-sec text-pry px-4 py-2 rounded-md hover:bg-white transition"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
}
