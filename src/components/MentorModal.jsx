import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import "./modal.css";

export default function MentorModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    linkedin: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/mentor/apply", form);
    alert("Mentor application submitted!");
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <motion.div className="modal-box">
        <h2>👨‍🏫 Become a Mentor</h2>
        <form onSubmit={submit}>
          <input placeholder="Full Name" required onChange={e => setForm({...form,name:e.target.value})}/>
          <input placeholder="Email" required onChange={e => setForm({...form,email:e.target.value})}/>
          <input placeholder="Expertise (React, AI, etc)" required onChange={e => setForm({...form,expertise:e.target.value})}/>
          <input placeholder="Years of Experience" required onChange={e => setForm({...form,experience:e.target.value})}/>
          <input placeholder="LinkedIn Profile" onChange={e => setForm({...form,linkedin:e.target.value})}/>
          <button className="btn-primary">Apply</button>
        </form>
        <button className="close-btn" onClick={onClose}>✕</button>
      </motion.div>
    </div>
  );
}
