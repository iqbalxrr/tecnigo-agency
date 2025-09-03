"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Michael Smith",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Sara Lee",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "David Brown",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const AboutTeam = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Meet Our <span className="text-purple-400">Team</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          At Tecnigo, our team combines creativity, expertise, and dedication to
          deliver outstanding web solutions.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden cursor-pointer border  bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition"
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover rounded-t-2xl"
              />

              {/* Overlay Info */}
              <motion.div
                variants={{
                  rest: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full bg-black/90 backdrop-blur-md p-4 flex flex-col items-center border-t border-purple-500"
              >
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <span className="text-gray-400 text-sm mb-3">
                  {member.role}
                </span>
                <div className="flex space-x-4">
                  <a href={member.socials.linkedin}>
                    <Linkedin className="w-5 h-5 text-purple-400 hover:text-purple-300 transition" />
                  </a>
                  <a href={member.socials.twitter}>
                    <Twitter className="w-5 h-5 text-purple-400 hover:text-purple-300 transition" />
                  </a>
                  <a href={member.socials.instagram}>
                    <Instagram className="w-5 h-5 text-purple-400 hover:text-purple-300 transition" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
