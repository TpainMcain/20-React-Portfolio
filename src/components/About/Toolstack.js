import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { SiVisualstudiocode, SiSlack, SiVercel, SiMicrosoftoffice, SiAdobe, SiGit, SiVirtualbox } from 'react-icons/si';

// ToolIcon functional component for creating each icon with a tooltip
const ToolIcon = ({ Icon, label }) => (
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

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <ToolIcon Icon={SiVisualstudiocode} label="Visual Studio Code" />
      <ToolIcon Icon={SiMicrosoftoffice} label="Microsoft Office" />
      <ToolIcon Icon={SiAdobe} label="Adobe Suite" />
      <ToolIcon Icon={SiGit} label="Git" />
      <ToolIcon Icon={SiVirtualbox} label="VirtualBox" />
      <ToolIcon Icon={SiSlack} label="Slack" />
      <ToolIcon Icon={SiVercel} label="Vercel" />
      {/* Add more icons and labels as needed */}
    </Row>
  );
}

export default Toolstack;
