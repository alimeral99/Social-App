import React from "react";
import "./TopLinks.css";
import { Link } from "react-router-dom";

function TopLinks() {
  return (
    <div className="top-links-container">
      <Link to="/topquestions/answered" className="top-link">
        Most Answered Questions
      </Link>
      <Link to="/topquestions/liked" className="top-link">
        Most Liked Questions
      </Link>
      <Link to="/topquestions/newest" className="top-link">
        Most Newest
      </Link>
    </div>
  );
}

export default TopLinks;
