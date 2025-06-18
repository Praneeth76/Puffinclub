// FILE: src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 'smooth' for nice transitions
    }
  }, [pathname]);

  return null; // No visual output, only side-effect
};

export default ScrollToTop;
