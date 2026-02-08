import React, { useState } from "react";
import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await forgotPassword(email);
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
