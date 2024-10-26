import React from "react";
import "./Feed.css";
import Post from "./Post/Post";
import SendPost from "./SendPost/SendPost";

function Feed() {
  return (
    <div className="feed">
      <SendPost />
      <Post />
    </div>
  );
}

export default Feed;
