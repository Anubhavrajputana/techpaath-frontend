import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./PolicyModal.css";

const PolicyModal = ({ policy, onClose }) => {
  const [modalRoot, setModalRoot] = useState(null);

  // ✅ Get modal-root AFTER component mounts
  useEffect(() => {
    const root = document.getElementById("modal-root");
    setModalRoot(root);

    // Lock background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!policy || !modalRoot) return null;

  return createPortal(
    <div className="policy-overlay" onClick={onClose}>
      <div
        className="policy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="policy-header">
          <h2>{policy.title}</h2>
          <button
            className="policy-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="policy-body">
          {policy.sections.map((sec, index) => (
            <div className="policy-section" key={index}>
              <h4>{sec.heading}</h4>
              <p>{sec.text}</p>
            </div>
          ))}

          <div className="policy-footer">
            © 2025 <span>TechPaath Solutions</span> · Legal Compliance
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default PolicyModal;
