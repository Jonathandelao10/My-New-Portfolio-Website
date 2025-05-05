// src/components/Projects.jsx
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-stone-100 text-white  py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block text-black">
          PROJECTS
        </h2>
        <div className="w-20 h-0.5 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="
              relative bg-stone-800 rounded-xl overflow-hidden
              shadow-lg transform transition
              hover:-translate-y-1 hover:shadow-2xl
            "
          >
            {/* link icon */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute top-3 right-3
                text-gray-600 hover:text-gray-900
                transition-colors
              "
            >
              <FiExternalLink size={20} />
            </a>

            {/* screenshot */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            {/* content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{p.title}</h3>

              {/* tech badges */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      bg-gray-200 text-gray-800
                      text-sm font-medium
                      px-3 py-1 rounded-full
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-100">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
