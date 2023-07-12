// Importing necessary React and react-bootstrap components
import React from "react";
import { Col, Row } from "react-bootstrap";

// Importing necessary icons from 'react-icons'
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,

} from "react-icons/si";

// Toolstack function component
function Toolstack() {
  return (
    // A row for laying out icons
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Each column contains an icon representing a tool */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

// Exporting the Toolstack component for use in other parts of the application
export default Toolstack;
