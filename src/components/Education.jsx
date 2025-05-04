// ✅ Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          MY <span className="text-yellow-400">EDUCATION</span>
        </h2>
        <p className="text-gray-300 mt-2">
          A program is never less than 90% complete, and never more than 95% complete. - Terry Baker
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-white text-black rounded-lg shadow-md flex flex-col md:flex-row items-center p-6">
        <img src="/asu-building.png" alt="ASU" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-red-800 mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <h4 className="text-xl font-semibold text-red-800 mb-2">
            Minor in Business Administration
          </h4>
          <p className="mb-4">Arizona State University | AZ</p>
          <p className="text-2xl font-bold text-green-600">2022–2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
