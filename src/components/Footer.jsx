import { NavLink } from "react-router-dom";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const linkClass =
    "text-white/80 hover:text-white transition";

  return (
    <footer className="bg-black text-yellow-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-gradient-to-r from-yellow-700 to-orange-500">
              KASSTECH
            </h2>

            <p className="mt-3 text-white/90 text-sm leading-relaxed">
              Quality laptops and accessories designed for performance, reliability and everyday use.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>

              <NavLink to="/laptops" className={linkClass}>
                Laptops
              </NavLink>

              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaTiktok />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-10 pt-6 text-sm text-white/80 flex flex-col md:flex-row justify-between gap-3">
          <p>© 2026 Kasstech. All Rights Reserved.</p>
          <p>Design by JayTech Solutions</p>
          <p className="text-white/60">
            Made with ❤️ for Tech Geeks
          </p>
        </div>
      </div>
    </footer>
  );
}