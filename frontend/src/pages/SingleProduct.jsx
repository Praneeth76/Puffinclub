import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import products from '../data/products';

const sizes = ['S', 'M', 'L', 'XL'];
const staticReviews = [
  {
    name: 'Ananya S.',
    review: 'Great quality and very stylish. Loved the fabric!',
    rating: 5,
  },
  {
    name: 'Ravi K.',
    review: 'Fits perfectly and feels premium. Would definitely recommend.',
    rating: 4,
  },
  {
    name: 'Neha D.',
    review: 'Comfortable and goes well with everything. Value for money!',
    rating: 5,
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-3xl font-semibold">Product not found</h1>
      </div>
    );
  }

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="min-h-screen bg-neutral-900 text-white px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* Image */}
        <div className="bg-white/10 p-8 rounded">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-300">{product.price}</p>
          <p className="text-gray-400 text-sm">
            Discover unmatched comfort and style with this premium design. Limited stock, high demand!
          </p>

          {/* Size Selection */}
          <div>
            <h3 className="mb-2 font-semibold">Select Size:</h3>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-1 rounded transition font-medium ${
                    selectedSize === size
                      ? 'bg-white text-black border-white'
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <h3 className="mb-2 font-semibold">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={decrement}
                className="w-10 h-10 border border-white rounded hover:bg-white hover:text-black transition text-xl"
              >
                −
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increment}
                className="w-10 h-10 border border-white rounded hover:bg-white hover:text-black transition text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-10 w-fit bg-white text-black px-6 py-3 uppercase tracking-wide font-semibold rounded hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </motion.div>

      {/* Static Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {staticReviews.map((review, index) => (
            <div
              key={index}
              className="border border-white/20 p-4 rounded bg-white/5"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="text-yellow-400">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-300 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SingleProduct;
