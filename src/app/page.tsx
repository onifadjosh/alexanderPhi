"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <Header />

      {/* Feature Cards Section */}
      <section className="py-20 px-4 md:px-8 bg-white" id="scrollTarget">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Card */}
          <div className="relative group overflow-hidden rounded-xl h-[450px]">
            <div className="absolute inset-0 /bg-gradient-to-b from-black/60 to-black/90 z-10" />
            <img
              src="/images/potter.JPG"
              alt="Our Vision at Alexander Phi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              {/* <p className="text-white/90 mb-6">
                Discover our mission to revolutionize global cinema through
                innovation and cultural impact.
              </p> */}
              <a
                href="/about"
                className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Creative Capital Fund Card */}
          <div className="relative group overflow-hidden rounded-xl h-[450px]">
            <div className="absolute inset-0 /bg-gradient-to-b from-black/60 to-black/90 z-10" />
            <img
              src="/images/chess.JPG"
              alt="Creative Capital Fund"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Creative Capital Fund</h3>
              {/* <p className="text-white/90 mb-6">
                Join our $500M film ecosystem that empowers visionary creators
                and generates unprecedented returns.
              </p> */}
              <a
                href="/fund"
                className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                Explore Fund
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Productive Ecosystem Card */}
          <div className="relative group overflow-hidden rounded-xl h-[450px]">
            <div className="absolute inset-0 /bg-gradient-to-b from-black/60 to-black/90 z-10" />
            <img
              src="/images/prodd.PNG"
              alt="Productive Ecosystem"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Productive Ecosystem</h3>
              {/* <p className="text-white/90 mb-6">
                Experience our integrated pipeline spanning script development,
                production, and global distribution.
              </p> */}
              <a
                href="/ecosystem"
                className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                Join Ecosystem
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section to Scroll to */}
      <section >
        <section className="bg-[#f5f5f1]  px-2 md:px-8 py-12">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About
            </h2>
            <span>
              <img src="/images/logo_small.png" className="h-8" alt="Logo" />
            </span>
          </div>

          <section className="max-w-7xl mx-auto py-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:items-center">
              {/* First Block */}
              <div>
                <img
                  src="/images/actor.jpg"
                  alt="Filmmakers"
                  className="w-full object-cover aspect-[4/3] rounded-md shadow-lg md:mb-6"
                />
              </div>
              <div className="flex flex-col justify-center">
                {/* <p className="text-md text-gray-600 uppercase tracking-widest mb-4">
                  For Filmmakers
                </p> */}
                {/* <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  With a Commitment to Innovation, Collaboration, and the
                  Empowerment of Black Creatives, We're Revolutionizing the Cinema
                  Experience of African Production.
                </h2> */}
                <p className="text-xl text-gray-600 mb-4 font-bold">
                  Imagine a space where your vision has the support it needs to
                  reach its fullest potential. Alexander Phi connects
                  forward-thinking filmmakers, writers, and artists from across
                  the globe who share a common heritage, creating an environment
                  where our diverse voices can thrive as one. We believe in the
                  power of collaboration, with a curated platform that matches
                  complementary talents to co-create, co-produce impactful,
                  globally relevant stories. Our projects celebrate our
                  collective roots, explore unique perspectives, and amplify
                  narratives that challenge, inspire, and entertain.
                </p>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
              <div className="flex flex-col justify-center order-last md:order-first">
                <p className="text-sm text-gray-600 uppercase tracking-widest mb-4">
                  For Investors
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  At Alexander Phi, we bring Black narratives to life through
                  impactful, bankable films. Join us to invest in a unique
                  ecosystem that transforms diverse stories into epic dramas and
                  innovative tales.
                </h2>
                <p className="text-md text-gray-600 mb-4">
                  Our platform combines high-yield financial opportunities with an
                  unwavering dedication to authenticity and cultural integrity.
                  We're creating an empowered network of talent and resources that
                  brings the most captivating, untold stories to global audiences.
                  Alexander Phi isn't just a film company; it's a movement for
                  those who want to be at the forefront of an industry shift,
                  where impactful storytelling meets impressive financial returns.
                </p>
              </div>
              <div>
                <img
                  src="/images/investors.jpeg"
                  alt="Investors"
                  className="w-full object-cover aspect-[4/3] rounded-md shadow-lg md:mb-6"
                />
              </div>
            </div> */}
          </section>
        </section>
      </section>

      <div className="bg-white pt-8">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Video */}
          <video
            autoPlay
            muted
            playsInline
            loop
            className="inset-0 md:w-1/2 mx-auto text-center object-cover"
            aria-label="Promotional video"
            src="/videos/AI.mp4"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col max-w-4xl justify-start text-center items-center mx-auto">
            <p className="text-4xl text-yellow-400 py-4 font-semibold">
              Warning
            </p>
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center mt-16 text-center space-y-6 py-4 max-w-lg md:max-w-4xl mx-auto">
            <section>
              <img src="/images/logo_small.png" className="w-32" alt="Logo" />
            </section>

            <p className="text-md text-gray-200 px-4 max-w-2xl text-yellow-400 text-6xl font-bold font-serif">
              Win Only
            </p>
            <p className="text-white text-gray-900 max-w-lg px-4 font-medium text-xl">
              Would you like to proceed? join the race, win with us at your own
              risk.
            </p>
          </div>
        </div>

        {/* Next Section */}
        <section className="bg-white text-gray-900 pb-16 py-4 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">A Future Beyond Limitations</h2>
            <p className="text-lg leading-relaxed">
              Our intelligent capital harnesses Ai-powered tools, research, data
              and culture test to mitigate the inherent risks associated to
              investments. All investment decisions should be made with full
              awareness and independent counsel. We build with Clarity and
              Covinction to Win Only
            </p>
            {/* <div className="border-t border-gray-200 my-8"></div>
            <p className="text-md font-medium">
              Imagine a world where stories are free from traditional
              constraints—a revolution in cinema awaits.
            </p> */}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
