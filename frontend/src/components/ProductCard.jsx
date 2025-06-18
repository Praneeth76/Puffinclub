import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, price, image, tag, rating = 4 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-black text-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 border border-white/20 group cursor-pointer"
    >
      {/* Tag */}
      {tag && (
        <span className="absolute top-2 left-2 bg-red-500 text-xs px-2 py-1 rounded z-10 font-bold">
          {tag}
        </span>
      )}

      {/* Image */}
      <div className="aspect-[4/5] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold truncate">{title}</h3>

      {/* Price */}
      <p className="text-gray-300 mb-1">{price}</p>

      {/* Rating */}
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-500"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.562-.955L10 0l2.951 5.955 6.562.955-4.757 4.635 1.122 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
