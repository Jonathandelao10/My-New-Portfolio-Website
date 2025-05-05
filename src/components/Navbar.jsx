// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
        src={`${process.env.PUBLIC_URL}/logo1.png`}
        alt="Logo"
        className="
        h-12                /* keeps the same layout height */
        transform           /* enable transforms */
        scale-150           /* 125% size */
        origin-center       /* scale from its center */
        mr-2
      "
    />
        </div>

        <div className="hidden md:flex space-x-3 ">
          {['home', 'about', 'skills', 'education','experience', 'projects', 'awards','contact'].map(sec => (
            <Link
              key={sec}
              to={sec}
              spy
              smooth
              duration={500}
              className="
                relative inline-block
                px-3 py-2
                uppercase tracking-wide
                text-white
                font-bold
                cursor-pointer
                group
              "
            >
              <span className="relative z-10">{sec.toUpperCase()}</span>
              {/* Animated underline */}
              <span
                className="
                  absolute bottom-0 left-1/2
                  w-0 h-0.5 bg-red-700
                  transform -translate-x-1/2
                  transition-all duration-300
                  group-hover:w-3/4
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
