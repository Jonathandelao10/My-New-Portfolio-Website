// src/App.jsx
import React from 'react';
import Navbar            from './components/Navbar';
import Home              from './components/Home';
import About             from './components/About';
import Skills            from './components/Skills';
import Education         from './components/Education';
import Projects          from './components/Projects';
import Contact           from './components/Contact';
import ParticlesComponent from './components/Particles';
import Awards from './components/Awards';
import Experience from './components/Experience';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* foreground content */}
      <div className="relative z-10">
        <Navbar />

        {/* sections must match the IDs your Navbar links point to */}
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Awards/>
        <Contact />
        
      </div>
    </div>
  );
}
