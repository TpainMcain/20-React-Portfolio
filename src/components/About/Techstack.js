import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiTypescript, SiAngular, SiSpring, SiPostgresql, SiMysql } from 'react-icons/si';

// TechIcon functional component for creating each icon with a tooltip
const TechIcon = ({ Icon, label }) => (
  <OverlayTrigger
    key={label}
    placement="top"
    overlay={
      <Tooltip id={`tooltip-${label}`}>
        {label}
      </Tooltip>
    }
  >
    <Col xs={4} md={2} className="tech-icons">
      <Icon />
    </Col>
  </OverlayTrigger>
);

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <TechIcon Icon={DiJavascript1} label="JavaScript" />
      <TechIcon Icon={SiTypescript} label="TypeScript" />
      <TechIcon Icon={SiAngular} label="Angular" />
      <TechIcon Icon={DiReact} label="React" />
      <TechIcon Icon={DiNodejs} label="Node.js" />
      <TechIcon Icon={SiSpring} label="Spring Boot" />
      <TechIcon Icon={DiMongodb} label="MongoDB" />
      <TechIcon Icon={SiPostgresql} label="PostgreSQL" />
      <TechIcon Icon={SiMysql} label="MySQL" />
      <TechIcon Icon={DiGit} label="Git" />
      <TechIcon Icon={DiHtml5} label="HTML5" />
      <TechIcon Icon={DiCss3} label="CSS3" />
      {/* Add more icons and labels as needed */}
    </Row>
  );
}

export default Techstack;
