'use client';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function PartnershipPage() {
  return (
    <section className="text-black font-sans">
      {/* Header */}
      <Nav />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/partner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6 mt-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Partner with Us to Shape the Future of Storytelling
            </h1>
            <p className="text-md md:text-lg mb-8">
              We welcome partnerships that align with our mission to support the
              next generation of global storytellers, drive industry innovation,
              and achieve high financial returns. Together, we can redefine the
              future of filmmaking and storytelling.
            </p>
            <a
              href="#partnerships"
              className="bg-[#db0211] px-6 py-3 rounded-full text-md md:text-lg font-semibold hover:bg-red-700 transition"
            >
              Explore Partnerships
            </a>
          </div>
        </div>
      </section>

      {/* Essence of Our Partnership */}
      <section className="pt-20 pb-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <img
            src="/images/logo_big_transparent.png"
            alt="Essence of Partnership"
            className="mx-auto w-72 mb-6"
          />
          <h2 className="mt-8 text-2xl md:text-3xl font-bold mb-4">
            The Essence of Our Partnership
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto">
            Our partnerships are grounded in a shared vision: to elevate African
            heritage and voices, connect creatives with industry leaders, and
            bring bankable stories to the global stage. These collaborations allow
            us to co-create a diverse pipeline of films that resonate across
            cultures and offer immense investment returns
          </p>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section id="partnerships" className="py-4 bg-red-50">
        <h3 className="text-2xl md:text-3xl pt-8 font-bold text-center mb-12">
          Types of Partnerships
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {/* Each Partnership Card */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-center mb-4">
              Creative Partnerships
            </h4>
            <p className="text-gray-600 text-center">
              Collaborate with filmmakers, writers, and producers to co-create
              diverse, compelling stories.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-center mb-4">
              Strategic Industry Partnerships
            </h4>
            <p className="text-gray-600 text-center">
              Align with industry leaders to globalize diverse stories and share
              in their success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-center mb-4">
              Investment Partnerships
            </h4>
            <p className="text-gray-600 text-center">
              Unlock capital and fund high-return ventures with our growing film
              portfolio.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-center mb-4">
              Cultural Partnerships
            </h4>
            <p className="text-gray-600 text-center">
              Collaborate with organizations that promote diversity and social
              justice in storytelling.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-center mb-4">
              Corporate Partnerships
            </h4>
            <p className="text-gray-600 text-center">
              Work with brands that align with creative storytelling and
              innovative advertising.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-8 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <img
              src="/images/logo_big_transparent.png"
              alt="Essence of Partnership"
              className="mx-auto w-96 mb-4"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
} 