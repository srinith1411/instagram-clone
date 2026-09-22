import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-logo">404</h1>
        <p className="auth-subtitle">Sorry, this page isn't available.</p>
        <Link to="/" style={{ color: "#0095f6", fontWeight: 600 }}>
          Go back to Instagram
        </Link>
      </div>
    </div>
  );
}
