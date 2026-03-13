import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 pb-28 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(250,204,21,0.25) !important;
          box-shadow: 0 20px 50px rgba(250,204,21,0.08), 0 4px 20px rgba(0,0,0,0.5) !important;
        }
        .project-card:hover .project-img {
          transform: scale(1.04);
        }
        .project-img {
          transition: transform 0.4s ease;
        }
        .tag-pill {
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          color: rgba(250,204,21,0.6);
          background: rgba(250,204,21,0.06);
          border: 1px solid rgba(250,204,21,0.12);
          padding: 3px 10px;
          border-radius: 9999px;
        }
        .modal-overlay {
          animation: fadeIn 0.2s ease forwards;
        }
        .modal-panel {
          animation: slideUp 0.25s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Section Title */}
      <div className="text-center mb-16">
        <p
          className="text-yellow-500/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          What I've built
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
        >
          Projects
        </h2>
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #facc15, transparent)' }}
        />
        <p
          className="text-white/35 text-base max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          A showcase of projects highlighting my skills and experience across various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="project-card rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(250,204,21,0.08)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="project-img w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3
                className="text-lg font-semibold text-white mb-2 leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm text-white/35 mb-4 leading-relaxed line-clamp-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-panel w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{
              background: '#0d0d14',
              border: '1px solid rgba(250,204,21,0.12)',
              boxShadow: '0 0 80px rgba(250,204,21,0.06), 0 20px 60px rgba(0,0,0,0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-7 py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <h3
                className="text-base font-semibold text-white/80"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal image */}
            <div className="overflow-hidden" style={{ maxHeight: '260px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover"
              />
            </div>

            {/* Modal body */}
            <div className="px-7 py-6">
              <p
                className="text-sm text-white/40 leading-relaxed mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-7">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-6" style={{ background: 'rgba(255,255,255,0.05)' }} />

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:border-white/20"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                >
                  <FaGithub size={15} />
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 relative flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(250,204,21,0.3)]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: '#000',
                    background: 'linear-gradient(135deg, #fef08a, #facc15, #f59e0b)',
                  }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                  />
                  <FaExternalLinkAlt size={12} />
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;