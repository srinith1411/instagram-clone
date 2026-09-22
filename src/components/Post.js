import React, { useState } from "react";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [saved, setSaved] = useState(false);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  function handleAddComment(e) {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) return;
    setComments((prev) => [...prev, text]);
    setCommentText("");
  }

  return (
    <article className="post">
      <div className="post-header">
        <div className="post-avatar">
          {post.username.charAt(0).toUpperCase()}
        </div>
        <div className="post-header-text">
          <span className="post-username">{post.username}</span>
          <span className="post-location">{post.location}</span>
        </div>
      </div>

      <div
        className="post-image"
        style={{ backgroundColor: post.color }}
        onDoubleClick={() => {
          if (!liked) toggleLike();
        }}
      />

      <div className="post-actions">
        <button
          className={`icon-btn ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-label="Like"
        >
          {liked ? "♥" : "♡"}
        </button>
        <button className="icon-btn" aria-label="Comment">
          ◌
        </button>
        <button
          className={`icon-btn save-btn ${saved ? "saved" : ""}`}
          onClick={() => setSaved((prev) => !prev)}
          aria-label="Save"
        >
          {saved ? "▮" : "▯"}
        </button>
      </div>

      <div className="post-likes">{likeCount.toLocaleString()} likes</div>

      <div className="post-caption">
        <span className="post-username">{post.username}</span> {post.caption}
      </div>

      {comments.length > 0 && (
        <ul className="post-comments">
          {comments.map((c, i) => (
            <li key={i}>
              <span className="post-username">you</span> {c}
            </li>
          ))}
        </ul>
      )}

      <div className="post-time">{post.timeAgo}</div>

      <form className="comment-form" onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit" disabled={!commentText.trim()}>
          Post
        </button>
      </form>
    </article>
  );
}
