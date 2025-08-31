import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const GOOGLE_DOC_URL = "https://drive.google.com/file/d/18mOvgijVXm5d757L5hWBux40LyykDpkC/preview";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div style={{ height: "60px" }}></div>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=18mOvgijVXm5d757L5hWBux40LyykDpkC"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <div style={{ height: "60px" }}></div>

        <Row className="resume" style={{ width: '100%', margin: '0', padding: '0' }}>
          <div style={{ width: '100%', height: '100%', minHeight: '1200px' }}>
            <iframe
              src={GOOGLE_DOC_URL}
              width="100%"
              height="100%"
              title="Resume"
              allow="autoplay"
              style={{ border: 'none', minHeight: '1200px' }}
            ></iframe>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=18mOvgijVXm5d757L5hWBux40LyykDpkC"
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

export default ResumeNew;
