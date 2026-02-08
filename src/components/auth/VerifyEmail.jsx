import React, { useEffect, useState } from "react";
import { verifyEmail } from "../../services/authService";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const data = await verifyEmail(token);
        setMessage(data.message);
      } catch (err) {
        setMessage(err.response.data.message);
      }
    };
    verify();
  }, [token]);

  return (
    <div className="auth-form">
      <h2>Email Verification</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
