import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-28 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        .edu-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .edu-card:hover {
          transform: translateY(-4px);
          border-color: rgba(250,204,21,0.22) !important;
          box-shadow: 0 16px 48px rgba(250,204,21,0.08), 0 4px 16px rgba(0,0,0,0.4) !important;
        }
        .edu-dot {
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
          Academic background
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
        >
          Education
        </h2>
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #facc15, transparent)' }}
        />
        <p
          className="text-white/35 text-base max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          My education has been a journey of learning and growth — here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">

        {/* Vertical line */}
        <div
          className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(250,204,21,0.25) 8%, rgba(250,204,21,0.25) 92%, transparent)' }}
        />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row mb-14 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline dot */}
            <div className="edu-dot absolute left-0 sm:left-1/2 top-7 w-3 h-3 rounded-full -translate-x-1/2 z-10" />

            {/* Card */}
            <div
              className={`edu-card w-full sm:w-[46%] ml-7 sm:ml-0 rounded-2xl p-7 ${
                index % 2 === 0 ? "sm:ml-[54%]" : "sm:mr-[54%]"
              }`}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(250,204,21,0.1)',
                boxShadow: '0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* School logo + name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-sm text-white/45 mt-0.5"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {edu.school}
                  </p>
                </div>
              </div>

              {/* Date badge */}
              <div className="mb-4">
                <span
                  className="inline-block text-xs tracking-[0.12em] uppercase px-3 py-1.5 rounded-full font-medium"
                  style={{
                    color: 'rgba(250,204,21,0.7)',
                    background: 'rgba(250,204,21,0.07)',
                    border: '1px solid rgba(250,204,21,0.15)',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {edu.date}
                </span>
              </div>

              {/* Grade */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs text-white/25 uppercase tracking-[0.12em]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Grade
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'rgba(250,204,21,0.75)', fontFamily: "'Outfit', sans-serif" }}
                >
                  {edu.grade}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.05)' }} />

              {/* Description */}
              <p
                className="text-sm text-white/40 leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;