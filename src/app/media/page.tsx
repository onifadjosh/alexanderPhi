'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function MediaPage() {
  useEffect(() => {
    // Smooth scroll function for the arrow click
    const scrollToSection = () => {
      const element = document.getElementById('scrollTarget');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    // Add event listener to the button if it exists
    const button = document.getElementById('scrollButton');
    if (button) {
      button.addEventListener('click', scrollToSection);
    }

    // Cleanup
    return () => {
      if (button) {
        button.removeEventListener('click', scrollToSection);
      }
    };
  }, []);

  return (
    <body>
      <section className="bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <Nav />
      <div className="bg-gradient-to-r from-red-600 to-red-500 h-[13vh] relative" />
    </section>
    <main className="text-gray-800 pt-4 md:pt-8 pb-12 container mx-auto px-6 md:px-24">
      <section className="flex space-y-4 flex-col">
        <img
          src="/images/article1.jpg"
          alt="image article about phi"
          className="max-h-[150vh] w-full object-contain"
        />
        <img
          src="/images/article2.jpg"
          alt="image article about phi"
          className="max-h-[150vh] w-full object-contain"
        />
      </section>
    </main>
    {/* Footer Section */}
    <Footer />
    </body>
  );
} 