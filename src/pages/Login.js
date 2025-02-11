import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, guestLogin } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    try {
      const response = await guestLogin();
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to login as guest");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Event Management Platform
      </h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          <button
            type="submit"
            style={{
              flex: "1",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleGuestLogin}
            style={{
              flex: "1",
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Guest Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            style={{
              flex: "1",
              padding: "10px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </div>
      </form>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
          fontSize: "14px",
        }}
      >
        <p>
          <a
            href="https://github.com/SumitSharma2210"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#4CAF50",
              textDecoration: "none",
              marginRight: "15px",
            }}
          >
            My GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-sharma-a13995281/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2196F3", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
