import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
  ];

  const socials = [
    { icon: <FaGithub size={17} />, link: "https://github.com/priyanshuuuraj" },
    { icon: <FaLinkedin size={17} />, link: "https://www.linkedin.com/in/priyanshu-raj-82b197286/" },
    { icon: <FaInstagram size={17} />, link: "https://www.instagram.com/cb_alpha_clicks?igsh=ZTcwczRyM3QwOTZx" },
    { icon: <FaTwitter size={17} />, link: "#" },
  ];

  return (
    <footer
      className="relative py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        .footer-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: rgba(250,204,21,0.8); }
        .footer-social {
          color: rgba(255,255,255,0.3);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-social:hover {
          color: #facc15;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Top border */}
      <div
        className="w-full h-px mb-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(250,204,21,0.2), transparent)' }}
      />

      <div className="flex flex-col items-center gap-7">

        {/* Logo / Name */}
        <div
          className="text-lg font-semibold"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <span style={{ color: 'rgba(250,204,21,0.45)' }}>&lt;</span>
          <span className="text-white/70 mx-1">Priyanshu Raj</span>
          <span style={{ color: 'rgba(250,204,21,0.45)' }}>/&gt;</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="footer-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-16 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(250,204,21,0.2), transparent)' }}
        />

        {/* Copyright */}
        <p
          className="text-xs text-white/20"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.05em' }}
        >
          © 2026 Priyanshu Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;