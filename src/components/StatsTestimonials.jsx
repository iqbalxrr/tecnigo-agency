"use client";

import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    name: "James Mid",
    role: "Project Manager, Frankfurt Rhein Main GmbH",
    company: "Clutch",
    rating: 5,
    feedback:
      "A standout IT company in providing tailored solutions that align with client objectives and drive success.",
    details:
      "Zaag efforts improved efficiency metrics, reduced processing time, and increased task completion rates and cost savings. Their project management was highly effective and customer-centric. They consistently delivered items on time and maintained open and transparent communication.",
    image: "https://i.ibb.co/dSL68mL/Gemini-Generated-Image-zdu9dkzdu9dkzdu9.png",
  },
  {
    name: "Sara Lee",
    role: "Founder, Creative Studio",
    company: "GoodFirms",
    rating: 5,
    feedback:
      "Highly recommend! Their web solutions are modern, fast, and very scalable.",
    details:
      "They listened carefully to our requirements and delivered beyond expectations. Communication was seamless throughout the project.",
    image: "https://i.ibb.co/Mbz9b18/Gemini-Generated-Image-y3znwcy3znwcy3zn.png",
  },
  {
    name: "John Smith",
    role: "CTO, Tech Corp",
    company: "DesignRush",
    rating: 4,
    feedback:
      "Amazing experience working with this team. They delivered everything on time and exceeded expectations.",
    details:
      "Their dedication and professionalism stood out. We look forward to more collaborations in the future.",
    image: "https://i.ibb.co/JjFZCHFz/Gemini-Generated-Image-caq05ocaq05ocaq0.png",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading + Arrows */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Clients <span className="text-purple-400">Feedback</span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-500/20 transition"
            >
              <IoChevronBack size={20} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-500/20 transition"
            >
              <IoChevronForward size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Testimonial Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
              {/* Left - Image */}
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-2xl border border-gray-700 w-full h-[400px] object-cover shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Right - Card */}
              <div className="rounded-2xl  h-[400px] p-6 border border-gray-700 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition">
                {/* Company + Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-lg text-green-400">
                    {testimonial.company}
                  </span>
                  <span className="text-yellow-400 text-xl">
                    {"★".repeat(testimonial.rating)}
                  </span>
                </div>

                {/* Feedback */}
                <p className="text-lg font-semibold text-white mb-4">
                  "{testimonial.feedback}"
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 lg:line-clamp-4 xl:line-clamp-none">
                  {testimonial.details}
                </p>

                {/* Client Info */}
                <h3 className="text-lg font-semibold text-purple-400">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSection;
