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
  return (
    <section id="contact" className="bg-stone-900 text-white py-20 px-4">
      {/* Section title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold inline-block">CONTACT ME</h2>
        <div className="w-24 h-1 bg-maroon mx-auto mt-2" />
      </div>

      {/* Grid: 3 equal columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {/* Col 1 */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Contact Me</h3>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-maroon text-2xl" />
            <span>jddelao@asu.edu</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-maroon text-2xl" />
            <span>+1 (316) XXX-XXX</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-maroon text-2xl" />
            <span>Tempe, Arizona</span>
          </div>
        </div>

        {/* Col 2 with separators */}
        <div className="flex flex-col items-center text-center px-8 md:border-l md:border-r border-maroon space-y-4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['home','about','skills','education','projects','contact'].map(sec => (
              <ScrollLink
                key={sec}
                to={sec}
                spy
                smooth
                duration={500}
                className="text-white font-bold uppercase cursor-pointer hover:text-maroon transition-colors"
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
            <a href="https://www.linkedin.com/in/jonathandelao10/" target="_blank" rel="noopener noreferrer"
               className="text-maroon text-3xl hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Jonathandelao10" target="_blank" rel="noopener noreferrer"
               className="text-maroon text-3xl hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jonathadelao/" target="_blank" rel="noopener noreferrer"
               className="text-maroon text-3xl hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
