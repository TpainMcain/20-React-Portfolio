// Importing necessary React and react-bootstrap components
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Importing other custom components and resources
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// Home function component
function Home() {
  return (
    // A section to encapsulate the entire home page
    <section>
      // The main container for the home page, with its class and id set
      <Container fluid className="home-section" id="home">
        // The particle animation in the background
        <Particle />
        // The main content container
        <Container className="home-content">
          // A row for the content
          <Row>
            // Column for the text and Type animation
            <Col md={7} className="home-header">
              // Greeting header
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              // Introduction header
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TREVOR PRATT</strong>
              </h1>
              // Type animation
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            // Column for the image
            <Col md={5} style={{ paddingBottom: 20 }}>
              // Image
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      // Home2 component
      <Home2 />
    </section>
  );
}

// Exporting the Home component for use in other parts of the application
export default Home;
