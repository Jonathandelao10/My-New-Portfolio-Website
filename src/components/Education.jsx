// src/components/Education.jsx
import React from 'react';

const educationData = [
  {
    title: 'Bachelor of Science in Computer Science',
    school: 'Arizona State University | AZ',
    dates: '2022–2025',
    img: '/ASU.webp',
  },
  {
    title: 'Bachelor of Science in Computer Science',
    subtitle: '',
    school: 'Southwestern College | KS',
    dates: '2021–2022',
    img: '/SC.jpg',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-stone-900 text-white py-20 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          MY <span className="text-red-800">EDUCATION</span>
        </h2>
        <div className="w-20 h-0.5 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Grid of Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {educationData.map((edu) => (
          <div
            key={edu.school}
            className="
              group relative bg-white text-black
              rounded-2xl overflow-hidden
              shadow-lg
              transform transition hover:-translate-y-2 hover:shadow-2xl
            "
          >
            {/* Image */}
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-48 object-cover"
            />

            {/* Dark overlay on hover */}
            <div className="
              absolute inset-0
              bg-black bg-opacity-0
              group-hover:bg-opacity-30
              transition-opacity
            " />

            {/* Text */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-maroon mb-1">
                {edu.title}
              </h3>
              {edu.subtitle && (
                <p className="text-xl text-red-800 mb-2">{edu.subtitle}</p>
              )}
              <p className="mb-4">{edu.school}</p>
              <p className="text-2xl font-bold text-green-600">
                {edu.dates}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
