"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoSlider from "./LogoSlider";

// Arrow Icon
const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// Typewriter with responsive width
const Typewriter = ({ text, duration = 2 }) => {
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 768) setWidth("60%");
      else setWidth("100%");
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width }}
      transition={{ duration, ease: "linear" }}
      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-1"
    >
      {text}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-2 w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.30), transparent 70%), #000000",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge with avatars + star section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-green-600  shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-green-600  shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-green-600  shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-green-600 shadow-md"
            />
          </div>
          <span className="ml-4 text-sm font-medium text-white bg-gray-800 px-4 py-1 rounded-full shadow-sm">
            ⭐ 100+ Satisfied Clients
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Build Modern Websites With <br />
          <span className="text-green-400">
            <Typewriter text="Tecnigo Agency" />
          </span>
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          We help startups, businesses, and entrepreneurs grow online with
          stunning, responsive, and scalable web solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-8 justify-center"
        >
          <button className="bg-white border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 ">
            Get Started
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <button className="border-2  text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-colors border-white shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Our Portfolio
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-16 pt-16 border-t border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 pb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
      <LogoSlider />
    </section>
  );
};

export default Hero;
