"use client";

import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" }
    ],
    Services: [
      { name: "Web Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Consulting", href: "#" }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" }
    ]
  };

  const socialLinks = [
    { label: "Twitter", href: "#", icon: <FaTwitter /> },
    { label: "Instagram", href: "#", icon: <FaInstagram /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
    { label: "YouTube", href: "#", icon: <FaYoutube /> }
  ];

  return (
    <footer className="w-full bg-[#240E35] text-gray-300 py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 py-12">
          {/* Logo & Contact */}
          <div className="col-span-full lg:col-span-2 text-center lg:text-left">
            <a href="#" className="inline-flex items-center justify-center lg:justify-start mb-4">
              <img src="/tecnigo-logo.png" alt="Tecnigo Logo" className="h-10 w-auto" />
            </a>
            <p className="text-gray-300 mb-4">
              Trusted by clients worldwide. Have questions? Reach out to us!
            </p>
            <a
              href="#"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-6 py-2 rounded-full transition"
            >
              Contact Us
            </a>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-indigo-400 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 flex flex-col lg:flex-row items-center justify-between">
          <span className="text-gray-400 text-sm">
            © 2025 <strong>Tecnigo</strong>. All rights reserved.
          </span>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center hover:bg-indigo-500 transition-colors text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
