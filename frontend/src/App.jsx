import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout";
import IntroLanding from "./pages/IntroLanding";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      {/* Intro animation shown separately */}
      <Route path="/" element={<IntroLanding />} />

      {/* Rest of the pages inside Layout */}
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/collections"
        element={
          <Layout>
            <Collections />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/orders"
        element={
          <Layout>
            <Orders />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route path="/product/:id" element={<Layout><SingleProduct /></Layout>} />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;
