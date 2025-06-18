import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.6 3h3.7l3.8 5.2 3.5-5.2H21l-5.6 8L21 21h-3.7l-4.1-5.8L8.4 21H3l6.1-8L3 3h3.6l3.9 5.7L14.4 3z" />
  </svg>
);

const Footer = () => (
  <footer className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 border-t border-white mt-16 bg-black text-white shadow-inner shadow-white/10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
      {/* Brand */}
      <div className="font-bold text-xl text-center md:text-left">
        <Link to="/">PUFFIN CLUB</Link>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 text-sm">
        © 2025 Puffin Club. All rights reserved.
      </div>

      {/* Social + Contact */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="Twitter (X)"
          >
            <XIcon />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-gray-400 break-all">
          info@puffinclubbrand.com
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
