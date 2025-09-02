import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Nav, Tab } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineTrophy, AiOutlineCamera, AiOutlineClose, AiOutlineBook } from "react-icons/ai";
import { FaBriefcase, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import "../../style/Milestone.css";

// Internships
const internships = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "Plasmid Innovation Ltd.",
    date: "January 2025 - March 2025",
    description: "Successfully completed a two-month industrial training internship in Data Science. Commended for excellent, diligent, and sincere performance in delivering quality work on assigned industrial projects. Received a strong letter of recommendation based on my efforts and performance during the program.",
    skills: ["Python", "Machine Learning", "Data Visualization", "Data Manipulation", "Data Science Applications", "Industrial Project Delivery"],
    image: require("../../Assets/internships/plasmid-logo.jpeg"),
    certificate: require("../../Assets/internships/ds-plasmid.png"),
    credentialUrl: "https://drive.google.com/file/d/1znE1XUDVesxbhAcVlYWat2oNi5ZyYUxu/view?usp=sharing"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "IGNIT Technical Solutions Pvt. Ltd.",
    date: "February 2025 - March 2025",
    description: "Successfully completed a one-month internship at IGNIT Technical Solutions Pvt. Ltd. on Drone Automation. Contributed to the development of automation features including Object Detection, Precision Landing (Autonomous), and Raspberry Pi Programming.",
    skills: ["Python", "OpenCV", "Computer Vision", "Object Detection", "Autonomous Systems", "Raspberry Pi Programming", "Precision Landing Algorithms", "Drone Automation", "Problem-Solving", "Team Collaboration"],
    image: require("../../Assets/internships/ignit-logo.jpeg"),
    certificate: require("../../Assets/internships/di-ignit.png"),
    credentialUrl: "https://drive.google.com/file/d/1EJkgJtMweLh0i8VSFBtOL8DPshaLVmSO/view?usp=sharing"
  }
];

// Certification & Courses
const certifications = [
  {
    id: 1,
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2024",
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
    date: "October 2024",
    description: "Successfully completed the 'Basics of Data Science' course. This blockchain-verified certification was developed and delivered by UniAthena in partnership with Cambridge International Qualifications, UK.",
    image: require("../../Assets/certificates/basics-of-ds.png"),
    credentialUrl: "https://drive.google.com/file/d/1lG-XsaM9rSF13FPtXPEcqM2-DypZxoNP/view?usp=sharing"
  },
  {
    id: 4,
    title: "Basics of Machine Learning",
    issuer: "UniAthena & Cambridge International Qualifications, UK",
    date: "November 2024",
    description: "Successfully completed the 'Basics of Machine Learning' course. This certification covers fundamental machine learning concepts, algorithms, and their practical applications, verified by UniAthena in partnership with Cambridge International Qualifications, UK.",
    image: require("../../Assets/certificates/basics-of-ml.png"),
    credentialUrl: "https://drive.google.com/file/d/1UQDU27exnFPPZvOat5Q0FN6ywpc8Az2f/view?usp=sharing"
  },
  {
    id: 5,
    title: "AWS - Data Science with R",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge.",
    image: require("../../Assets/certificates/aws.png"),
    credentialUrl: "https://drive.google.com/file/d/12y8gsvbYWmUnS5Bx3hliCkPJB41pYfdY/view?usp=sharing"
  },
  {
    id: 5,
    title: "Data Analysis Professional Certificate",
    issuer: "Accenture",
    date: "2025",
    description: "Completed comprehensive training in data analysis including data cleaning, analysis, visualization, and using tools like spreadsheets, SQL, and R programming. Gained hands-on experience with data-driven decision making.",
    image: require("../../Assets/certificates/analysis.png"),
    credentialUrl: "https://drive.google.com/file/d/1Z3125Z-12HhiAG2640YLY5V2dEprEIwB/view?usp=sharing"
  },
  {
    id: 6,
    title: "A/B Testing with Google Optimize",
    issuer: "Cleerup",
    date: "2025",
    description: "Through this course, I gained hands-on experience in designing and executing A/B tests using Google Optimize. I learned how to define clear goals, set hypotheses, and create webpage variations to test marketing strategies effectively. The project strengthened my ability to implement test variants seamlessly, measure performance through defined success metrics, and analyze results using statistical insights.",
    image: require("../../Assets/certificates/abtest.png"),
    credentialUrl: "https://drive.google.com/file/d/1ouvdD3HuTfjY0z-ze4RqVtpP8RifBpRh/view?usp=sharing"
  }
];

// Inter-college Achievements
const interCollegeAchievements = [
  // Add your inter-college achievements here
  // Example:
  // {
  //   id: 1,
  //   title: "Hackathon Winner",
  //   issuer: "TechFest 2024",
  //   date: "2024",
  //   description: "Won first place in the annual inter-college hackathon.",
  //   image: require("../../Assets/certificates/hackathon-winner.png"),
  //   credentialUrl: "#"
  // }
];

