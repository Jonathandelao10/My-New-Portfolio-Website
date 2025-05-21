// src/components/About.jsx
import React, { useState, useEffect } from 'react';


// List of titles to cycle through
const roles = [
  'Computer Scientist',
  'Software Developer',
  'Data Scientist',
  'Machine Learning Engineer',
  'AI Developer',
  'Project Manager'
];

export default function About() {
  // Typewriter state
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex,     setWordIndex]     = useState(0);
  const [letterIndex,   setLetterIndex]   = useState(0);
  const [deleting,      setDeleting]      = useState(false);

  useEffect(() => {
    const currentWord = roles[wordIndex % roles.length];
    const timeout = setTimeout(() => {
      const next = deleting
        ? currentWord.slice(0, letterIndex - 1)
        : currentWord.slice(0, letterIndex + 1);

      setDisplayedText(next);
      setLetterIndex(prev => (deleting ? prev - 1 : prev + 1));

      if (!deleting && next === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && next === '') {
        setDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    }, deleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [letterIndex, deleting, wordIndex]);

  return (
    <section id="about" className="bg-stone-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block">
            <span className="text-white">ABOUT</span>{' '}
            <span className="text-red-800">ME</span>
          </h2>
          <div className="w-20 h-0.5 bg-red-800 mx-auto mt-2" />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Profile image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start md:pl-16">
            <img
              src={`${process.env.PUBLIC_URL}/2.jpg`}
              alt="Jonathan De la O"
              className="rounded-full w-96 h-96 mx-auto md:mx-0 object-cover border-4 border-white  "
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, I am <span className="text-red-800">Jonathan</span>
            </h2>

            {/* Typewriter effect */}
            <h3 className="text-xl md:text-2xl font-semibold h-8 mb-4">
              {displayedText}
              <span className="inline-block w-px h-6 bg-white animate-pulse ml-1" />
            </h3>

            <p className="text-lg mb-6">
            I'm a Computer Science senior at Arizona State University with a strong interest in Machine Learning, AI, and Data Science.
             With experience in AI development, data analysis, and project management, I’ve contributed to real-world projects at NASA, CAI3p0, and ASU.
             I enjoy building intelligent systems that solve meaningful problems and improve user experience.
              Whether leading teams or diving into technical challenges, I bring curiosity, precision, and a drive to make an impact.
            </p>

            {/* Resume button with hover scale & shadow */}
            <a
              href="https://drive.google.com/file/d/1SPQTAw4H9bxOt6vRj1wHb9iImWIbYDiI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-red-800 text-white
                uppercase tracking-wide
                px-6 py-3 rounded-full
                shadow-lg
                transform transition duration-200
                hover:scale-105 hover:shadow-2xl
              "
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
