import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const About = () => {
  const storyParagraphs = [
    "Welcome to the Puffin Club — a cozy corner of the world where creativity, individuality, and comfort meet fashion.",
    "Born from a love for uniqueness and the bold charm of puffins, our brand stands for those who don't just follow trends — they create them.",
    "Every piece we design tells a story — a tale of confidence, sustainability, and style stitched with passion and purpose.",
    "From streetwear rebels to quiet trendsetters, Puffin Club is a community that embraces the quirky, the colorful, and the unapologetically authentic.",
    "Join the club. Wear your story. Fly high like a puffin.",
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white px-4 sm:px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center justify-center">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 sm:mb-12 text-center tracking-wider"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        About Puffin Club
      </motion.h1>

      <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
        {storyParagraphs.map((para, index) => (
          <motion.p
            key={index}
            className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default About;
