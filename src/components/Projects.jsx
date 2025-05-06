import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-stone-900 text-white py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">PROJECTS</h2>
        <div className="w-20 h-0.5 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* External link icon */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 text-stone-900 hover:text-stone-700 transition-colors"
            >
              <FiExternalLink size={20} />
            </a>

            {/* Screenshot */}
            <img
              src={`${process.env.PUBLIC_URL}${p.image}`}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">{p.title}</h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-stone-800">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
