
// ✅ About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/profile.png"
            alt="Jonathan De la O"
            className="rounded-full w-64 h-64 mx-auto md:mx-0 object-cover border-4 border-white"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I am <span className="text-red-700">Jonathan</span>
          </h2>
          <h3 className="text-xl font-semibold mb-4">Computer Science Student</h3>
          <p className="text-lg mb-6">
            I am a current Junior student athlete majoring in Computer Science and Business
            Administration at Arizona State University. My passion lies in solving problems
            with tailored data and communicating complex ideas to non-technical stakeholders.
            I love learning new things and challenging myself. My areas of interest include
            software engineering, full-stack development, data analysis, and product management.
            I am actively looking for internships as a software engineer, full-stack developer,
            data analyst, or product manager.
          </p>
          <p className="text-red-500 font-semibold">Email:</p>
          <p className="mb-4">jddelao@asu.edu</p>
          <a
            href="/resume.pdf"
            className="inline-block bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