// Intra-college Achievements
const intraCollegeAchievements = [
  // Add your intra-college achievements here
  // Example:
  // {
  //   id: 1,
  //   title: "Best Project Award",
  //   issuer: "College Tech Fest",
  //   date: "2023",
  //   description: "Awarded for the best project in the annual tech fest.",
  //   image: require("../../Assets/certificates/best-project.png"),
  //   credentialUrl: "#"
  // }
];

const photoAlbums = [
  {
    id: 1,
    title: "Hackathon 2024",
    description: "Participated in the annual inter-college hackathon where we built innovative solutions to real-world problems.",
    images: [
      "https://via.placeholder.com/400x300?text=Hackathon+1",
      "https://via.placeholder.com/400x300?text=Hackathon+2",
      "https://via.placeholder.com/400x300?text=Hackathon+3"
    ]
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    description: "Attended and presented at the national tech conference, showcasing our latest project.",
    images: [
      "https://via.placeholder.com/400x300?text=Conference+1",
      "https://via.placeholder.com/400x300?text=Conference+2"
    ]
  },
  // Add more photo albums as needed
];

function Milestones() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeTab, setActiveTab] = useState('inter-college');

  const handleShow = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  
  const renderCertificates = (certificates) => {
    if (certificates.length === 0) {
      return (
        <Col className="text-center py-5">
          <AiOutlineTrophy size={50} className="mb-3" />
          <p>No achievements to display yet. Check back soon for updates!</p>
        </Col>
      );
    }
    
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {certificates.map((cert) => (
          <Col md={4} key={cert.id} className="project-card">
            <Card className="milestone-card">
              <div className="card-img-container" onClick={() => handleShow(cert)}>
                <img 
                  src={cert.image} 
                  alt={cert.issuer}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ color: '#6c63ff' }}>{cert.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {cert.issuer} • {cert.date}
                </Card.Subtitle>
                <Card.Text className="mb-3">{cert.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleShow(cert)}
                  >
                    View Certificate
                  </Button>
                  <a 
                    href={cert.credentialUrl} 
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
        ))}
      </Row>
    );
  };
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
                  <div className="card-img-container" onClick={() => handleShow(internship)}>
                    <img 
                      src={internship.image} 
                      alt={internship.company}
                    />
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
            <Col className="text-center py-5">
              <FaBriefcase size={50} className="mb-3" />
              <p>No internships to display yet. Check back soon for updates!</p>
            </Col>
          )}
        </Row>

        {/* Certification & Courses Section */}
        <h2 className="milestone-heading">
          <AiOutlineBook /> Certification & Courses
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {certifications.length > 0 ? (
            certifications.map((cert) => (
              <Col md={4} key={cert.id} className="project-card">
                <Card className="milestone-card">
                  <div className="card-img-container" onClick={() => handleShow(cert)}>
                    <img 
                      src={cert.image} 
                      alt={cert.issuer}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ color: '#6c63ff' }}>{cert.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {cert.issuer} • {cert.date}
                    </Card.Subtitle>
                    <Card.Text className="mb-3">{cert.description}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <a 
                        href={cert.credentialUrl} 
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
            <Col className="text-center py-5">
              <AiOutlineBook size={50} className="mb-3" />
              <p>No certifications to display yet. Check back soon for updates!</p>
            </Col>
          )}
        </Row>

        {/* Certificates & Achievements Section */}
        <h2 className="milestone-heading">
          <FaTrophy /> Certificates & Achievements
        </h2>
        
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="inter-college" className={activeTab === 'inter-college' ? 'active' : ''}>
                Inter-college
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="intra-college" className={activeTab === 'intra-college' ? 'active' : ''}>
                Intra-college
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Tab.Content>
            <Tab.Pane eventKey="inter-college">
              {renderCertificates(interCollegeAchievements)}
            </Tab.Pane>
            <Tab.Pane eventKey="intra-college">
              {renderCertificates(intraCollegeAchievements)}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* Photo Gallery Section */}
        <h2 className="milestone-heading">
          <AiOutlineCamera /> Photo Gallery
        </h2>
        <Container>
          {photoAlbums.map((album) => (
            <Card key={album.id} className="mb-4">
              <Card.Body>
                <h3 style={{ color: '#6c63ff' }}>{album.title}</h3>
                <p className="text-muted mb-3">{album.description}</p>
                <Row className="g-3">
                  {album.images.map((img, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                      <div className="gallery-image-container">
                        <img 
                          src={img} 
                          alt={`${album.title} ${idx + 1}`} 
                          className="img-fluid rounded"
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
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
