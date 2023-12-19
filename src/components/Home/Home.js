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
  // Helper component for the greeting header
  const GreetingHeader = () => (
    <h1 style={{ paddingBottom: 15 }} className="heading">
      Hello!{" "}
      <span className="wave" role="img" aria-labelledby="wave">
        👋🏻
      </span>
    </h1>
  );

  // Helper component for the introduction header
  const IntroductionHeader = () => (
    <h1 className="heading-name">
      I'm
      <strong className="main-name"> Trevor Pratt</strong>
    </h1>
  );

  // Helper component for the type animation
  const TypeAnimation = () => (
    <div style={{ padding: 20, textAlign: "left" }}>
      <Type />
    </div>
  );

  // Helper component for the image
  const HomeImage = () => (
    <img
      src={homeLogo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
  );

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <GreetingHeader />
              <IntroductionHeader />
              <TypeAnimation />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <HomeImage />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
