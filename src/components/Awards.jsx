// src/components/Awards.jsx
import React from 'react';
import { awards } from '../data/awards';

export default function Awards() {
  // divide awards into 3 roughly equal chunks
  const chunkSize = Math.ceil(awards.length / 3);
  const rows = [
    awards.slice(0, chunkSize),
    awards.slice(chunkSize, chunkSize * 2),
    awards.slice(chunkSize * 2),
  ];

  return (
    <section id="awards" className="bg-stone-900 text-white py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          AWARDS & CERTIFICATES
        </h2>
        <div className="w-44 h-1 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Three marquee rows */}
      <div className="max-w-6xl mx-auto space-y-8">
        {rows.map((rowAwards, rowIndex) => {
          // pick direction: even-indexed rows scroll forward, odd rows backward
          const className = rowIndex % 2 === 1 ? 'marquee-reverse' : 'marquee';

          // duplicate so it never runs out
          const marqueeItems = [...rowAwards, ...rowAwards];

          return (
            <div key={rowIndex} className="marquee-container">
              <div className={className}>
                {marqueeItems.map((award, i) => (
                  <div
                    key={`row${rowIndex}-item${i}`}
                    className="flex-shrink-0 flex flex-col items-center text-center"
                    style={{ width: '280px' }}
                  >
                    <img
                      src={award.img}
                      alt={award.title}
                      className="
                        w-132 h-56
                        object-cover
                        rounded-lg
                        border-4 border-red-800
                        mb-2
                      "
                    />
                    <p className="font-semibold">{award.title}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
