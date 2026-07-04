import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaInstagram, FaLaptop, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "hover:text-yellow-700";

  return (
    <nav className="bg-black shadow-md relative z-50">

      {/* NAVBAR TOP */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
  <NavLink
    to="/"
    className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
  >
    <FaLaptop className="text-yellow-500 text-base sm:text-lg md:text-xl lg:text-2xl" />

    <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
      KASSTECH
    </span>
  </NavLink>
</h1>

        <div className="text-orange-500 hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/laptops" className={linkClass}>Laptops</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button
  className="md:hidden text-3xl text-yellow-600 p-1 relative z-50"
  onClick={() => setOpen(!open)}
>
  {open ? <HiOutlineX /> : <HiOutlineMenu />}
</button>
      </div>

      {/* 🔥 OVERLAY (click anywhere to close) */}
      {open && (
  <div
    className="fixed inset-0 bg-black/40 z-40"
    onClick={() => setOpen(false)}
  />
)}

      {/* MOBILE MENU */}
      <div
  className={`md:hidden fixed text-gray-300 top-0 right-0 h-64 w-64 bg-black shadow-xl transform transition-transform duration-300 z-50 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>

        {/* LINKS */}
        <div className="flex flex-col p-4 gap-4 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/laptops" onClick={() => setOpen(false)} className={linkClass}>
            Laptops
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* SOCIAL ICONS */}
        <div className="absolute bottom-0 w-full p-6 border-t">
          <p className="text-sm font-semibold text-gray-500 mb-3">
            Follow Us
          </p>

          <div className="flex gap-5 text-yellow-700 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            > 
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}