import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header
      style={{
        backgroundColor: "#007BFF",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Event Management Platform Dashboard
        </Link>
        {token && (
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF4D4F",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#FF6668")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF4D4F")}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
