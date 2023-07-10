// Importing necessary React and react-bootstrap components
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Importing custom components and assets
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

// About function component
function About() {
  return (
    // Parent container for the about section
    <Container fluid className="about-section">
      // Particle component, possibly for a background effect
      <Particle />
      // A container for the content of the about section
      <Container>
        // A row for layout
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          // First column containing the 'About' card 
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            // Header for the 'About' card
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            // 'About' card component
            <Aboutcard />
          </Col>
            // Second column for displaying an image
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            // Image of a laptop
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        // Header for the 'Skillset' section
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        // 'Techstack' component to show professional skills
        <Techstack />
        // Header for the 'Tools' section
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        // 'Toolstack' component to show tools used by the professional
        <Toolstack />
        // 'Github' component to link the Github account or to show Github activities
        <Github />
      </Container>
    </Container>
  );
}

// Exporting the About component for use in other parts of the application
export default About;
