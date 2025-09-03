
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="bg-purple-950 shadow-md rounded-2xl overflow-hidden cursor-pointer border border-purple-500 "
    >
      {/* Top Image */}
      {service.image && (
        <div className="w-full h-[450px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8 md:p-12 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {service.title}
        </h2>
        <p className="text-gray-300 mb-8">{service.description}</p>

        {/* Service Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            {service.pointsLeft.map((point, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2 text-gray-300"
              >
                {point}
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {service.pointsRight.map((point, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2 text-gray-300"
              >
                {point}
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex space-x-4">
          <img src={service.toolsimg} alt="" className=" h-8 " />
        </div>
      </div>
    </motion.div>
  );
}
