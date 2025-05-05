// src/components/Contact.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

export default function Contact() {
  const sections = ['home','about','skills','education','experience','projects','awards'];

  return (
    <section id="contact" className="bg-stone-900 text-white py-20 px-4">
      {/* Section title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold inline-block">
          CONTACT<span className="text-red-800"> ME</span>
        </h2>
        <div className="w-24 h-1 bg-red-800 mx-auto mt-2" />
      </div>

      {/* 3-column grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {/* Col 1 */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Contact Me</h3>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-800 text-2xl" />
            <span>jddelao@asu.edu</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-red-800 text-2xl" />
            <span>+1 (316) XXX-XXX</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-red-800 text-2xl" />
            <span>Tempe, Arizona</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col items-center text-center px-8 md:border-l md:border-r border-red-800 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map(sec => (
              <ScrollLink
                key={sec}
                to={sec}
                spy
                smooth
                duration={500}
                // hover & active turn red-800
                className="text-white font-bold uppercase cursor-pointer transition-colors hover:text-red-800"
                activeClass="text-red-800"
              >
                {sec.toUpperCase()}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Jonathan’s Portfolio</h3>
          <p className="max-w-sm">
            Thank you for visiting my personal portfolio website. Feel free to connect with me on socials.
          </p>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/jonathandelao10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 text-3xl hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Jonathandelao10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 text-3xl hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/jonathadelao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 text-3xl hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
