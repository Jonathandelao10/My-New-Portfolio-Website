// src/components/Skills.jsx
import React from 'react';
import ParticlesComponent from './Particles';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* Particles behind */}
      <div className="fixed inset-0 -z-10">
        <ParticlesComponent />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block">
            SKILLS & <span className="text-red-800">ABILITIES</span>
          </h2>
          <div className="w-20 h-0.5 bg-red-800 mx-auto mt-2" />
        </div>

        {/* Blurred container */}
        <div className="bg-stone-800 bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg overflow-hidden group"
            >
              {/* Icon */}
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain z-10" />
              {/* Label */}
              <h3 className="mt-4 font-semibold z-10">{skill.name}</h3>
              {/* Hover overlay */}
              <div className="
                absolute inset-0
                bg-black bg-opacity-0
                group-hover:bg-opacity-20
                transition-opacity
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
