import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PolicyModal from "./PolicyModal";
import { policies } from "./PolicyData";
import "./Footer.css";

const Footer = () => {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="mb-4 footer-top">

            {/* BRAND */}
            <Col md={4} sm={12} className="mb-4">
              <h5 className="footer-brand">TechPaath Solutions</h5>
              <p className="footer-desc">
                Empowering students with industry-ready skills, internships,
                and real-world learning experiences.
              </p>
            </Col>

            {/* QUICK LINKS */}
<Col md={4} sm={12} className="mb-4">
  <h6 className="footer-heading">Quick Links</h6>
  <ul className="footer-links">
    <li>
      <a href="/courses" className="footer-link">Courses</a>
    </li>
    <li>
      <a href="/internships" className="footer-link">Internships</a>
    </li>
    <li>
      <a href="/notes" className="footer-link">Notes</a>
    </li>
    <li>
      <a href="/contact" className="footer-link">Contact</a>
    </li>
  </ul>
</Col>


            {/* LEGAL + SOCIAL */}
            <Col md={4} sm={12}>
              <h6 className="footer-heading">Legal</h6>
              <ul className="footer-links">
                <li><button onClick={() => setActivePolicy("terms")}>Terms & Conditions</button></li>
                <li><button onClick={() => setActivePolicy("privacy")}>Privacy Policy</button></li>
                <li><button onClick={() => setActivePolicy("refund")}>Refund Policy</button></li>
                <li><button onClick={() => setActivePolicy("cookies")}>Cookie Policy</button></li>
              </ul>

              <div className="social-icons mt-3">
  <a
    href="https://www.linkedin.com/company/techpaath-solutions/posts/?feedView=all"
    aria-label="LinkedIn"
    className="social-btn linkedin"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a
    href="https://www.instagram.com/techpaathsolutions?igsh=MXBieXNqa2o0ZmJkOQ=="
    aria-label="Instagram"
    className="social-btn instagram"
  >
    <i className="fab fa-instagram"></i>
  </a>
</div>

            </Col>

          </Row>

          <hr className="footer-divider" />

          <p className="text-center copyright">
            © {new Date().getFullYear()} <span>TechPaath Solutions</span>. All Rights Reserved.
          </p>
        </Container>
      </footer>

      {/* POLICY MODAL */}
      {activePolicy && (
        <PolicyModal
          policy={policies[activePolicy]}
          onClose={() => setActivePolicy(null)}
        />
      )}
    </>
  );
};

export default Footer;
