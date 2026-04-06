import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-sky-400 font-semibold"
      : "text-slate-300 hover:text-white transition";

  return (
    
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
      <br></br>
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-bold tracking-wide">
          Chris <span className="text-sky-400">Sabbak</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            {t.navHome}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t.navAbout}
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            {t.navProjects}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-lg px-3 py-1 text-sm transition ${
              language === "en"
                ? "bg-sky-400 text-black font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLanguage("it")}
            className={`rounded-lg px-3 py-1 text-sm transition ${
              language === "it"
                ? "bg-sky-400 text-black font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            IT
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#0b1728] md:hidden"
          >
            <div className="section-container flex flex-col gap-4 py-4">
              <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
                {t.navHome}
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
                {t.navAbout}
              </NavLink>
              <NavLink to="/projects" className={navLinkClass} onClick={() => setOpen(false)}>
                {t.navProjects}
              </NavLink>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                  className={`rounded-lg px-3 py-1 text-sm transition ${
                    language === "en"
                      ? "bg-sky-400 text-black font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  EN
                </button>

                <button
                  onClick={() => {
                    setLanguage("it");
                    setOpen(false);
                  }}
                  className={`rounded-lg px-3 py-1 text-sm transition ${
                    language === "it"
                      ? "bg-sky-400 text-black font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}