import React, { useState } from "react";
import { signup } from "../../services/authService";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "student" });
  const [message, setMessage] = useState("");

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await signup(formData);
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <select name="role" onChange={handleChange} value={formData.role}>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
