// ✅ Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">CONTACT ME</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="mb-2">📧 jddelao@asu.edu</p>
            <p className="mb-2">📞 +1 (316) XXX-XXX</p>
            <p className="mb-6">📍 Tempe, Arizona</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Education</p>
              <p>Projects</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Jonathan's Portfolio</h3>
            <p className="mb-4">
              Thank you for visiting my personal portfolio website. Please, feel free to connect
              with me over socials.
            </p>
            <div className="flex space-x-4">
              <img src="/linkedin.png" alt="LinkedIn" className="h-8" />
              <img src="/github.png" alt="GitHub" className="h-8" />
              <img src="/instagram.png" alt="Instagram" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
