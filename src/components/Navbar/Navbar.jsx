import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        .nav-logo { font-family: 'Outfit', sans-serif; }
        .nav-link {
          position: relative;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #facc15, #f59e0b);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #facc15; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: #facc15; }
        .nav-link.active::after { width: 100%; }
        .social-icon {
          color: rgba(255,255,255,0.35);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .social-icon:hover {
          color: #facc15;
          transform: translateY(-2px);
        }
        .mobile-menu-enter {
          animation: slideDown 0.2s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)   translateX(-50%); }
        }
      `}</style>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "py-3 bg-[#09090f]/80 backdrop-blur-xl border-b border-yellow-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="nav-logo text-base font-semibold cursor-pointer select-none">
            <span style={{ color: 'rgba(250,204,21,0.5)' }}>&lt;</span>
            <span className="text-white/80 mx-0.5">Priyanshu</span>
            <span style={{ color: 'rgba(250,204,21,0.5)' }}>/</span>
            <span className="text-white/80 mx-0.5">Raj</span>
            <span style={{ color: 'rgba(250,204,21,0.5)' }}>&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/priyanshuuuraj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-raj-82b197286/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400/70 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mobile-menu-enter absolute top-full left-1/2 w-4/5 mt-2 bg-[#09090f]/90 backdrop-blur-xl border border-yellow-500/10 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:hidden"
            style={{ transform: 'translateX(-50%)' }}
          >
            <ul className="flex flex-col items-center space-y-1 py-5">
              {menuItems.map((item) => (
                <li key={item.id} className="w-full text-center">
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-yellow-400"
                        : "text-white/40 hover:text-white/70"
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-3 flex space-x-5">
                <a href="https://github.com/priyanshuuuraj" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;