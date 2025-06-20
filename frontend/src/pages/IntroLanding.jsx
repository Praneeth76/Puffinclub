import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const IntroLanding = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // Wait 3s before animation

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3800); // Start fade-out just before navigation

    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 5000); // Smooth navigation delay

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <motion.div
      className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AnimatePresence>
        <motion.div
          key="logo"
          initial={{ scale: 1, opacity: 1 }}
          animate={
            startAnimation
              ? { scale: 20, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 2.2, ease: "easeInOut", delay: startAnimation ? 1 : 0 }}
          className="z-10"
        >
          <img src={logo} alt="Logo" className="w-64 h-64 object-contain" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-xl mt-4 tracking-widest font-semibold"
        >
          STAY IN STYLE
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
};

export default IntroLanding;