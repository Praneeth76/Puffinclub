import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const IntroLanding = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 1200); // Wait before zoom starts

    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 3000); // Navigate after total duration

    return () => {
      clearTimeout(startTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key="logo"
          initial={{ scale: 1, opacity: 1 }}
          animate={
            startAnimation
              ? { scale: 20, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 1.8 }}
          className="z-10"
        >
          <img src={logo} alt="Logo" className="w-64 h-64 object-contain" />
        </motion.div>

        {!startAnimation && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white text-xl mt-4 tracking-widest font-semibold"
          >
            STAY IN STYLE
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroLanding;
