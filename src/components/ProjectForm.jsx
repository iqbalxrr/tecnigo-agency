"use client";

import React, { useState } from "react";

export default function ProjectForm() {
  const [budget, setBudget] = useState("");

  return (
    <section className="w-full min-h-screen flex justify-center items-center  bg-black py-16">
      <div className=" p-8 md:p-12 flex flex-col md:flex-row max-w-7xl w-full">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6 pr-6">
          <h2 className="text-4xl font-bold text-white">
            Tell Us Your <br />
            <span className="italic font-medium text-purple-600">Amazing Project Here</span>
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 ">
              <span className="text-purple-600">✔</span>
              Expect a response from us within 24 hours
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-600">✔</span>
              We’re happy to sign an NDA upon request.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-600">✔</span>
              Get access to a team of dedicated product specialists.
            </li>
          </ul>
          <div className=" border border-purple-400 overflow-hidden rounded-2xl">
        <video
        className=" w-full h-[40vh] object-cover "
        src="AgencyVideo.mp4"
        autoPlay
        muted
        loop
        />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-8">
          <form className="space-y-5 xl:space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email & WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="yourmail@gmail.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Whatsapp Number <span className="text-gray-300">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="1 123 1234567"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Project Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-3">
                Project Budget
              </label>
              <div className="flex flex-wrap gap-3 ">
                {[
                  "Less than $5K",
                  "$5K - $10K",
                  "$10K - $20K",
                  "$20K - $50K",
                  "More than $50K",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setBudget(item)}
                    className={`px-4 py-2 rounded-md border ${
                      budget === item
                        ? "bg-purple-600 text-white border-purple-600"
                        : "border-gray-300 text-gray-300 hover:border-purple-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Project Details
              </label>
              <textarea
                placeholder="I want to redesign my website.."
                rows="4"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
            >
              Let’s Connect →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
