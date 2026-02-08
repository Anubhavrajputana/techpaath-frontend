import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaLightbulb,
  FaAward,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./About.css";
import WorkshopModal from "../components/WorkshopModal";
import MentorModal from "../components/MentorModal";

/* ================= DATA ================= */

const statsList = [
  { id: 1, label: "Learners", value: 120, suffix: "+" },
  { id: 2, label: "Internships", value: 20, suffix: "+" },
  { id: 3, label: "Projects", value: 50, suffix: "+" },
  { id: 4, label: "Hours Content", value: 120, suffix: "+" },
];

const values = [
  { icon: <FaLaptopCode />, title: "Hands-on Projects", desc: "Learn by building real projects that you can showcase to employers." },
  { icon: <FaLightbulb />, title: "Industry-Relevant", desc: "Courses designed with industry mentors & hiring needs in mind." },
  { icon: <FaUsers />, title: "Mentorship & Community", desc: "Peer community, doubt sessions and mentor guidance." },
  { icon: <FaAward />, title: "Career-Focused", desc: "Roadmaps, interview prep and internship pathways." },
];

const team = [
  {
    id: 1,
    name: "Harsh Chauhan",
    role: "CEO",
    img: "/team/harsh1.jpeg",
    bio: "Visionary CEO with a strong technical background.",
    socials: {
      linkedin: "https://www.linkedin.com/in/harsh-chauhan-7b6a9a242/",
      github: "https://github.com/Anubhavrajputana",
    },
  },
  {
    id: 2,
    name: "Kavya Rajput",
    role: "Founder",
    img: "/team/kavya.jpeg",
    bio: "Founder and driving force behind the company.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kavya-rajput-338375241",
      github: "https://github.com/kavyarajput722",
    },
  },
  {
    id: 3,
    name: "Rohit Yadav",
    role: "Director",
    img: "/team/rohit.jpeg",
    bio: "Strategic Director focused on growth & operations.",
    socials: {
      linkedin: "https://www.linkedin.com/in/rohit-yadav-b146a4243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
  },
];
const testimonials = [
  {
    id: 1,
    name: "Komal Singh",
    role: "Web Development Intern",
    text: "TechPaath helped me build real projects and crack my first internship.",
    avatar: "/testimonials/Komal Singh.jpeg",
  },
  {
    id: 2,
    name: "Sashikant Sharma",
    role: "Frontend Developer",
    text: "The mentorship and roadmap were extremely helpful and practical.",
    avatar: "/testimonials/Sashikant Sharma.jpeg",
  },
  {
    id: 3,
    name: "Abhay Maurya",
    role: "UI/UX Designer",
    text: "Amazing platform! The learning style is very industry oriented.",
    avatar: "/testimonials/Abhay Maurya.jpeg",
  },
];


/* ================= COUNTER HOOK ================= */

function useCounter(end, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const inc = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return value;
}

export default function About() {
  const [showWorkshop, setShowWorkshop] = useState(false);
const [showMentor, setShowMentor] = useState(false);

  // Stats counters using custom hook
  const counters = statsList.map((s) => useCounter(s.value, 1500));
  // Testimonials slider
  const [idx, setIdx] = useState(0);
  const autoRef = useRef();

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(autoRef.current);
  }, []);

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-inner"
          >
            <div className="hero-left">
              <h1>
                Learn. Build. Get Hired. <span>Faster.</span>
              </h1>
              <p className="lead">
                TechPaath Solutions empowers students with industry focused
                courses, hands-on projects, and internship pathways — all in a
                single platform.
              </p>

              <div className="hero-ctas">
    <button className="btn btn-primary" onClick={() => window.location='/get-started'}>
    Get Started
    </button>
                <button className="btn btn-light" onClick={() => window.location = '/courses'}>Explore Courses</button>
              </div>
            </div>

            <motion.div
              className="hero-right"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-card">
                <h4>Our Commitment</h4>
                <p>
                  Practical learning, project portfolios and direct internship
                  opportunities — designed to get you industry-ready.
                </p>
                <div className="mini-stats">
                  <div><strong>12000+</strong><span>Learners</span></div>
                  <div><strong>640+</strong><span>Internships</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container grid-2">
          <motion.div
            className="mission-left"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Mission</h2>
            <p>
              To democratize technical education and make job-ready learning
              accessible for every student. We design short, practical and
              project-oriented courses that help you learn by doing and build a
              strong portfolio.
            </p>
            <ul className="mission-points">
              <li>Project-first curriculum</li>
              <li>Industry-vetted roadmaps</li>
              <li>Mentor-guided learning</li>
            </ul>
          </motion.div>

          <motion.div
            className="mission-right"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-box">
              <h3>Why TechPaath?</h3>
              <p>
                We focus on building real skills with measurable outcomes —
                certifications, portfolios, and internships that matter.
              </p>
              <div className="mission-actions">
  {/* <button
  className="mission-btn"
  onClick={() => {
    window.open(
      "#",
      "_blank"
    );
  }}
>
  Join a Workshop
</button> */}


  <button
    className="mission-btn mentor"
    onClick={() => setShowMentor(true)}
  >
    Become a Mentor
  </button>
</div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                className="value-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container stats-wrap">
          {statsList.map((s, i) => (
            <motion.div
              className="stat-card"
              key={s.id}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="stat-value">
                <strong>{counters[i].toLocaleString()}</strong>
                <span className="suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
  <div className="container">
    <h2 className="section-title">Meet Our Team</h2>

    <div className="team-grid">
      {team.map((t) => (
        <motion.div
          key={t.id}
          className="team-card"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* ✅ CIRCULAR IMAGE */}
          <div className="team-avatar">
            <img src={t.img} alt={t.name} />
          </div>

          {/* ✅ TEXT */}
          <h3>{t.name}</h3>
          <p className="role">{t.role}</p>
          <p className="team-bio">{t.bio}</p>

          {/* ✅ SAFE SOCIAL LINKS */}
          <div className="team-socials">
            {t.socials?.linkedin && (
              <a
                href={t.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            )}

            {t.socials?.github && (
              <a
                href={t.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="about-testimonials">
        <div className="container">
          <h2 className="section-title">Student Success Stories</h2>

          <div className="testimonials-wrap">
            <button
              className="test-nav left"
              onClick={() => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
              aria-label="previous"
            >
              ◀
            </button>

            <motion.div
              className="testimonial-card"
              key={testimonials[idx].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="test-top">
                <img src={testimonials[idx].avatar} alt={testimonials[idx].name} />
                <div>
                  <h4>{testimonials[idx].name}</h4>
                  <p className="muted">{testimonials[idx].role}</p>
                </div>
              </div>
              <p className="test-text">“{testimonials[idx].text}”</p>
            </motion.div>

            <button
              className="test-nav right"
              onClick={() => setIdx((p) => (p + 1) % testimonials.length)}
              aria-label="next"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Ready to accelerate your career?</h3>
            <p>Join thousands of learners building projects and getting internships.</p>
            <div className="cta-actions">
    <button className="btn btn-primary" onClick={() => window.location='/start-learning'}>
      Start Learning
    </button>
    <button className="btn btn-light" onClick={() => window.location='/contact-sales'}>
      Contact Sales
  </button>
            </div>
          </motion.div>
        </div>
      </section>
      {showWorkshop && (
  <WorkshopModal onClose={() => setShowWorkshop(false)} />
)}

{showMentor && (
  <MentorModal onClose={() => setShowMentor(false)} />
)}

    </div>
  );
}  