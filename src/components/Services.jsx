"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Smartphone, BarChart2 } from "lucide-react";

const SpotlightServices = () => {
  const services = [
    {
      Icon: Code,
      title: "Web Development",
      description: "We build fast and scalable websites tailored for your business.",
      gradient: "",
      iconClass: "text-blue-400",
    },
    {
      Icon: Monitor,
      title: "UI/UX Design",
      description: "Create smooth user experiences and stunning interfaces.",
      gradient: "",
      iconClass: "text-pink-400",
    },
    {
      Icon: Smartphone,
      title: "Mobile Apps",
      description: "High-quality cross-platform apps to grow your digital presence.",
      gradient: "",
      iconClass: "text-green-400",
    },
    {
      Icon: BarChart2,
      title: "SEO & Marketing",
      description: "Boost your visibility and reach more customers instantly and effectively.",
      gradient: "",
      iconClass: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-[60vh] w-full bg-black relative">
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
           {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 uppercase text-sm">what we do</p>
        <h2 className="text-4xl font-bold mt-2 text-white">
          Our <span className="text-purple-400">Services</span> <br />
          
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We offer a range of services to help your business thrive in the digital world.
            From web development to marketing, we've got you covered.
          </p>
        </div>

          <div className="mt-12 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const { Icon, title, description, gradient, iconClass } = service;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`group relative p-8 rounded-3xl   overflow-hidden cursor-pointer border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] `}
                >
                  <div className="relative z-10 text-center">
                    <Icon className={`mx-auto w-12 h-12 mb-4 ${iconClass}`} />
                    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                    <p className="text-gray-200">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotlightServices;
