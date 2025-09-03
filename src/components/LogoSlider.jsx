"use client";

import Marquee from "react-fast-marquee";

const logos = [
  { src: "logo1.webp", alt: "Google" },
  { src: "logo2.webp", alt: "Amazon" },
  { src: "logo3.webp", alt: "Microsoft" },
  { src: "logo4.webp", alt: "Apple" },
  { src: "logo5.webp", alt: "Facebook" },
  { src: "logo6.webp", alt: "IBM" },
  { src: "logo7.webp", alt: "Intel" },
  { src: "logo8.webp", alt: "Netflix" },
  { src: "logo9.webp", alt: "Spotify" },
  { src: "logo10.webp", alt: "Tesla" },
  { src: "logo11.webp", alt: "Adobe" },
  { src: "logo12.webp", alt: "Slack" },
  { src: "logo13.webp", alt: "Twitter" },
  { src: "logo14.webp", alt: "Airbnb" },
  { src: "logo10.webp", alt: "Tesla" },
  { src: "logo11.webp", alt: "Adobe" },
  { src: "logo12.webp", alt: "Slack" },
  { src: "logo13.webp", alt: "Twitter" },
  { src: "logo14.webp", alt: "Airbnb" },
];

export default function LogoSlider() {
  return (
    <section className="w-full bg-black py-8 shadow-lg">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
