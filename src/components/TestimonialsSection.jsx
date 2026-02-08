import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Web Developer Intern",
    text: "SkillBoost helped me land my first internship after completing the MERN stack roadmap!",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Sharma",
    role: "Data Science Student",
    text: "The notes and challenges made learning Python fun and interactive.",
    img: "https://i.pravatar.cc/100?img=25",
  },
  {
    name: "Rahul Verma",
    role: "Competitive Programmer",
    text: "The contests and coding problems here improved my problem-solving skills drastically!",
    img: "https://i.pravatar.cc/100?img=18",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-5">
      <Container>
        <h2 className="text-center section-title mb-5">What Our Learners Say</h2>
        <Carousel variant="dark" className="testimonial-carousel">
          {testimonials.map((t, i) => (
            <Carousel.Item key={i}>
              <div className="testimonial-item mx-auto text-center">
                <div className="testimonial-card p-4">
                  <img src={t.img} alt={t.name} className="rounded-circle mb-3" />
                  <h5 className="testimonial-name">{t.name}</h5>
                  <p className="testimonial-role">{t.role}</p>
                  <p className="testimonial-text">{t.text}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
