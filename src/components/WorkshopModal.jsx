import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import "./modal.css";

export default function WorkshopModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/workshop/register", form);
    alert("Registered successfully! Admin will share meeting link.");
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <motion.div
        className="modal-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2>🚀 Join Workshop</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" required onChange={e => setForm({...form,name:e.target.value})} />
          <input placeholder="Email" required onChange={e => setForm({...form,email:e.target.value})} />
          <input placeholder="Phone" required onChange={e => setForm({...form,phone:e.target.value})} />
          <input placeholder="College / Company" onChange={e => setForm({...form,college:e.target.value})} />
          <button className="btn-primary">Register</button>
        </form>
        <button className="close-btn" onClick={onClose}>✕</button>
      </motion.div>
    </div>
  );
}
