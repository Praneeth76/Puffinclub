import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-28 px-4 sm:px-8 md:px-16 lg:px-32 pb-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 tracking-wider">
        GET IN TOUCH
      </h1>
      <p className="text-center text-gray-300 mb-12 sm:mb-16 text-sm sm:text-base">
        We'd love to hear from you. Send us a message and we’ll respond as soon
        as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-400">
              NAME
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-600 py-2 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-400">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-gray-600 py-2 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-400">
              SUBJECT
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b border-gray-600 py-2 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-400">
              MESSAGE
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-b border-gray-600 py-2 bg-transparent focus:outline-none placeholder-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black py-3 px-6 uppercase font-semibold tracking-wide hover:bg-gray-300 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6 text-sm">
          <div>
            <h2 className="text-lg font-bold mb-3">Contact Information</h2>
            <div className="flex items-start gap-3">
              <Mail className="w-5 mt-1" />
              <div>
                <p>hello@noir-fashion.com</p>
                <p>support@noir-fashion.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 mt-1" />
            <div>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 mt-1" />
            <div>
              <p>123 Fashion Street</p>
              <p>Design District</p>
              <p>New York, NY 10001</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 mt-1" />
            <div>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Map Placeholder (Responsive Box) */}
          <div className="bg-gray-800 text-center text-gray-400 py-8 text-xs sm:text-sm mt-8 rounded">
            MAP PLACEHOLDER
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
