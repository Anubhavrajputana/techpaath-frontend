import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./StatsSection.css";

const stats = [
  { label: "Learners", value: 10000, icon: "🎓" },
  { label: "Mentors", value: 200, icon: "👨‍🏫" },
  { label: "Companies", value: 150, icon: "🏢" },
  { label: "Courses", value: 50, icon: "📘" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index} className="text-center mb-4">
              <div className="stat-icon">{stat.icon}</div>
              <h2 className="stat-number">
                <CountUp end={stat.value} duration={3} />+
              </h2>
              <p className="stat-label">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
