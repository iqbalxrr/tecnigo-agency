
"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaIndustry, FaSearch, FaBolt, FaHandshake } from "react-icons/fa";
import { MdSupport } from "react-icons/md";

const services = [
  {
    icon: <FaLightbulb className="text-3xl text-white" />,
    title: "User-Centric Approach",
    desc: "We prioritize the needs and behaviors of your users to ensure intuitive designs that deliver exceptional experiences.",
  },
  {
    icon: <MdSupport className="text-3xl text-white" />,
    title: "Lifetime Support",
    desc: "We offer continuous assistance, updates, and optimizations to keep your design performing at its best forever.",
  },
  {
    icon: <FaIndustry className="text-3xl text-white" />,
    title: "Cross-Industry Expertise",
    desc: "Our team has experience across various industries so we can deliver personalized solutions that meet unique needs.",
  },
  {
    icon: <FaSearch className="text-3xl text-white" />,
    title: "SEO & Mobile Optimization",
    desc: "We ensure your designs are optimized for search engines and mobile devices to drive traffic and improve engagement.",
  },
  {
    icon: <FaBolt className="text-3xl text-white" />,
    title: "Fast Turnaround Times",
    desc: "Get high-quality designs delivered promptly without sacrificing creativity or functionality to meet deadlines efficiently.",
  },
  {
    icon: <FaHandshake className="text-3xl text-white" />,
    title: "Transparent Process",
    desc: "We maintain clear communication throughout the project and ensure you’re always informed in key decisions.",
  },
];

export default function ServicesSectionCard() {
  return (
    <section className="relative py-20  text-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <span className="px-4 py-1 text-sm rounded-full bg-green-800/40 border border-green-500 text-green-300">
          Design Excellence
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl font-bold">
          Responsive <span className="italic text-purple-300">UI/UX Design</span>{" "}
          Services for <span className="italic text-purple-300">Successful Brands</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/40 to-purple-800/20 border border-purple-700/30 shadow-lg"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 transition-all font-semibold">
          Start Project →
        </button>
      </div>
    </section>
  );
}
