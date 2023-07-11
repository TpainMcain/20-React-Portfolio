// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/twp.pdf";  // Resume pdf file
import { AiOutlineDownload } from "react-icons/ai";  // Icon for download button
import { Document, Page, pdfjs } from "react-pdf";  // react-pdf for displaying PDF documents
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // CSS for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; // PDF worker for react-pdf

function ResumeNew() {
  const [width, setWidth] = useState(1200); // State to hold the window width

  // Effect to update window width on mount
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Button to download CV */}
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF display */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            {/* Page 1 of the PDF, scale depends on window width */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Another download button at the bottom */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

// Export the ResumeNew component
export default ResumeNew;
