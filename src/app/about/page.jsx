
"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white ">
          About <span className="text-purple-500">Tecnigo</span>
        </h1>
        
        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 text-center">
          At Tecnigo WebDesign Agency, we turn ideas into visually stunning and 
          highly functional digital experiences. Our mission is to empower businesses 
          to grow online with innovative web solutions tailored to their needs.
        </p>

        {/* Our Values */}
        <div className="grid md:grid-cols-3 gap-14 text-center">
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-indigo-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-green-400">Creativity</h2>
            <p className="text-gray-300">
              We design websites that are not just beautiful but also intuitive and engaging.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-indigo-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-green-400">Innovation</h2>
            <p className="text-gray-300">
              We embrace the latest technologies to build modern, scalable, and high-performance web solutions.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-indigo-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-green-400">Reliability</h2>
            <p className="text-gray-300">
              We are committed to delivering projects on time and providing continuous support to our clients.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Ready to take your business online? Let’s create something amazing together.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
