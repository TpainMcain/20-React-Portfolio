// Import required dependencies
import React from "react"; // Core dependency to use React
import { Container, Row, Col } from "react-bootstrap"; // Imported from react-bootstrap for grid layout
import myImg from "../../Assets/avatar.svg"; // Avatar image import
import Tilt from "react-parallax-tilt"; // Library for parallax effect on elements
import {
  AiFillGithub, // GitHub icon from react-icons
  AiOutlineTwitter, // Twitter icon from react-icons
  AiFillInstagram, // Instagram icon from react-icons
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"; // LinkedIn icon from react-icons

// Define a functional component called Home2
function Home2() {
  return (
    // A fluid container that takes the full width of the screen
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Column for description */}
          <Col md={8} className="home-about-description">
            {/* Self Introduction Section */}
            <h1 style={{ fontSize: "2em", paddingLeft: "10px" }}>LET ME <span className="purple"> INTRODUCE </span> MYSELF</h1>
            {/* The content of the self-introduction */}
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to {" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          {/* Column for avatar */}
          <Col md={4} className="myAvtar">
            {/* Tilting effect for the avatar image */}
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* Column for social links */}
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect </span>with me</p>
            {/* Social media links */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TpainMcain" // GitHub profile link
                  target="_blank" // Open in a new tab
                  rel="noreferrer" // For security reasons
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/TpainMcain" // Twitter profile link
                  target="_blank" // Open in a new tab
                  rel="noreferrer" // For security reasons
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/TpainMcain/" // LinkedIn profile link
                  target="_blank" // Open in a new tab
                  rel="noreferrer" // For security reasons
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/TpainMcain" // Instagram profile link
                  target="_blank" // Open in a new tab
                  rel="noreferrer" // For security reasons
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// Export the Home2 component for use in other files
export default Home2;
