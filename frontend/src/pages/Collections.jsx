import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const categories = ['All', 'Basics', 'Outerwear', 'Dresses', 'Bottoms', 'Accessories'];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory.toLowerCase());

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-20 text-center bg-neutral-900 text-white min-h-screen">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest mb-12"
      >
        COLLECTIONS
      </motion.h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-1 sm:pb-2 text-sm sm:text-base tracking-wide border-b-2 transition-all duration-300 ${
              activeCategory === category
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:border-white/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default Collections;
