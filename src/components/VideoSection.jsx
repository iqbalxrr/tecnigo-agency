
"use client";

import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className=" w-full h-[95vh] relative bg-black flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="AgencyVideo.mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
     
    </section>
  );
};

export default VideoSection;
