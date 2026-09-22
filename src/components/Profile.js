import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { posts } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import "../styles/profile.css";

export default function Profile() {
  const { username } = useParams();
  const { currentUser } = useAuth();
  const isOwnProfile = currentUser?.username === username;

  const userPosts = posts.filter((p) => p.username === username);
  const displayName = isOwnProfile ? currentUser.fullName : username;
  const initial = username?.charAt(0).toUpperCase();

  return (
    <div className="page">
      <Navbar />
      <main className="profile">
        <section className="profile-header">
          <div className="profile-avatar-large">{initial}</div>
          <div className="profile-info">
            <div className="profile-top-row">
              <h2 className="profile-username">{username}</h2>
              {isOwnProfile && (
                <button className="profile-edit-btn">Edit Profile</button>
              )}
            </div>
            <div className="profile-stats">
              <span>
                <strong>{userPosts.length}</strong> posts
              </span>
              <span>
                <strong>248</strong> followers
              </span>
              <span>
                <strong>180</strong> following
              </span>
            </div>
            <p className="profile-fullname">{displayName}</p>
          </div>
        </section>

        <hr className="profile-divider" />

        <section className="profile-grid">
          {userPosts.length === 0 ? (
            <p className="profile-empty">No posts yet.</p>
          ) : (
            userPosts.map((post) => (
              <div
                className="profile-grid-item"
                style={{ backgroundColor: post.color }}
                key={post.id}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
