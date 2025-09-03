"use client";

import React, { useState } from "react";

const subscribers = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto  ">
      <div className=" bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-lg">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-800 opacity-30 blur-3xl -z-10"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Stay in the loop with{" "}
          <span className="italic text-yellow-300">all our updates</span>
        </h2>
        <p className="text-gray-200 mb-8 max-w-xl mx-auto">
          Join hundreds of subscribers and never miss out on the latest news,
          updates, and exclusive offers from our team.
        </p>

        {/* Subscribers Avatars */}
        <div className="flex justify-center -space-x-4 mb-8">
          {subscribers.map((avatar, idx) => (
            <img
              key={idx}
              src={avatar}
              alt={`Subscriber ${idx + 1}`}
              className="w-12 h-12 rounded-full border-2 border-white shadow-md transform hover:scale-110 transition-transform"
            />
          ))}
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center w-full sm:w-3/4 mx-auto gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-5 py-3 rounded-full w-full sm:flex-1 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-yellow-400 bg-purple-700 transition-colors"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Subscribe
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-gray-200 mt-6 text-sm">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
