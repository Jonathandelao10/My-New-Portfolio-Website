import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo1.png" alt="Logo" className="h-12 mr-2" />
          <span className="text-xl font-bold">Jonathan</span>
        </div>
        <div className="space-x-8 hidden md:flex font-semibold uppercase tracking-wide">
          {['home','about','skills','education','projects','contact'].map(sec => (
            <Link
              key={sec}
              to={sec}
              smooth
              duration={500}
              className="hover:text-red-500 cursor-pointer"
            >
              {sec.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>)
}