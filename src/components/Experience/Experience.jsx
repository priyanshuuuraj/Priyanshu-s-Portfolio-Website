import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-28 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        .exp-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .exp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(250,204,21,0.22) !important;
          box-shadow: 0 16px 48px rgba(250,204,21,0.08), 0 4px 16px rgba(0,0,0,0.4) !important;
        }
        .timeline-dot {
          background: linear-gradient(135deg, #facc15, #f59e0b);
          box-shadow: 0 0 14px rgba(250,204,21,0.55);
        }
      `}</style>

      {/* Section Title */}
      <div className="text-center mb-20">
        <p
          className="text-yellow-500/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Where I've worked
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
        >
          Experience
        </h2>
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #facc15, transparent)' }}
        />
        <p
          className="text-white/35 text-base max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          A summary of my professional journey and the roles I've taken across various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">

        {/* Vertical line */}
        <div
          className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(250,204,21,0.25) 8%, rgba(250,204,21,0.25) 92%, transparent)' }}
        />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row mb-14 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline dot */}
            <div className="timeline-dot absolute left-0 sm:left-1/2 top-7 w-3 h-3 rounded-full -translate-x-1/2 z-10" />

            {/* Card */}
            <div
              className={`exp-card w-full sm:w-[46%] ml-7 sm:ml-0 rounded-2xl p-7 ${
                index % 2 === 0 ? "sm:mr-[54%]" : "sm:ml-[54%]"
              }`}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(250,204,21,0.1)',
                boxShadow: '0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Company + Logo */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {experience.role}
                  </h3>
                  <p
                    className="text-sm text-white/45 mt-0.5"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Date badge */}
              <div className="mb-4">
                <span
                  className="inline-block text-xs tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color: 'rgba(250,204,21,0.7)',
                    background: 'rgba(250,204,21,0.07)',
                    border: '1px solid rgba(250,204,21,0.15)',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {experience.date}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-sm text-white/45 leading-relaxed mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {experience.desc}
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-4"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              />

              {/* Skills */}
              <div>
                <p
                  className="text-xs text-white/25 uppercase tracking-[0.15em] mb-2.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;