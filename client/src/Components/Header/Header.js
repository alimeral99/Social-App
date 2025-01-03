import React from "react";
import "./Header.css";
import { logoutUser } from "../../Features/User/UserSlice";

import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

import { RiChatFollowUpLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="navbar">
      <Link className="link" to={"/"}>
        <h1 className="navbar-logo">Social app</h1>
      </Link>

      <div className="navbar-links">
        <div className="icon-container">
          <AiOutlineHome className="navbar-icon" />
        </div>
        <div className="icon-container">
          <RiChatFollowUpLine className="navbar-icon" />
        </div>
        <div className="icon-container">
          <FaRegEdit className="navbar-icon" />
        </div>
      </div>

      <div className="navbar-searchbox">
        <MdOutlineSearch className="input-icon" />
        <input type="text" />
      </div>

      <div className="navbar-profile">
        <Avatar name="Foo Bar" size="30" round="150px" />

        <button className="profile-button">Add Question</button>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
