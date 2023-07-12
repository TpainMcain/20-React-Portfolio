// Import necessary packages and components
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Icons for social media links
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Define the Footer component
function Footer() {
  let date = new Date(); // Create a new date object
  let year = date.getFullYear(); // Get the current year
  return (
    <Container fluid className="footer"> {/* Use the fluid variant for full width */}
      <Row> {/* Create a new row */}
        <Col md="4" className="footer-copywright">
          {/* Column for designer and developer info */}
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* Column for copyright info */}
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* Column for social media links */}
          <ul className="footer-icons">
            {/* List of icons */}
            {/* GitHub link */}
            <li className="social-icons">
              <a
                href="https://github.com/TpainMcain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* Twitter link */}
            <li className="social-icons">
              <a
                href="https://twitter.com/TpainMcain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            {/* LinkedIn link */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/TpainMcain/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* Instagram link */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/TpainMcain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

// Export the Footer component for use in other files
export default Footer;
