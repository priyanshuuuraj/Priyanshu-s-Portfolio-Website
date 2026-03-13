import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-28 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&display=swap');
    `}</style>

    {/* Section Title */}
    <div className="text-center mb-14">
      <p className="text-yellow-500/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
        What I work with
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold text-white mb-4"
        style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
      >
        Skills
      </h2>
      <div
        className="w-10 h-px mx-auto mb-5"
        style={{ background: 'linear-gradient(90deg, transparent, #facc15, transparent)' }}
      />
      <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
        A collection of technical skills honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full sm:w-[48%] rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(250,204,21,0.12)',
            boxShadow: '0 0 30px rgba(250,204,21,0.05), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          {/* Card Header */}
          <div
            className="px-7 py-5 border-b"
            style={{ borderColor: 'rgba(250,204,21,0.08)' }}
          >
            <h3
              className="text-base font-semibold text-white/70 tracking-wide"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.05em' }}
            >
              {category.title}
            </h3>
          </div>

          {/* Skill Items */}
          <div className="p-7">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.01}
              transitionSpeed={1200}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(250,204,21,0.06)';
                      e.currentTarget.style.border = '1px solid rgba(250,204,21,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 opacity-80"
                    />
                    <span className="text-xs text-white/50 leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;