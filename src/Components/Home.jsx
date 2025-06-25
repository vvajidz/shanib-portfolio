import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 bg-transparent flex items-center justify-center overflow-hidden"
    >
      {/* Glassmorphic card container */}
      <div className="bg-white/5 backdrop-blur-xl px-6 py-12 rounded-3xl shadow-2xl text-center max-w-3xl w-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
          Mohammed Shanib
        </h1>

        <h2 className="text-xl sm:text-2xl text-blue-400 font-medium mb-4">
          <Typewriter
            words={["Creative Head", "Graphic Designer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-8">
          With 3+ years in branding and advertising, I craft meaningful design solutions for both print and digital. Passionate, consistent, and creatively driven.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-blue-700/40 shadow-lg"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12">
          <a href="#about" className="inline-block animate-bounce text-blue-400 text-2xl">
            ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
