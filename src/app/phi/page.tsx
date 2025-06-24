'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function PhiPage() {
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
    <section className="text-gray-300 font-sans">
      {/* Navigation Bar */}
      <section className="relative">
        <Nav />
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 text-center bg-[#db0211]">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide mb-4">
            AI Tools for Future Filmmaking
          </h1>
          <p className="pt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Empowering filmmakers with cutting-edge technologies to optimize
            workflows and bring ambitious creative visions to life.
          </p>
        </div>
        {/* Abstract Tech Graphic */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 via-white/10 to-transparent pointer-events-none" />
      </section>

      {/* Info Section */}
      <section id="details" className="px-6 py-16 bg-cream text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#db0211] mb-6">
              AT ALEXANDER PHI, WE DEVELOP PROPRIETARY AI TOOLS.
            </h2>
            <p className="text-lg text-red-900 leading-relaxed">
              AI TOOLS FOR THE FUTURE FILMMAKING. AT ALEXANDER PHI, WE ARE
              DEVELOPING PROPRIETARY AI TOOLS TAILORED TO SUPPORT FILMMAKERS AT
              EVERY STAGE OF THE CREATIVE AND PRODUCTION PIPELINE. THESE
              CUTTING-EDGE TECHNOLOGIES ARE DESIGNED TO EMPOWER FILMMAKERS,
              OPTIMIZE PRODUCTION WORKFLOWS, AND MAXIMIZE RETURN ON INVESTMENT FOR
              FILM PROJECTS.
            </p>
            <p className="text-lg text-red-900 leading-relaxed mt-8">
              WE WANT FILMMAKERS TO ACHIEVE THEIR VISION WITHOUT TECHNOLOGICAL OR
              FINANCIAL CONSTRAINTS. FROM VIRTUAL PRE-VISUALIZATION TO ENHANCING
              POST-PRODUCTION WORKFLOWS, WE'RE REDUCING THE TIME AND EFFORT
              REQUIRED WHILE ENABLING AMBITIOUS CREATIVE CHOICES
            </p>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="absolute inset bg-green-400 rounded-full animate-pulse" />
            <div className="relative bg-[#db0211] opacity-90 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-3" />
                  <p>Advanced AI Solutions for Filmmaking</p>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-3" />
                  <p>Seamless Pre-Visualization Tools</p>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-3" />
                  <p>Optimized Post-Production Workflow</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="pt-12 pb-8 md:pb-16 px-6 md:px-20 bg-[#db0211] text-center text-white opacity-90">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-white">
          Our Tools
        </h1>
        <p className="text-lg md:text-xl text-cream max-w-2xl mx-auto mb-12">
          Harness the power of AI-driven solutions to optimize filmmaking at every
          stage, empowering you to create with ease and precision.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Tool Card */}
          <div className="items-center flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-[#db0211]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
              <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
              <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
            </svg>

            <h3 className="text-xl font-semibold text-[#db0211] mb-4">
              Profitability Prediction Models
            </h3>
            <p className="text-gray-900 text-sm">
              Leverage predictive algorithms to forecast profitability and guide
              your investment decisions in real-time.
            </p>
          </div>
          <div className="items-center flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-[#db0211]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#db0211] mb-4">
              Real-time Data Insights
            </h3>
            <p className="text-gray-900 text-sm">
              Access live data streams that allow you to make data-driven
              decisions instantly and stay ahead in the fast-paced film industry.
            </p>
          </div>
          <div className="items-center flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-[#db0211]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#db0211] mb-4">
              Dynamic Revenue Optimization
            </h3>
            <p className="text-gray-900 text-sm">
              Optimize your revenue streams with AI-powered tools that analyze
              market trends and audience preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </section>
  );
} 