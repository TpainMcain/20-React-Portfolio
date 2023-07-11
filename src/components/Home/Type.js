// Import required dependencies
import React from "react";  // Core dependency to use React
import Typewriter from "typewriter-effect"; // Typewriter effect library

// Define a functional component called Type
function Type() {
  return (
    // Typewriter component from the library
    // options prop is used to customize the effect
    <Typewriter
      options={{
        strings: [
          "Software Developer", // The strings to type out in sequence
          "Freelancer",
          "Full Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true, // Automatically starts typing on load
        loop: true, // Repeats the sequence after all strings are typed out
        deleteSpeed: 20, // Speed of the delete animation
      }}
    />
  );
}

// Export the Type component for use in other files
export default Type;
