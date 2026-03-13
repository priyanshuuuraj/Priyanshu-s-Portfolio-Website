import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2iz2899",
        "template_dcy1lho",
        form.current,
        "Dsgb6TVd48QnKPOlm"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl text-sm text-white/80 outline-none transition-all duration-200
    placeholder:text-white/20 bg-white/[0.03] border border-white/[0.07]
    focus:border-yellow-500/40 focus:bg-white/[0.05]
  `;

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>

      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-14">
        <p
          className="text-yellow-500/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Get in touch
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
        >
          Contact
        </h2>
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #facc15, transparent)' }}
        />
        <p
          className="text-white/35 text-base max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          I'd love to hear from you — reach out for any opportunities or questions
        </p>
      </div>

      {/* Contact Card */}
      <div
        className="w-full max-w-md rounded-2xl p-8"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(250,204,21,0.1)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-7">
          <div
            className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"
          />
          <h3
            className="text-base font-semibold text-white/70"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Send a message
          </h3>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3.5">
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className={inputClass}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className={inputClass}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={inputClass}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            required
            className={inputClass}
            style={{ fontFamily: "'Outfit', sans-serif", resize: 'none' }}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="group relative mt-1 w-full overflow-hidden rounded-xl py-3.5 text-sm font-bold tracking-widest uppercase text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: 'linear-gradient(135deg, #fef08a, #facc15, #f59e0b)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
            />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;