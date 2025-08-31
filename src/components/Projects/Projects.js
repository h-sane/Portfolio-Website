import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stroke from "../../Assets/Projects/stroke.png";
import emotion from "../../Assets/Projects/emotion.png";
import ideanest from "../../Assets/Projects/ideanest.png";
import vanishvault from "../../Assets/Projects/vanishvault.png";
import numberverse from "../../Assets/Projects/numberverse.png";
import haven from "../../Assets/Projects/haven.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vanishvault}
              isBlog={false}
              title="Vanish Vault"
              description="A secure file sharing web app where links expire after a single download or a set time. Built with Next.js, Firebase, and Tailwind CSS, it features password protection and a seamless drag-and-drop interface to ensure your files are shared securely and temporarily."
              ghLink="https://github.com/h-sane/quick-burn-files.git"
              demoLink="https://vanish-vault.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={haven}
              isBlog={false}
              title="Haven - NGO Website"
              description="A responsive website for 'Haven', a non-governmental organization, built from scratch using HTML, CSS, and vanilla JavaScript. The site features a clean design, smooth navigation, and provides key information to encourage community engagement and donations."
              ghLink="https://github.com/h-sane/Haven-html.git"
              demoLink="https://haven-ngo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideanest}
              isBlog={false}
              title="Idea Nest - AI Note Taker"
              description="An AI-powered note-taking app to capture and expand on ideas effortlessly. Built with Next.js, OpenAI, and a Convex real-time database, it features a unique floating, draggable note interface. Secure authentication is handled by Clerk for a seamless brainstorming experience."
              ghLink="https://github.com/h-sane/Idea-Catcher-AI-Floating-Notes.git"
              demoLink="https://nest-idea-bloom.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stroke}
              isBlog={false}
              title="Brain Stroke Prediction System"
              description="A machine learning application that predicts the likelihood of a brain stroke using key health data. The prediction model was built with Scikit-learn and deployed as a user-friendly web app with a Flask backend, allowing users to input their metrics for an instant risk assessment."
              ghLink="https://github.com/h-sane/Brain_Stroke_Detection.git"
              demoLink="https://brain-stroke-detection-i87h.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numberverse}
              isBlog={false}
              title="Numberverse - A Math RPG"
              description="An educational RPG that gamifies math for middle schoolers. Players embark on an adventure, solving puzzles and battling 'Math Stars' to master concepts from the ICSE curriculum. This interactive prototype was designed and built entirely in Figma, showcasing the complete user experience and core gameplay loop."
              demoLink="https://www.figma.com/proto/PTfEkF1j8DwhxG3x5mDIU0/NUMBERVERSE?node-id=9-239&p=f&t=acwxWW1Q7uJHKV3O-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A527"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
