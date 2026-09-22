import React from "react";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Post from "./Post";
import { posts } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import "../styles/home.css";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="page">
      <Navbar />
      <main className="feed">
        <p className="welcome-text">Welcome back, {currentUser?.fullName}</p>
        <Stories />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </main>
    </div>
  );
}
