import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Planner", path: "/planner" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F0A2B]/80 backdrop-blur-xl border-b border-violet-900/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white font-bold text-3xl"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center shadow-lg">
            <FaPlaneDeparture size={20} />
          </div>

          <span className="tracking-wide">
            VoyageAI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ${
                  isActive
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">

          <button
            className="bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold"
          >
            Get Started
          </button>

        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={28} />
          ) : (
            <FaBars size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#14102F] border-t border-violet-900">

          <div className="flex flex-col px-6 py-6 gap-6">

            {navItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }
              >
                {item.name}
              </NavLink>

            ))}

            <button
              className="mt-4 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-xl py-3 font-semibold"
            >
              Get Started
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}