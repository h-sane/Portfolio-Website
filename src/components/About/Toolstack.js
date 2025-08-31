import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiWindows,
  DiUnitySmall,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiGooglecloud,
  SiTableau,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
    </Row>
  );
}

export default Toolstack;
