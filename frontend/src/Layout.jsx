import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <div className="bg-neutral-900 text-white font-sans min-h-screen">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
