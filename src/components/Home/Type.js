import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Full Stack Developer",
          "Open Source Contributor",
          "JavaScript & TypeScript Enthusiast",
          "React & Angular Specialist",
          "Node.js & Spring Boot Expert",
          "HTML5 & CSS3 Pro",
          "Backend Developer with Express.js",
          "RESTful & GraphQL API Integrator",
          "MongoDB & SQL Database Manager",
          "Agile Methodology Practitioner",
          "Quality Assurance & Testing Advocate",
          "Problem Solver & Innovative Thinker",
          "UT Austin Bootcamp Alumnus",
          "Passionate about Tech & Innovation"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
