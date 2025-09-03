"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Explore All",
  "Automotive",
  "Beauty & Cosmetics",
  "Business Consulting",
  "Construction",
  "EdTech",
  "Entertainment",
  "Fashion & Apparel",
  "Fintech",
  "Transportation & Logistics",
];

// Dummy projects for demo (add more than 12 to see pagination)
const projects = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: "This is a sample project description for testing pagination.",
  category: i % 2 === 0 ? "EdTech" : "Fintech",
  image: "https://i.ibb.co/hFV20BFx/original-54e60c284f266d2fff39a5265cdca4c8.webp",
  slug: `project-${i + 1}`,
}));

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Explore All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  // Filtered projects
  const filteredProjects =
    selectedCategory === "Explore All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black">
      <section className="pt-12  pb-40 px-6 max-w-7xl mx-auto min-h-screen ">
      <section className=" bg-gradient-to-r from-purple-900 to-purple-700 py-16 mb-12 rounded-3xl">
        {/* Animated Heading */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-snug">
            Creative Ideas That Inspire, <br /> Results That Last
          </h2>
        </motion.div>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // reset to first page when category changes
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      {currentProjects.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ scale: 1.03 }}
              className="bg-purple-950 shadow-md rounded-2xl overflow-hidden cursor-pointer border border-purple-500"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-b-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-purple-300 text-black rounded-full">
                    {project.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg font-medium">
            🚫 No projects found in this category
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {/* Prev button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
    </div>
  );
}
