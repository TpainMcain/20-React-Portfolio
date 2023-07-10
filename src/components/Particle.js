// Import the React library
import React from "react";

// Import the Particles component from the 'react-tsparticles' library
import Particles from "react-tsparticles";

// Define a functional component 'Particle'
function Particle() {
  // The component returns a Particles component with specific configuration
  return (
    <Particles
      id="tsparticles"  // ID for the Particles div
      params={{
        particles: {
          number: {
            value: 160,  // Number of particles
            density: {
              enable: true,  // Enable particle density rule
              value_area: 1500,  // Area in which particles are placed
            },
          },
          line_linked: {
            enable: false,  // Disable lines between particles
            opacity: 0.03,  // Opacity of lines (if they were enabled)
          },
          move: {
            direction: "right",  // Direction of particle movement
            speed: 0.05,  // Speed of particle movement
          },
          size: {
            value: 1,  // Size of particles
          },
          opacity: {
            anim: {
              enable: true,  // Enable animation for particle opacity
              speed: 1,  // Speed of opacity animation
              opacity_min: 0.05,  // Minimum opacity for animation
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,  // Enable interactivity on click
              mode: "push",  // On click, new particles are 'pushed'
            },
          },
          modes: {
            push: {
              particles_nb: 1,  // Number of particles to 'push' on click
            },
          },
        },
        retina_detect: true,  // Enable retina detection for high-DPI devices
      }}
    />
  );
}

// Export the 'Particle' component so it can be imported and used in other files.
export default Particle;
