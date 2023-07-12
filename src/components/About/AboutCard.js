// Importing necessary React and react-bootstrap components
import React from "react";
import Card from "react-bootstrap/Card";

// Importing necessary icon from 'react-icons'
import { ImPointRight } from "react-icons/im";

// AboutCard function component
function AboutCard() {
  return (
    // Card component to display the information in a nice format
    <Card className="quote-card-view">
      {/* The body of the card where the actual content will go */}
      <Card.Body>
        {/* A blockquote element for adding quotes or other special content */}
        <blockquote className="blockquote mb-0">
          {/* A paragraph with some personal info */}
          <p style={{ fontSize: "1.25rem", textAlign: "justify" }}>
            Hey Everyone, I'm <span className="purple">Trevor Pratt </span>
            from <span className="purple"> Austin, Texas.</span>
            <br /> A dedicated and passionate coding bootcamp graduate. With a keen eye for detail and a love for problem-solving, I've embarked on the exciting journey of software development.
            <br />
            I am specializing in Full Stack Web Development, sharpening my skills in languages such as JavaScript, Python, React, and Node.js.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          {/* A list of hobbies or activities */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// Exporting the AboutCard component for use in other parts of the application
export default AboutCard;
