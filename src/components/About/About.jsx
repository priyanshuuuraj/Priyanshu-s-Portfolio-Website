import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-22 lg:mt-28 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&display=swap');
      `}</style>

      <div className="relative flex flex-col-reverse md:flex-row justify-between items-center gap-10">

        {/* ── Left Side ── */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400/80 text-[10px] tracking-[0.18em] uppercase font-medium">
              Available for work
            </span>
          </div>

          {/* Greeting */}
          <p className="text-lg sm:text-xl text-white/35 mb-1 tracking-wide">
            Hi, I am
          </p>

          {/* Name — Outfit font */}
          <h1
            className="text-5xl sm:text-6xl mb-4"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #fef08a 0%, #facc15 45%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Priyanshu Raj
          </h1>

          {/* Typing effect */}
          <div className="text-base sm:text-lg text-white/40 mb-5">
            <span className="text-white/25 mr-1">—</span>
            <span
              style={{
                background: 'linear-gradient(90deg, #facc15, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <ReactTypingEffect
                text={[
                  '⚡ MERN Stack Developer',
                  '🌍 Open Source Contributor',
                  '🎨 Frontend Enthusiast',
                  '🚀 Fresher & Fast Learner',
                  '✍️ Content Creator',
                  '🐙 GitHub Explorer',
                  '💡 Problem Solver',
                  '☕ Turning Coffee into Code'
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span style={{ color: '#facc15' }}>{cursor}</span>
                )}
              />
            </span>
          </div>

          {/* Thin divider */}
          <div
            className="hidden md:block w-12 h-px mb-5"
            style={{ background: 'linear-gradient(90deg, #facc15, transparent)' }}
          />

          {/* Bio */}
          <p className="text-sm text-white/30 mb-8 leading-relaxed max-w-sm mx-auto md:mx-0">
            Still learning, always building. I'm a fresher with a solid grip on
            the <span className="text-yellow-300/60">MERN stack</span> — I've spent
            my college years building projects, breaking things, and figuring out
            how to fix them. Now I'm ready for the real world.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-xs font-bold tracking-widest uppercase text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #fef08a, #facc15, #f59e0b)',
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
            />
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5z" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* ── Right Side ── */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Rotating dashed ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                animationDuration: '14s',
                border: '1px dashed rgba(250,204,21,0.18)',
                margin: '-12px',
              }}
            />
            {/* Soft glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                boxShadow: '0 0 50px 12px rgba(250,204,21,0.1)',
                margin: '-5px',
              }}
            />

            <Tilt
              className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1200}
              gyroscope={true}
              style={{
                borderRadius: '9999px',
                border: '1.5px solid rgba(250,204,21,0.28)',
                boxShadow: '0 0 40px rgba(250,204,21,0.18), inset 0 0 40px rgba(250,204,21,0.04)',
              }}
            >
              <img
                src={profileImage}
                alt="Priyanshu Raj"
                className="w-full h-full rounded-full object-cover"
                style={{ filter: 'drop-shadow(0 6px 20px rgba(250,204,21,0.35))' }}
              />
            </Tilt>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;