import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const Introduction = () => (
    <h1 style={{ fontSize: "2em", paddingLeft: "10px" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
  );

  const SelfIntroduction = () => (
    <p className="home-about-body">
      I am a <strong className="purple">Full Stack Developer</strong> with a strong foundation in 
      <strong className="purple"> MongoDB, Express.js, React, and Node.js</strong>. My journey began in 
      <strong className="purple">semiconductor manufacturing</strong>, where I honed my technical skills and work ethic. 
      Now, I'm focused on leveraging these skills to develop <strong className="purple">user-centric web applications</strong>.
      <br /><br />
      Skilled in modern <strong className="purple">JavaScript (including ES6+), TypeScript</strong>, and frameworks like 
      <strong className="purple">Angular and React</strong>, I excel in building dynamic web interfaces. 
      My backend expertise extends to <strong className="purple">Spring Boot and Node.js</strong>, enabling robust application development.
      <br /><br />
      Proficient in <strong className="purple">HTML5, CSS3, and Express.js</strong>, I create responsive designs and handle complex 
      routing and middleware. My database skills include <strong className="purple">MongoDB, MySQL, and PostgreSQL</strong>, 
      ensuring data integrity and performance.
      <br /><br />
      I'm adept at operating within <strong className="purple">Agile methodologies</strong> and ensure quality in all aspects of development. 
      My problem-solving abilities and adaptability help me navigate new challenges and rapidly evolving project requirements.
      <br /><br />
      As a graduate of <strong className="purple">UT Austin's MERN Full Stack Bootcamp</strong>, I've refined my technical skills and applied 
      them in projects that showcase my capability to innovate and drive results.
    </p>
  );
  

  const Avatar = () => (
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  );

  const SocialLinks = () => (
    <div>
      <h1>FIND ME ON</h1>
      <p>Feel free to <span className="purple">connect </span>with me</p>
      <ul className="home-about-social-links">
        <li className="social-icons"><a href="https://github.com/TpainMcain" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillGithub /></a></li>
        <li className="social-icons"><a href="https://twitter.com/TpainMcain" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiOutlineTwitter /></a></li>
        <li className="social-icons"><a href="https://www.linkedin.com/in/trevor-pratt-898b17157" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><FaLinkedinIn /></a></li>
        <li className="social-icons"><a href="https://www.instagram.com/TpainMcain" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillInstagram /></a></li>
      </ul>
    </div>
  );

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Introduction />
            <SelfIntroduction />
          </Col>
          <Col md={4} className="myAvtar">
            <Avatar />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
