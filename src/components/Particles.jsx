// src/components/Particles.jsx
import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function ParticlesComponent() {
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
      setEngineLoaded(true);
    });
  }, []);

  if (!engineLoaded) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: {
            value: 160,
            density: { enable: true, area: 300 }      // value_area → area
          },
          color: { value: '#333' },                   // was "#333"
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
          links: {                                     // line_linked → links
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: 'bounce' }
          }
        },

        interactivity: {
          events: {
            onHover: {                                // onhover → onHover
              enable: true,
              mode: 'repulse'
            }
          }
        },

        detectRetina: true                            // retina_detect → detectRetina
      }}
    />
  );
}
