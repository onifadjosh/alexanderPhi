"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedCard,
  AnimatedButton,
} from "@/components/AnimatedSection";

const FilmFund: NextPage = () => {
  const fundPillars = [
    {
      title: "LEGACY CREATION",
      description:
        "Building enduring impact through strategic storytelling and cultural preservation",
    },
    {
      title: "CULTURAL INFLUENCE",
      description:
        "Shaping societal narratives and perceptions through powerful storytelling",
    },
    {
      title: "ECONOMIC ADVANCEMENT",
      description:
        "Generating wealth and opportunity across industries through borderless production",
    },
    {
      title: "MARKET TRANSFORMATION",
      description:
        "Redefining cultural perceptions and creating new market paradigms",
    },
  ];

  return (
    <>
      <Head>
        <title>Alexander Phi - Film Fund</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-white">
        <Nav />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="/videos/homepage.mp4" type="video/mp4" />
            </video> */}
            <Image
              src="/images/cctc.PNG"
              alt="Fund"
              fill
              className="object-cover object-bottom"
            />
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-9xl font-extrabold text-white mb-8 tracking-tight"
            >
              Film Fund
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Beyond Financial Returns: Creating Legacy Through Storytelling
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-[#db0211] text-white">
          {/* Vision Statement */}
          <AnimatedSection direction="up" className="mb-32">
            <div className="max-w-3xl mx-auto text-center mb-16 text-white">
              <h2 className="text-4xl md:text-8xl font-extrabold mb-8 text-white ">
                Our Vision
              </h2>
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-semibold">
                {/* We believe the true value of investment goes beyond financial returns. 
                It's about the reward and impact of the Legacy it creates. */}
                Alexander Phi exists to fund the future of Black excellence at
                scale. We are building a capital-powered platform starting with
                cinema and human centred technology, a powerful engine to shape
                culture and drive global influence. Indeed our horizon is bigger
                will be expanding across industries.
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
                {/* We exist because storytelling is one of the most powerful vehicles of societal influence, 
                cultural preservation, and economic advancement. */}
                Our mission is to unlock the full potential of the Black race by
                creating systems of ownership, innovation, and influence. It's
                about using strategic investment to build wealth, shift
                narratives, and define what comes next. This is about legacy. We
                are here to reshape the creative economy Connect black
                visionaries across continents to a central point of belonging.
                We're building it and we're bringing the right people with us. A
                future shaped by clear identity and rooted in wealth, power and
                legacy.
              </p>
            </div>
          </AnimatedSection>

          
          <AnimatedSection direction="up" className="mb-32">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-7xl font-extrabold mb-8 text-white ">
                Your Investment
              </h2>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
                Your investment with Alexander Phi is more than a financial
                commitment. It is a psychological and cultural stake in shaping
                the economic future of the Black race through the most universal
                medium of cinema.
              </p>
            </div>
          </AnimatedSection>

         
          <AnimatedSection direction="up" className="text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white ">
                Join the Movement
              </h2>
              <p className="text-xl md:text-2xl text-white mb-12 font-semibold">
                Be part of a transformative journey that goes beyond traditional
                investment. Together, we'll create lasting impact through the
                power of storytelling.
              </p>
              <AnimatedButton
                href="mailto:korede@alexanderphi.com"
                className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full text-lg hover:bg-gray-900 transition-colors duration-200"
              >
                Partner With Us
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FilmFund;
