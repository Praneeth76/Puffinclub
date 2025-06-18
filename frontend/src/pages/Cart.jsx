import React from "react";

const Cart = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen pt-28 px-4 sm:px-6 lg:px-10 pb-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center lg:text-left">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center border border-white/10 bg-black/30 p-4 shadow-md rounded-md gap-4">
            <img
              src="https://rememberyouwilldie.de/cdn/shop/products/RYWD-Februar2023-VisionShirtWhite02.jpg?v=1675719840&width=823"
              alt="Essential Tee"
              className="w-24 h-28 object-cover rounded"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold">
                Essential Tee
              </h2>
              <p className="text-sm text-gray-400">Size: M</p>
              <div className="flex items-center justify-center sm:justify-start mt-2 space-x-3">
                <button className="border border-white/20 px-2 rounded hover:bg-white/10 transition">
                  −
                </button>
                <span>2</span>
                <button className="border border-white/20 px-2 rounded hover:bg-white/10 transition">
                  +
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold">$190</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center border border-white/10 bg-black/30 p-4 shadow-md rounded-md gap-4">
            <img
              src="https://images.femmeconnection.com.au/products/roxy-crop-blazer-jacket-j505947-navy-200--v1-original.jpg"
              alt="Minimal Blazer"
              className="w-24 h-28 object-cover rounded"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold">
                Minimal Blazer
              </h2>
              <p className="text-sm text-gray-400">Size: L</p>
              <div className="flex items-center justify-center sm:justify-start mt-2 space-x-3">
                <button className="border border-white/20 px-2 rounded hover:bg-white/10 transition">
                  −
                </button>
                <span>1</span>
                <button className="border border-white/20 px-2 rounded hover:bg-white/10 transition">
                  +
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold">$295</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 border border-white/10 bg-black/40 p-6 shadow-lg rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            Order Summary
          </h2>
          <div className="flex justify-between mb-2 text-sm sm:text-base">
            <span>Subtotal</span>
            <span>$485</span>
          </div>
          <div className="flex justify-between mb-2 text-sm sm:text-base">
            <span>Shipping</span>
            <span className="text-green-400 font-semibold">Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg sm:text-xl mt-4 mb-6">
            <span>Total</span>
            <span>$485</span>
          </div>
          <button className="w-full bg-white text-black py-3 font-semibold rounded hover:bg-gray-200 transition">
            Proceed to Checkout
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            Free shipping on orders over $200
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
