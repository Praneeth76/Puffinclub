import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products.js";

const heroImages = [
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
  "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61",
  "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute top-0 left-0 w-full h-full">
          {heroImages.map((image, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                opacity: index === i ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 px-4 text-center">
          <motion.h1 className="flex flex-wrap justify-center text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider leading-snug text-white">
            {"STAY IN STYLE".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 w-full flex justify-center gap-3 z-10">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border border-white ${
                index === i ? "bg-white" : "bg-white/20"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide mb-10 text-white">
          Featured Products
        </h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10"
        >
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        <button
          onClick={() => navigate("/collections")}
          className="mt-4 bg-black text-white px-6 py-3 uppercase tracking-wider font-semibold hover:bg-gray-900 transition rounded cursor-pointer border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Load More
        </button>
      </motion.section>
    </section>
  );
};

export default Home;
