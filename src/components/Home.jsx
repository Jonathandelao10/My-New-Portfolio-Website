// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-black"
    >
      <div className="z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold mb-4">
          Jonathan De la O
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-10">
          From student-athlete to AI innovator.<br/>
          Creating solutions that scale{' '} 
        </p>

        <Link
          to="about"
          spy
          smooth
          duration={500}
          className={`
            relative block w-max mx-auto
            bg-black text-white
            uppercase tracking-wide
            px-12 py-4
            rounded-full
            shadow-lg
            transition-all duration-300
            hover:shadow-2xl
            group
          `}
        >
          {/* Button label */}
          <span className="relative z-10 cursor-pointer">ABOUT ME</span>

          {/* Animated underline */}
          <span
            className={`
              absolute bottom-3 left-1/2
              w-0 h-0.5 bg-red-700
             transform -translate-x-1/2
             transition-all duration-300
             group-hover:w-1/2
             
             
            `}
          />
        </Link>
      </div>
    </section>
  );
}
