import React from "react";
import "./TopLinks.css";
import { Link, useParams } from "react-router-dom";

function TopLinks() {
  const { type } = useParams();

  const links = [
    { path: "answered", text: "Most Answered Questions" },
    { path: "liked", text: "Most Liked Questions" },
    { path: "newest", text: "Most Newest" },
    { path: "", text: "Home" },
  ];

  return (
    <div className="top-links-container">
      {links.map((link) => (
        <Link
          className="top-link"
          key={link.path}
          to={`/${link.path}`}
          style={{
            backgroundColor: type === link.path ? "#333" : "#f9f9f9",
          }}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default TopLinks;
