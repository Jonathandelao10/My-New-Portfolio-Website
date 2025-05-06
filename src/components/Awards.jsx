// src/components/Awards.jsx
import React from 'react';
import { awards } from '../data/awards';

export default function Awards() {
  const chunkSize = Math.ceil(awards.length / 3);
  const rows = [
    awards.slice(0, chunkSize),
    awards.slice(chunkSize, chunkSize * 2),
    awards.slice(chunkSize * 2),
  ];

  return (
    <section id="awards" className="bg-white text-black py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          AWARDS &amp; CERTIFICATES
        </h2>
        <div className="w-44 h-1 bg-red-800 mx-auto mt-2" />
      </div>

      {/* Three marquee rows */}
      <div className="max-w-6xl mx-auto space-y-8">
        {rows.map((rowAwards, rowIndex) => {
          const marqueeClass = rowIndex % 2 === 1 ? 'marquee-reverse' : 'marquee';
          const items = [...rowAwards, ...rowAwards]; // duplicate for infinite scroll

          return (
            <div key={rowIndex} className="marquee-container">
              <div className={marqueeClass}>
                {items.map((award, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex flex-col items-center text-center bg-stone-900 text-white border border-black/20 rounded-lg p-4"
                    style={{ width: 280 }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}${award.img}`}
                      alt={award.title}
                      className="w-full h-48 object-cover rounded-md mb-2"
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
