'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gtarang-blue">Gtarang</span>
            <span className="text-xl font-semibold text-gtarang-green">Energy Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/ai-solutions" className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors">
              AI Solutions
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/ai-solutions"
                className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Solutions
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gtarang-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 