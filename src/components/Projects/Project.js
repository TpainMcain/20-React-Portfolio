// Importing required dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Components from react-bootstrap for layout
import ProjectCard from "./ProjectCards"; // The ProjectCard component to display individual projects
import Particle from "../Particle"; // The Particle component for the particle effect in the background
// Importing the images for the project cards
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
          // Card for the Chatify project
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          // Card for the Bits-0f-C0de project
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          // Repeat for each project

          //...

        </Row>
      </Container>
    </Container>
  );
}

// Export the Projects component to be used in other components
export default Projects;
