// Importing necessary React and react-bootstrap components
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

// Github function component
function Github() {
  return (
    // A row that contains the GitHubCalendar component
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      // Header for the section
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      // GitHubCalendar component which displays GitHub contribution graph
      <GitHubCalendar
        // GitHub username
        username="TpainMcain"
        // The size of each block in the calendar graph
        blockSize={15}
        // The margin around each block in the calendar graph
        blockMargin={5}
        // The color used for the blocks in the calendar graph
        color="#c084f5"
        // The font size for the text in the calendar
        fontSize={16}
      />
    </Row>
  );
}

// Exporting the Github component for use in other parts of the application
export default Github;
