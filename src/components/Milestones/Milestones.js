import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineTrophy, AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import "../../style/Milestone.css";

// Internships
const internships = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "Plasmid Innovation Ltd",
    date: "January 2025 - March 2025",
    description: "Successfully completed a two-month industrial training internship in Data Science. Commended for excellent, diligent, and sincere performance in delivering quality work on assigned industrial projects. Received a strong letter of recommendation based on my efforts and performance during the program.",
    skills: ["Python", "Machine Learning", "Data Visualization", "Data Manipulation", "Data Science Applications", "Industrial Project Delivery"],
    image: require("../../Assets/internships/plasmid-logo.jpeg"),
    certificate: require("../../Assets/internships/ds-plasmid.png"),
    credentialUrl: "https://drive.google.com/file/d/1znE1XUDVesxbhAcVlYWat2oNi5ZyYUxu/view?usp=sharing"
  }
];

// Certificates and achievements
const certificates = [
  {
    id: 1,
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2023",
    description: "Completed the Google Cloud Computing Foundations program, gaining expertise in cloud fundamentals, infrastructure, data, and machine learning services on Google Cloud Platform.",
    image: require("../../Assets/certificates/gcc.png"),
    credentialUrl: "https://drive.google.com/file/d/1fDWtJ0wjiThRANoHbkDSjGeRMQzkgYI2/view?usp=sharing"
  },
  {
    id: 2,
    title: "Google Docs Advanced",
    issuer: "Google Workspace Learning Center",
    date: "2023",
    description: "Mastered advanced features of Google Docs including document formatting, collaboration tools, add-ons, and automation to enhance productivity and document management.",
    image: require("../../Assets/certificates/gdocs.png"),
    credentialUrl: "https://drive.google.com/file/d/1T87ATbJtjTxeYTwlQBfJdaTpb50ykfDd/view?usp=sharing"
  },
  {
    id: 3,
    title: "Basics of Data Science",
    issuer: "UniAthena & Cambridge International Qualifications, UK",
    date: "October 2023",
    description: "Successfully completed the 'Basics of Data Science' course. This blockchain-verified certification was developed and delivered by UniAthena in partnership with Cambridge International Qualifications, UK.",
    image: require("../../Assets/certificates/basics-of-ds.png"),
    credentialUrl: "https://drive.google.com/file/d/1lG-XsaM9rSF13FPtXPEcqM2-DypZxoNP/view?usp=sharing"
  },
  {
    id: 4,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge.",
    image: require("../../Assets/certificates/aws.png"),
    credentialUrl: "https://www.credly.com/badges/your-credential-id/"
  },
  {
    id: 5,
    title: "Data Analysis Professional Certificate",
    issuer: "Google",
    date: "2024",
    description: "Completed comprehensive training in data analysis including data cleaning, analysis, visualization, and using tools like spreadsheets, SQL, and R programming. Gained hands-on experience with data-driven decision making.",
    image: require("../../Assets/certificates/analysis.png"),
    credentialUrl: "https://drive.google.com/file/d/1Z3125Z-12HhiAG2640YLY5V2dEprEIwB/view?usp=sharing"
  }
  // Add more certificates below this line
];

const photos = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "Won first place in the annual coding competition",
    // Add your photo path here
    image: "path/to/photo1.jpg"
  },
  // Add more photos as needed
];

function Milestones() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleShow = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  return (
    <Container fluid className="milestone-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ padding: "20px" }}>
          My <strong className="purple">Milestones</strong>
        </h1>
        
        {/* Internships Section */}
        <h2 className="milestone-heading">
          <FaBriefcase /> Internships
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {internships.length > 0 ? (
            internships.map((internship) => (
              <Col md={4} key={internship.id} className="project-card">
                <Card className="milestone-card">
                  <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      onClick={() => handleShow(internship)}
                    >
                      <img 
                        src={internship.image} 
                        alt={internship.company}
                        style={{ 
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          padding: '10px'
                        }}
                      />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title style={{ color: '#6c63ff' }}>{internship.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {internship.company} • {internship.date}
                    </Card.Subtitle>
                    <Card.Text className="mb-3">{internship.description}</Card.Text>
                    <div className="mb-3">
                      {internship.skills && internship.skills.map((skill, index) => (
                        <span key={index} className="badge bg-secondary me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button 
                        variant="outline-primary" 
                        onClick={() => handleShow(internship)}
                      >
                        View Certificate
                      </Button>
                      <a 
                        href={internship.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary"
                      >
                        <FaExternalLinkAlt className="me-1" /> View Online
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center text-muted py-4">
              No internships to display. Check back soon for updates!
            </Col>
          )}
        </Row>

        {/* Certificates Section */}
        <h2 className="milestone-heading">
          <AiOutlineTrophy /> Certificates & Achievements
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert) => (
            <Col md={4} key={cert.id} className="project-card">
              <Card className="milestone-card">
                <div style={{ height: '300px', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    style={{ 
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      padding: '10px'
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: '#6c63ff' }}>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.issuer} • {cert.date}
                  </Card.Subtitle>
                  <Card.Text className="mb-3">{cert.description}</Card.Text>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        backgroundColor: '#6c63ff',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      View Certificate
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Photo Gallery Section */}
        <h2 className="milestone-heading">
          <AiOutlineCamera /> Photo Gallery
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {photos.map((photo) => (
            <Col md={4} key={photo.id} className="project-card">
              <Card className="milestone-card">
                <Card.Img variant="top" src={photo.image} alt={photo.title} />
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                  <Card.Text>{photo.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certificate Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg"
        centered
        className="certificate-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedCertificate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCertificate && (
            <img 
              src={selectedCertificate.certificate || selectedCertificate.image} 
              alt="Certificate" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedCertificate?.credentialUrl && (
            <Button 
              variant="primary" 
              href={selectedCertificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="me-1" /> Open in New Tab
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Milestones;
