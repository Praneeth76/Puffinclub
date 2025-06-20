import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const LogoIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 bg-black text-white text-center"
    >
      <motion.img
        src={logo}
        alt="Puffin Club Logo"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        STAY IN STYLE
      </motion.h1>

      <motion.div
        className="h-1 bg-white w-16 sm:w-24 mt-4 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default LogoIntro;