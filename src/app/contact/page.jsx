
"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-indigo-500">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 text-center">
          Have a project in mind or want to work together? Reach out to us, and we’ll respond as quickly as possible.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex flex-col items-center">
            <Mail className="w-10 h-10 text-indigo-400 mb-4"/>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">Email</h3>
            <p className="text-gray-300">info@tecnigo.com</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex flex-col items-center">
            <Phone className="w-10 h-10 text-indigo-400 mb-4"/>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">Phone</h3>
            <p className="text-gray-300">+880 123 456 789</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex flex-col items-center">
            <MapPin className="w-10 h-10 text-indigo-400 mb-4"/>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">Address</h3>
            <p className="text-gray-300">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto">
          <form className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg  text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg  text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-lg text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
