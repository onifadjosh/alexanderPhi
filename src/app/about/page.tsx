"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const About: NextPage = () => {
  const coreValues = [
    {
      title: "CAPITAL FORWARD",
      description:
        "Bridging finance and storytelling to reshape the filmmaking economy",
    },
    {
      title: "GLOBAL REACH",
      description:
        "Creating distribution opportunities for all filmmakers worldwide",
    },
    {
      title: "INNOVATION",
      description:
        "Moving beyond traditional funding gaps with creative solutions",
    },
    {
      title: "IMPACT",
      description:
        "Producing story-first films with high commercial and cultural value",
    },
  ];

  useEffect(() => {
    // Smooth scroll function for the arrow click
    const scrollToSection = () => {
      document.getElementById("scrollTarget")?.scrollIntoView({
        behavior: "smooth",
      });
    };

    // Add event listener if needed
    const button = document.querySelector(".scrollToSection");
    if (button) {
      button.addEventListener("click", scrollToSection);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", scrollToSection);
      }
    };
  }, []);

  return (
    <section className="bg-white text-black font-sans">
      <Head>
        <title>Alexander Phi - About Us</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navigation Bar */}
      <Nav />

      {/* Vision Section */}
      <section
        id="vision"
        className="relative min-h-screen flex items-center justify-center bg-black py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/vision.jpeg"
            alt="Film Production Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-9xl font-extrabold text-white mb-8 tracking-tight"
            >
              Our Vision
            </motion.h1>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Revolutionizing Global Cinema Through Innovation and Cultural
              Impact
            </motion.p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
            >
              <div className="text-white/90 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  01. Cultural Renaissance
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                  Creating a new era of cinema that transcends borders,
                  redefines narratives, and establishes a global standard for
                  storytelling excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
            >
              <div className="text-white/90 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  02. Economic Revolution
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                  Building a $500 million film ecosystem that empowers visionary
                  creators, transforms market dynamics, and generates
                  unprecedented returns for forward-thinking investors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
            >
              <div className="text-white/90 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  03. Industry Transformation
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                  Pioneering innovative distribution models that break
                  traditional barriers, ensuring our stories reach global
                  audiences while maximizing commercial success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="/bg-[#f5f5f1] text-black py-16 px-6 bg-[#db0211]">
        <div className="max-w-7xl mx-auto text-white">
          <div className="max-w-3xl mx-auto text-center mb-16 text-white">
            <h2 className="text-4xl md:text-7xl font-extrabold /text-[#db0211] mb-8 text-white ">
              Alexander Phi
            </h2>
            <p className="text-2xl md:text-3xl /text-gray-700 text-white leading-relaxed mb-8 font-semibold">
              Alexander Phi exists to fund the future of Black excellence at
              scale. We are building a capital-powered platform starting with
              cinema and human centred technology, a powerful engine to shape
              culture and drive global influence. Indeed our horizon is bigger
              will be expanding across industries.
            </p>
            <p className="text-xl md:text-2xl /text-gray-700 text-white leading-relaxed font-semibold">
              Our mission is to unlock the full potential of the Black race by
              creating systems of ownership, innovation, and influence. It's
              about using strategic investment to build wealth, shift
              narratives, and define what comes next. This is about legacy. We
              are here to reshape the creative economy Connect black visionaries
              across continents to a central point of belonging. We're building
              it and we're bringing the right people with us. A future shaped by
              clear identity and rooted in wealth, power and legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white /text-gray-900">
                Innovative Approach
              </h3>
              <p className="text-xl md:text-2xl text-white /text-gray-700 leading-relaxed font-semibold">
                Our models are deliberately engineered to move beyond traditional
                funding gaps and creatively address the bottlenecks that have
                historically limited access, scale, and ownership.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white /text-gray-900">Dual Focus</h3>
              <p className="text-xl md:text-2xl text-white /text-gray-700 leading-relaxed font-semibold">
                Through our production arm, we partner and produce story-first,
                globally resonant films designed for high commercial and
                cultural impact. Simultaneously, our capital arm focuses on
                fundraising, strategic investment partnerships, and risk
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Molding the Future Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 bg-white">
        <div className="flex-1">
          <img
            src="/images/prod.jpeg"
            alt="Molding the Future"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#db0211]">Molding the Future</h2>
          <p className="text-2xl font-semibold mb-4">
            This represents how we have to mold it.
          </p>
          <p className="text-xl md:text-2xl">
            At Alexander Phi, we believe in shaping the future of Black excellence through deliberate innovation and creative vision. Every project is an opportunity to mold new narratives and possibilities.
          </p>
        </div>
      </section>

      {/* Capital Power Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 py-16 px-6 bg-[#f5f5f1]">
        <div className="flex-1">
          <img
            src="/images/fundd.jpeg"
            alt="Capital Power"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#db0211]">Capital Power</h2>
          <p className="text-2xl font-semibold mb-4">
            Fueling the future with strategic investment.
          </p>
          <p className="text-xl md:text-2xl">
            Our capital arm is dedicated to building wealth, driving innovation, and creating opportunities that transform the creative economy.
          </p>
        </div>
      </section>

      {/* About Our Founder Section */}
      <section id="about" className="bg-white text-black py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {/* Left Column: Image Section */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-6 px-8 uppercase tracking-wide text-[#db0211]">
              About Our Founder
            </h2>
            <div className="flex flex-col items-center justify-center bg-black text-white p-6 rounded-lg shadow-xl">
              <img
                src="/images/founder.png"
                alt="Founder Image"
                className="w-6/4 rounded-sm shadow-lg"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">Korede Falomo. O</h2>
                <p className="text-base md:text-lg uppercase text-gray-400 font-semibold">Our Founder</p>
              </div>
            </div>
          </div>
          {/* Right Column: Text Section */}
          <div className="flex flex-col justify-between /p-8">
            {/* Main Content */}
            <div className="mt-4">
              <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                "From the Founder <br />I saw a gap that couldn't be ignored
                anymore. A gap between black creativity, capital and the systems
                needed to scale them."
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                Over the years, working across philanthropy, fundraising, and
                the creative industries, I kept seeing the same pattern .
                Powerful stories, world-changing concepts, and visionary people
                all held back by a lack of structure, funding, and belief at a
                large scale. This lack became my fuel.
              </p>
              <p className="mt-4 text-xl md:text-2xl leading-relaxed font-semibold">
                My background in strategic partnerships and fundraising taught
                me how to move people and money toward meaningful work.   My
                deep love for storytelling; how it warms our hearts and how it
                controls our perception of the world fostered my curiosity about
                filmmaking a huge credit to London Film Academy where i
                developed my skills in production.
              </p>
              <p className="mt-4 text-xl md:text-2xl leading-relaxed font-semibold">
                Overall, my entrepreneurial instinct and solution-focused
                mindset continues to shape her path and my faith keeps me
                grounded in the belief that we are not here to beg for
                inclusion, we are here to build what should have always existed.
                This work is personal. It is generational and urgent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-[#f5f5f1] ">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/logo_small.png" className="w-32" alt="Logo" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            From Korede to Our Investors and Creatives
          </h2>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 italic font-semibold">
            "Alexander Phi is reimagining Black cinema, offering investors a
            chance to be part of a thriving, untapped market with unparalleled
            growth potential."
          </p>
          <div className="relative">
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 font-semibold">
              "Alexander Phi aims to be at forefront of a growing movement in
              global cinema. Our platform not only tells powerful, untold
              stories but also generates lucrative opportunities for investors
              who believe in the future of Black filmmaking."
            </p>
          </div>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto font-semibold">
            "Together, we have the chance to redefine what winning looks like in
            the world of cinema. By joining forces, we're not only making space
            for our voices but proving that our unity can create boundless
            opportunities, inspire change, and elevate our stories to their
            deserved global stage. With Alexander Phi, I'm not just building a
            company; I'm building a movement, a legacy, and a platform where all
            of us can thrive. Let's win this together, because I truly believe
            that when we unite, there's no limit to what we can achieve."
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default About;
