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
      // The body of the card where the actual content will go
      <Card.Body>
        // A blockquote element for adding quotes or other special content
        <blockquote className="blockquote mb-0">
          // A paragraph with some personal info
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Trevor Pratt </span>
            from <span className="purple"> Austin, TX.</span>
            <br /> ABOUT ME
            <br />
            MORE ABOUT ME
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          // A list of hobbies or activities
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
          // A quote or personal motto
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          // The footer of the blockquote, usually used for citing the source of the quote
          <footer className="blockquote-footer">TWP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// Exporting the AboutCard component for use in other parts of the application
export default AboutCard;
