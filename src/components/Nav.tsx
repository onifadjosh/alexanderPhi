'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <section className="w-full z-20 relative">
      <div className="flex px-4 py-4 items-center justify-between z-40 bg-[#db0211] relative">
        {/* Logo on the left */}
        <Link href="/">
          <div className="text-lg m-0 p-0 m-0 font-bold uppercase tracking-wide flex items-center space-x-2">
            <span className="text-white">Alexander</span>
            {pathname === '/' ? (
              <img
                src="/images/logo_small.png"
                className="h-8"
                alt="Alexander Phi logo"
              />
            ) : (
              <span className="text-white">Phi</span>
            )}
          </div>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className="pt-2 hidden lg:flex space-x-8 text-white items-center pr-8">
          <Link
            href="/about"
            className={`text-lg font-medium hover:text-gray-300 ${
              pathname === '/about' ? 'text-white font-semibold' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            href="/fund"
            className={`text-lg font-medium hover:text-gray-300 ${
              pathname === '/fund' ? 'text-white font-semibold' : ''
            }`}
          >
            Creative Capital Bank 
          </Link>
          <Link
            href="/ecosystem"
            className={`text-lg font-medium hover:text-gray-300 ${
              pathname === '/ecosystem' ? 'text-white font-semibold' : ''
            }`}
          >
            Production Ecosystem 

          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center z-50"> {/* Increased z-index to 50 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className={`fixed inset-y-0 right-0 h-screen w-full bg-white text-black transform transition-transform duration-300 ease-in-out z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }} 
        >
          <div className="container mx-auto px-4 py-8 h-full flex flex-col overflow-y-auto">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/about' ? 'text-black font-semibold' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              href="/fund"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/fund' ? 'text-black font-semibold' : ''
              }`}
            >
              Creative Capital Bank 
            </Link>
            {/* <Link
              href="/partnership"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/partnership' ? 'text-black font-semibold' : ''
              }`}
            >
              Partnership
            </Link> */}
            <Link
              href="/ecosystem"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/ecosystem' ? 'text-black font-semibold' : ''
              }`}
            >
              Production Ecosystem 

            </Link>
            {/* <Link
              href="/phi"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/phi' ? 'text-black font-semibold' : ''
              }`}
            >
              Phi
            </Link> */}
            {/* <Link
              href="/media"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 text-2xl font-medium hover:text-gray-500 border-b border-gray-100 ${
                pathname === '/media' ? 'text-black font-semibold' : ''
              }`}
            >
              Media
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}