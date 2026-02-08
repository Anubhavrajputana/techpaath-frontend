import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { io } from "socket.io-client";
import "./Login.css";

// 🔌 SOCKET INIT
const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  /* =========================
     🔐 NORMAL LOGIN
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const { user, token } = res.data;

      login(user, token);

      // ✅ JOIN USER SOCKET ROOM
      socket.emit("joinUserRoom", `user_${user._id}`);

      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     🔑 GOOGLE LOGIN
  ========================= */
  const handleGoogleSuccess = async (res) => {
    try {
      const apiRes = await axiosInstance.post("/auth/google-login", {
        credential: res.credential,
      });

      const { user, token } = apiRes.data;

      login(user, token);

      // ✅ JOIN USER SOCKET ROOM
      socket.emit("joinUserRoom", `user_${user._id}`);

      navigate("/profile");
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google login failed");
    }
  };

  const handleGoogleError = () => {
    alert("Google login was cancelled or failed");
  };

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={11} sm={9} md={6} lg={4}>
          <Card className="login-card">
            <Card.Body>
              <div className="login-logo-wrapper">
                <img src="/Logo.png" alt="TechPaath Logo" className="login-logo" />
              </div>

              <h2 className="login-title">Welcome Back 👋</h2>
              <p className="login-subtitle">
                Login to continue your learning journey
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="floating-input">
                  <Form.Control
                    type="email"
                    placeholder=" "
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Label>Email</Form.Label>
                </Form.Group>

                <Form.Group className="floating-input">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder=" "
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Label>Password</Form.Label>

                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </Form.Group>

                <Button type="submit" disabled={loading} className="login-btn">
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Form>

              <div className="divider">or</div>

              <div className="google-btn-wrapper">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>

              <p className="signup-text">
                <span className="signup-helper">Don’t have an account?</span>
                <Link to="/signup" className="signup-link">
                  Sign Up
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
