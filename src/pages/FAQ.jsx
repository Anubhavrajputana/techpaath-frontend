import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "./FAQ.css";

const faqData = [
  {
    question: "What is TechPaath Solutions?",
    answer:
      "TechPaath Solutions is an online learning platform that provides internships, courses, notes, roadmaps, contests, and problem-solving features for students.",
  },
  {
    question: "Are the courses beginner friendly?",
    answer:
      "Yes! All courses are designed for absolute beginners with proper guidance, real-world projects, and step-by-step structured learning.",
  },
  {
    question: "Do I get certificates?",
    answer:
      "Yes, students receive verified certificates for courses, contests, and internships based on completion and performance.",
  },
  {
    question: "How can I apply for internships?",
    answer:
      "You can apply directly through our Internship portal. Once you submit the form, our team reviews your profile and selects candidates.",
  },
  {
    question: "Is TechPaath free to use?",
    answer:
      "Most of our notes, resources, and problem-solving features are free. Premium content and courses are also available at affordable prices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  /* 🔥 SUBMIT FEEDBACK */
  const submitFeedback = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please write your feedback 🙏");
      return;
    }

    try {
      await axiosInstance.post("/feedbacks", {
        name: user?.name,
        email: user?.email,
        message,
      });

      alert("Thank you for your feedback ❤️");
      setMessage("");
      setShowFeedback(false);
    } catch (err) {
      alert("Failed to submit feedback ❌");
    }
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Find answers to the questions students ask the most.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${open === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="arrow">
                  {open === index ? "−" : "+"}
                </span>
              </div>

              <div
                className="faq-answer"
                style={{
                  maxHeight: open === index ? "200px" : "0px",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 FEEDBACK BUTTON */}
        <div className="feedback-btn-wrapper">
          <button
            className="feedback-btn"
            onClick={() => setShowFeedback(true)}
          >
            💬 Give Feedback
          </button>
        </div>
      </div>

      {/* 🔥 FEEDBACK MODAL */}
      {showFeedback && (
        <div className="feedback-modal">
          <div className="feedback-box">
            <h2>We value your feedback 💙</h2>

            {/* ✅ USER INFO */}
            <div className="student-info">
              <input
                type="text"
                value={user?.name || "Student"}
                disabled
              />
              <input
                type="email"
                value={user?.email || "email@example.com"}
                disabled
              />
            </div>

            <form onSubmit={submitFeedback}>
              <textarea
                placeholder="Write your feedback here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="feedback-actions">
                <button
                  type="button"
                  onClick={() => setShowFeedback(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit">
                  Submit 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
