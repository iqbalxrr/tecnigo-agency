// app/components/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    price: "$2,200",
    title: "Website Design",
    description: "Ideal for Startup Owners, MVP Builders",
    features: [
      "Design Style Guide",
      "Responsive across all devices",
      "Unlimited Revisions",
      "Developer Handoff",
    ],
  },
  {
    price: "$3,500",
    title: "Web/Mobile App Design",
    description: "For SaaS & fast MVP launches",
    features: [
      "UX Research",
      "Design System with token",
      "Unlimited Revisions",
      "Developer handoff",
      "Transparent communication",
      "Responsive across all devices",
    ],
    highlight: true,
  },
  {
    price: "$2,950+",
    title: "Monthly Subscription",
    description: "Ideal for Startup or MVP",
    features: [
      "Monthly dedicated designers",
      "Adhoc design support",
      "Right designer for right product",
      "Transparent communication",
    ],
  },
];

const bonuses = [
  {
    title: "Free Design Prototype",
    desc: "Experience your design in action before development.",
  },
  {
    title: "Developer Handoff",
    desc: "We ensure what we design is exactly what gets built.",
  },
  {
    title: "Project Management",
    desc: "Stay on track with our expert project management.",
  },
  {
    title: "Project Consultation",
    desc: "Get professional advice to enhance your project.",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 uppercase text-sm">Pricing Plans</p>
        <h2 className="text-4xl font-bold mt-2">
          Unbeatable <span className="text-purple-400">Value</span> <br />
          Unmatched <span className="text-purple-400">Quality</span>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-2xl p-8 border ${
              plan.highlight
                ? "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                : "border-gray-700"
            } bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]`}
          >
            <h3 className="text-3xl font-bold">{plan.price}</h3>
            <p className="text-gray-400 mt-2">{plan.description}</p>
            <h4 className="mt-4 text-xl text-green-400">{plan.title}</h4>
            <ul className="mt-6 space-y-3 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check size={18} className="text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition">
              Explore More →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Bonus Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">
            Bonuses Worth Over <span className="text-purple-400">$2,500</span> –{" "}
            <span className="text-green-400">Yours Free!</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="rounded-2xl border text-center border-gray-700 p-6 h-36 bg-gradient-to-b from-[#141414] to-[#0d0d0d] hover:border-purple-500 transition"
            >
              <h4 className="font-semibold text-purple-400 mb-2">
                {bonus.title}
              </h4>
              <p className="text-gray-400 text-sm">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
