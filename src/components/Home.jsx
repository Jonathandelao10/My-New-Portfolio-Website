import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-black"
    >
      <div className="z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Jonathan De la O
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Computer Science and Business Administration student at{' '}
          <span className="text-maroon font-bold">
            Arizona State University
          </span>
        </p>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="inline-block bg-maroon text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer"
        >
          ABOUT ME
        </Link>
      </div>
    </section>
  );
}