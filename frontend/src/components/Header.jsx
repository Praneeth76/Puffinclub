import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, UserCircle } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  // Check on mount
  checkAuth();

  // Listen for changes to localStorage (e.g. logout from another tab)
  window.addEventListener("storage", checkAuth);

  // Also check periodically
  const interval = setInterval(checkAuth, 1000);

  return () => {
    window.removeEventListener("storage", checkAuth);
    clearInterval(interval);
  };
}, []);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black shadow-md shadow-white/10 border-b border-white"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">
        {/* Brand Logo */}
        <Link to="/home" className="text-2xl sm:text-3xl font-bold tracking-widest">
          PUFFN CLUB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base lg:text-lg font-medium">
          <Link to="/collections" className="hover:underline underline-offset-4">
            Collections
          </Link>
          <Link to="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <Link to="/orders" className="hover:underline underline-offset-4">
            Orders
          </Link>
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6" />
          </Link>
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6" />
          </Link>

          {isLoggedIn ? (
            <Link to="/profile">
              <UserCircle className="w-6 h-6 hover:text-gray-300" />
            </Link>
          ) : (
            <Link
              to="/signup"
              className="text-sm font-semibold border border-white px-3 py-1.5 rounded hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Vertical Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/20 px-6 py-6 flex flex-col items-start gap-4 text-base font-medium text-white shadow-md">
          <Link
            to="/collections"
            onClick={() => setMenuOpen(false)}
            className="py-1.5 border-b border-white/10 w-full"
          >
            Collections
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="py-1.5 border-b border-white/10 w-full"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-1.5 border-b border-white/10 w-full"
          >
            Contact
          </Link>
          <Link
            to="/orders"
            onClick={() => setMenuOpen(false)}
            className="py-1.5 w-full"
          >
            Orders
          </Link>
          {isLoggedIn ? (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="py-1.5 pt-4 border-t border-white/10 w-full"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="py-1.5 pt-4 border-t border-white/10 w-full"
            >
              Login / Signup
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
