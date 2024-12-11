import React from "react";
import axios from "axios";
import "./SidebarOption.css";

import { Link } from "react-router-dom";

function SidebarOption({ imageLink, category }) {
  return (
    <div className="sidebar-options">
      <div className="sidebar-option">
        <img src={imageLink} alt="image" />
        <Link
          className="category-text"
          to={`/topics/${category}`}
          state={{ photo: imageLink }}
        >
          {category}
        </Link>
      </div>
    </div>
  );
}

export default SidebarOption;
