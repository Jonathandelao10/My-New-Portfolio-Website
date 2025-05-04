// src/components/Skills.jsx
import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
