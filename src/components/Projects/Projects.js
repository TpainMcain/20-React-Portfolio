// Importing required dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Components from react-bootstrap for layout
import ProjectCard from "./ProjectCards"; // The ProjectCard component to display individual projects
import Particle from "../Particle"; // The Particle component for the particle effect in the background

// Importing the images for the project cards
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    // The outermost container. 'fluid' makes it span the entire width of the viewport
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* The following 'Col's are Bootstrap grid columns. The 'md={4}' prop makes each column take up 4/12 (or 1/3) of the total row width on medium to extra large screens, thus fitting three cards per row. 'className="project-card"' adds styling.*/}
          {/* Individual ProjectCards. 'imgPath' is the image at the top of the card, 'title' is the project title, 'description' is a brief description of the project, 'ghLink' is the link to the project's GitHub page, and 'demoLink' is the link to a live demo of the project (if available). */}
          {/* You can add as many ProjectCards as you want, just follow the structure. */}
          
          {/* Card for the "" project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Card for the "" project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Repeat for each project */}

          {/* ... */}

        </Row>
      </Container>
    </Container>
  );
}

// Export the Projects component to be used in other components
export default Projects;
