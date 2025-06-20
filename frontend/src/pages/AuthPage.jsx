import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    address: "",
    areaCode: "",
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

    // Simulate storing a token and user data
    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      userType: formData.userType,
      ...(formData.userType === "customer" && { address: formData.address }),
      ...(formData.userType === "delivery" && { areaCode: formData.areaCode }),
    };

    localStorage.setItem("token", "mock-token"); // Replace with real token later
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to home
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 text-white p-6 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
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
          className="w-full mb-3 p-3 sm:p-2 border border-gray-400 bg-gray-700 text-white text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-white/30 transition"
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
            required
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
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-300 underline hover:text-white transition"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
