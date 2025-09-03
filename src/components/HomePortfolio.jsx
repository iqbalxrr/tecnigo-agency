"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const projects = {
  web: [
    { title: "Corporate Website", description: "A professional website designed for corporate clients with modern UI.", image: "https://i.ibb.co.com/hFV20BFx/original-54e60c284f266d2fff39a5265cdca4c8.webp" },
    { title: "E-commerce Platform", description: "A fully responsive online store with seamless checkout experience.", image: "https://i.ibb.co.com/LXBJWLWt/Screenshot-2025-06-16-154744.png" },
    { title: "Portfolio Showcase", description: "A creative portfolio website highlighting projects and achievements.", image: "https://i.ibb.co.com/N6Zkw6y7/different-ui-ux-gui-screens-600nw-1724285374.webp" },   
    { title: "Corporate Redesign", description: "Revamped corporate website with updated branding and layout.", image: "https://i.ibb.co.com/hFV20BFx/original-54e60c284f266d2fff39a5265cdca4c8.webp" },
  ],
  uiux: [
    { title: "Mobile App Landing", description: "Landing page designed with user engagement and conversion in mind.", image: "https://source.unsplash.com/400x300/?ui,ux" },
    { title: "Startup Landing Page", description: "Clean UI for startup landing with clear CTAs and animations.", image: "https://source.unsplash.com/400x300/?startup,ui" },
  ],
  mobile: [
    { title: "Travel Booking App", description: "Mobile app for planning and booking trips effortlessly.", image: "https://source.unsplash.com/400x300/?mobile,travel" },
    { title: "Food Delivery App", description: "Reliable food delivery app with real-time tracking.", image: "https://source.unsplash.com/400x300/?food,app" },
  ],
  graphic: [
    { title: "Brand Logo Design", description: "Creative logos tailored to brand identity and values.", image: "https://source.unsplash.com/400x300/?logo,design" },
    { title: "Event Poster Design", description: "Eye-catching posters for events and marketing campaigns.", image: "https://source.unsplash.com/400x300/?poster,graphic" },
  ],
};

const tabs = [
  { id: "web", title: "Web Development", gradient: "bg-gradient-to-r from-blue-400 to-indigo-500" },
  { id: "uiux", title: "UI/UX Design", gradient: "bg-gradient-to-r from-pink-400 to-red-500" },
  { id: "mobile", title: "Mobile App", gradient: "bg-gradient-to-r from-green-400 to-teal-500" },
  { id: "graphic", title: "Graphic Design", gradient: "bg-gradient-to-r from-yellow-400 to-orange-500" },
];

export default function HomePortfolio() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="min-h-screen w-full relative bg-black">
      <section className="py-20 relative z-10">
        {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 uppercase text-sm">what we do</p>
        <h2 className="text-4xl font-bold mt-2">
          Our <span className="text-purple-400">Portfolio</span> <br />
          
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of our latest projects showcasing our expertise and creativity.
            Explore our diverse portfolio and see how we bring ideas to life.
          </p>
        </div>
        <div className="text-center">
          {/* Tabs */}
          <div className="flex justify-center mt-10 mx-2">
            <div className="flex rounded-2xl bg-slate-200/30 p-1 backdrop-blur-sm border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 rounded-xl px-2 md:px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white shadow-lg" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && <div className={`absolute inset-0 rounded-xl ${tab.gradient} z-0`} />}
                    <span className="relative z-10">{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Marquee Slider */}
          <div className="mt-12">
            <Marquee gradient={false} speed={50} direction="left">
              <div className="flex">
                {projects[activeTab].map((project, index) => (
                  <div
                    key={index}
                    className="group w-80 mx-2 bg-gradient-to-r from-purple-900 to-purple-500 relative overflow-hidden rounded-xl shadow-lg cursor-pointer border border-purple-500"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="mt-12">
            <Marquee gradient={false} speed={50} direction="right">
              <div className="flex">
                {projects[activeTab].map((project, index) => (
                  <div
                    key={index}
                    className="group w-80 mx-2 bg-gradient-to-r from-purple-900 to-purple-500 relative overflow-hidden rounded-xl shadow-lg cursor-pointer border border-purple-500"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
