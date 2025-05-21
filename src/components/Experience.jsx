// src/components/Experience.jsx
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

// Your experience entries
const experienceData = [
  {
    title: 'Beam Group',
    subtitle: 'Software Developer',
    dates: 'Aug 2024 – May 2025',
  },
  {
    title: 'Arizona State University',
    subtitle: 'Asset Specialist',
    dates: 'Sep 2022 – May 2025',
  },
  {
    title: 'CAI3P0',
    subtitle: 'Applied AI Intern | Internship',
    dates: 'June 2024 – Jan 2025',
  },
  {
    title: 'NASA - NPWEE Academy',
    subtitle: 'Deputy Project Manager',
    dates: 'May 2024 – Aug 2024',
  },
  {
    title: 'Stanford University',
    subtitle: 'Tennis Counselor',
    dates: 'Jun 2022 – Aug 2022',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white-900 text-black py-20 px-4">
      {/* Section title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div
          className="
            hidden md:block
            absolute left-1/2
            top-0.5
            bottom-0.5
            w-1
            bg-black
            transform -translate-x-1/2
          "
        />

        {/* Entries */}
        {experienceData.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className="relative mb-16 flex items-center w-full">
              {/* Left side (or spacer) */}
              <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pr-8'}`}>
                {isLeft && (
                  <div className="inline-block bg-yellow-500 p-6 rounded-lg text-black">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="font-semibold">{exp.subtitle}</p>
                    <p className="mt-1 text-sm text-black/80">{exp.dates}</p>
                  </div>
                )}
              </div>

              {/* Node circle with icon */}
              <div
                className="
                  z-10 flex items-center justify-center
                  bg-white rounded-full w-10 h-10
                  border-4 border-yellow-500
                "
              >
                <FaBriefcase className="text-black" />
              </div>

              {/* Right side */}
              <div className={`w-1/2 ${!isLeft ? 'pl-8 text-left' : 'pl-8'}`}>
                {!isLeft && (
                  <div className="inline-block bg-yellow-500 p-6 rounded-lg text-black">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="font-semibold">{exp.subtitle}</p>
                    <p className="mt-1 text-sm text-black/80">{exp.dates}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
