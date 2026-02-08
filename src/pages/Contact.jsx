import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name,
        email,
        message,
      };

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-card">
          <h1>Contact Us</h1>
          <p>
            Have questions, partnership ideas, or need support?
            Our team replies within 24 hours.
          </p>

          <h3 className="info-title">📍 Address</h3>
          <p className="info-text">TechPaath Solutions, Dhampur, UP, India</p>

          <h3 className="info-title">📞 Phone</h3>
<p className="info-text">
  <a href="tel:+916399764578" className="contact-link">
    +91 6399764578
  </a>
</p>


          <h3 className="info-title">📧 Email</h3>
<p className="info-text">
  <a
    href="mailto:Teamtechpaathsolu@gmail.com"
    className="contact-link"
  >
    Teamtechpaathsolu@gmail.com
  </a>
</p>


          <h3 className="info-title">🌐 Social Media</h3>
          <div className="social-links">
  <a
    href="https://www.instagram.com/techpaathsolutions?igsh=MXBieXNqa2o0ZmJkOQ=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a
    href="https://www.linkedin.com/company/techpaath-solutions/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>
</div>

        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={submitHandler}>
          <h2>Send a Message</h2>

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>

      </div>
    </div>
  );
}
