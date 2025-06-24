"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function EcosystemPage() {
  return (
    <section className="bg-[#f5f5f1] text-black font-sans">
      <section className="relative bg-[#f5f5f1] text-black font-sans h-16 mb-3">
        {/* Navigation Bar */}
        <Nav />
      </section>

      {/* Summit Section */}
      <section className="bg-[#f5f5f1] relative text-black pt-4 pb-12">
        {/* Title Section */}
        <div className="relative z-10 text-center px-4 pt-12 pb-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {/* Alexander Phi Summit */}
            PRODUCTION ECOSYSTEM
          </h1>
          <p className="mt-4 text-lg font-light max-w-3xl mx-auto">
            This is a home for filmmakers who know that access is more than
            permission; it is the foundation of power.
          </p>
        </div>

        {/* Video Section */}
        <div className="text-center mt-6 px-4">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="mx-auto w-full h-48 object-cover px-4 md:px-0 md:h-96 sm:wk-[600px] md:w-[600px] rounded-lg shadow-lg"
            aria-label="Promotional video"
            src="/videos/SUMMIT.mp4"
          />
        </div>

        {/* Production Images Section */}
        <div className="max-w-4xl mx-auto mt-14 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2 tracking-tight">Inside the Production Ecosystem</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">A glimpse behind the scenes: our creative process, our people, and the energy that drives our productions forward.</p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
            {/* First Image Card */}
            <div className="relative w-full md:w-1/2 h-72 md:h-80 rounded-2xl shadow-2xl overflow-hidden bg-white md:mt-8 group">
              <img
                src="/images/prod1.jpeg"
                alt="On Set - Production still 1"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-lg font-semibold drop-shadow">On Set</span>
              </div>
            </div>
            {/* Second Image Card */}
            <div className="relative w-full md:w-1/2 h-72 md:h-80 rounded-2xl shadow-2xl overflow-hidden bg-white md:-mt-8 group">
              <img
                src="/images/prod2.jpeg"
                alt="Behind the Scenes - Production still 2"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-lg font-semibold drop-shadow">Behind the Scenes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <p className="mt-8 sm:mt-12 text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto text-center px-8 uppercase">
          For filmmakers who believe ownership is not optional; it is the
          bedrock of dignity. For artists who understand that when we honor the
          past and the present, we lay the groundwork for a future that is
          richer, fuller, and unapologetically ours. This ecosystem is a unified
          platform designed to bring together the creative brilliance, talent,
          and vision of Black filmmakers across Africa, the Caribbean, the
          Americas, and Europe.
        </p>
        <p className="mt-8 sm:mt-12 text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto text-center px-8">
          We are constructing a production ecosystem; an integrated pipeline
          that spans script development, talent partnerships, production
          management, and post-production innovation. We work with the best
          creative minds across Africa and the diaspora, curating stories that
          are culturally rich, commercially viable, and primed for global
          release. Our work is grounded in a simple truth: To control the
          narrative, you must own the means to produce it. By investing in the
          development of premium films and scalable franchises, we are elevating
          Black storytelling beyond survival and scarcity to spaces of
          ownership, prestige, and enduring market value.
        </p>

        <div className="pb-8"></div>
      </section>

      <section id="film-hub" className="bg-white py-12 px-3 lg:px-20">
        <div>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 capitalize">
              Our Distribution goal is simple:
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              To give filmmakers direct pathways to global audiences, without
              compromise, without dependence on gatekeepers, and without
              surrendering ownership or profit. We are developing a system where
              stories can move across continents with agility, where filmmakers
              can access new markets and revenue streams, and where distribution
              is no longer a barrier but a launchpad for possibility
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                What is the Filmmaker Hub?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Hub is more than just a meeting space; it's a vibrant
                community where creativity flourishes. Here, filmmakers can come
                together to discuss their upcoming projects, brainstorm ideas,
                and share challenges they face in the production process.
                Whether you're seeking specific expertise, resources, or simply
                a sounding board for your concepts, our Hub is the place to make
                those connections.
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                A Place for Collaboration
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Hub fosters an environment conducive to co-productions,
                where filmmakers can partner on projects, combining their
                talents and resources to create compelling content. This
                collaborative approach not only enhances creativity but also
                increases the potential for successful project outcomes.
              </p>
              <p className="text-gray-600 font-medium mb-6">
                Whether you're a seasoned professional or an emerging talent,
                join the Hub to connect with like-minded creators and elevate
                Black narratives in global cinema.
              </p>
              <p className="text-gray-600 font-medium">
                Join the Filmmaker's Hub in your city
              </p>
            </div>

            <div className="relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="arounded-lg shadow-lg max-h-[500px] object-cover w-full"
                aria-label="Promotional video"
                src="/videos/HUB.mp4"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
