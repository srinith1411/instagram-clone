import React from "react";
import { stories } from "../data/mockData";

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <div className="story-ring">
            <div className="story-avatar">
              {story.username.charAt(0).toUpperCase()}
            </div>
          </div>
          <span className="story-username">{story.username}</span>
        </div>
      ))}
    </div>
  );
}
