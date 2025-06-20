import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    address: "",
    areaCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
    // Add API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login to PUFFN CLUB" : "Join PUFFN CLUB"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <select
          name="userType"
          className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="">Select User Type</option>
          <option value="customer">Customer</option>
          <option value="delivery">Delivery Boy</option>
        </select>

        {!isLogin && formData.userType === "customer" && (
          <textarea
            name="address"
            placeholder="Address"
            className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
            value={formData.address}
            onChange={handleChange}
          />
        )}

        {!isLogin && formData.userType === "delivery" && (
          <input
            type="text"
            name="areaCode"
            placeholder="Delivery Area Code"
            className="w-full mb-3 p-2 border border-gray-400 bg-gray-700 text-white rounded"
            value={formData.areaCode}
            onChange={handleChange}
          />
        )}

        <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 cursor-pointer">
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-300 underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
