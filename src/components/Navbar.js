import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Instagram
        </Link>

        <input
          className="navbar-search"
          type="text"
          placeholder="Search"
          disabled
        />

        <nav className="navbar-links">
          <Link to="/" title="Home">
            Home
          </Link>
          <Link to={`/profile/${currentUser?.username}`} title="Profile">
            {currentUser?.avatar}
          </Link>
          <button onClick={handleLogout} className="navbar-logout">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
