import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hussain Palan </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently an Undergraduate Student at Dr.MGRERI.
            <br />
            I am interested in Data Science and Machine Learing.
            <br />
            Integration of ML with Game Dev sounds even more exciting.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Disruptive the technology, Bigger the change!"{" "}
          </p>
          <footer className="blockquote-footer">Hussain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
