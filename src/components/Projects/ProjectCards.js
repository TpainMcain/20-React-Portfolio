// Import required dependencies
import React from "react"; // Core dependency to use React
import Card from "react-bootstrap/Card"; // Card component from react-bootstrap library for the card layout
import Button from "react-bootstrap/Button"; // Button component from react-bootstrap library for clickable buttons
import { CgWebsite } from "react-icons/cg"; // Website icon from react-icons
import { BsGithub } from "react-icons/bs"; // GitHub icon from react-icons

// Define a functional component called ProjectCards
function ProjectCards(props) {
  return (
    // Card component from react-bootstrap
    <Card className="project-card-view">
      {/* Image of the card */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {/* Title of the card */}
        <Card.Title>{props.title}</Card.Title>
        {/* Description of the card */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Button which redirects to the project's GitHub page or Blog */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains a Demo link and if it's not a Blog then, it will render the below component */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Export the ProjectCards component for use in other files
export default ProjectCards;
