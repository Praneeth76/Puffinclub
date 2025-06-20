import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setProfile({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        address: storedUser.address || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...JSON.parse(localStorage.getItem("user")),
      phone: profile.phone,
      address: profile.address,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signup"); // redirect to home or login
  };

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white px-4 py-30 sm:py-16 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="w-full sm:w-[90%] md:w-[70%] mx-auto">
          <div className="mb-6">
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              disabled
              className="w-full p-3 bg-gray-800 text-white border border-white/20 rounded cursor-not-allowed"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              disabled
              className="w-full p-3 bg-gray-800 text-white border border-white/20 rounded cursor-not-allowed"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-white/20 rounded"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block mb-1 text-sm">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 bg-gray-800 text-white border border-white/20 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition text-sm font-medium"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Logout Button at Bottom */}
      <div className="mt-12 w-full flex justify-center">
        <button
          onClick={handleLogout}
          className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
