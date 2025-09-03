"use client";


import ServiceCard from "@/components/ServiceCard";
import ServicesSectionCard from "@/components/ServicesSectionCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description:
      "When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.",
    image: "uiux.png",
    pointsLeft: ["UI/UX Design", "User Research", "Wireframe & Prototyping"],
    pointsRight: ["Visual UI Design", "Usability Testing", "Interaction Design"],
    toolsimg: "ui.avif",
  },
  {
    title: "Web Development",
    description:
      "We build responsive, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices.",
    image: "webdev.png",
    pointsLeft: ["Frontend Development", "Backend Development", "Responsive Design"],
    pointsRight: ["API Integration", "Database Management", "Performance Optimization"],
   toolsimg: "wev.avif",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop mobile apps that are engaging, user-friendly, and compatible with both Android and iOS platforms.",
    image: "uiux.png",
    pointsLeft: ["Android Apps", "iOS Apps", "Cross-platform Apps"],
    pointsRight: ["UI/UX for Mobile", "App Testing", "App Deployment"],
   toolsimg: "wev.avif",
  },
  {
    title: "SEO",
    description:
      "We optimize your website to rank higher in search engines, increasing visibility, traffic, and driving more qualified leads to your business.",
    image: "uiux.png",
    pointsLeft: ["On-Page SEO", "Keyword Research", "Content Optimization"],
    pointsRight: ["Link Building", "Technical SEO", "Analytics & Reporting"],
    toolsimg: "merkating.avif",
  },
  {
    title: "Marketing",
    description:
      "We create and implement marketing strategies that grow your brand, engage your audience, and drive measurable results.",
    image: "uiux.png",
    pointsLeft: ["Social Media Marketing", "Email Marketing", "Content Marketing"],
    pointsRight: ["Paid Ads", "Brand Strategy", "Analytics & Reporting"],
   toolsimg: "merkating.avif",
  },
];

export default function ServicesSection() {
  return (
    <div className="w-full bg-black">
      <section className=" max-w-7xl mx-auto py-12 px-6">

        <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16 mb-12 rounded-3xl">

      {/* Animated Heading */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-snug">
         Our Services, <br /> Crafted for Excellence
        </h2>
      </motion.div>

    </section>

      <div className="px-4 space-y-16">

        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>

       <ServicesSectionCard />

    </section>
    </div>
  );
}
