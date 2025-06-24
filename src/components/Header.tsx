'use client';

import { useEffect } from 'react';
import HeaderNav from './HeaderNav';
import Nav from './Nav';

export default function Header() {
  useEffect(() => {
    const button = document.querySelector('.scrollToSection');
    if (button) {
      button.addEventListener('click', () => {
        document.getElementById('scrollTarget')?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }, []);

  return (
    <header className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[100vh]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Promotional video"
          src="/videos/HOMEPAGE1.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Brand and Navigation */}
        <HeaderNav />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center mt-4 text-center space-y-6 max-w-4xl mx-auto">
          <section>
            <h1 className="text-4xl md:text-[84px] font-bold leading-tight text-gray-50 uppercase mb-[-2px] pb-0">
              Welcome to:
            </h1>
            <h1 className="text-4xl md:text-[92px] font-bold leading-tight text-gray-50 uppercase mt-0">
              Alexander Phi
            </h1>
          </section>

          <p className="text-md md:text-lg text-gray-200 px-4 max-w-2xl font-semibold leading-relaxed">
            {/* Alexander Phi is an empowered ecosystem for filmmakers of African
            descent across the world, a melting-point for groundbreaking stories and
            bankable investments. The stage for a new era in film driven by African
            excellence on a global scale. */}
            Alexander Phi is the melting point of bankable stories and creations , human centred innovative technology, and Legacy Investments.
            We believe in the power of capital and vision to produce stories, shape narratives, seal partnerships, expand ownerships, amplify culture, patiently build wealth and legacy that exceeds timelines that dictate the future.


          </p>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 w-full text-center">
          <button
            className="scrollToSection text-white text-4xl hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 