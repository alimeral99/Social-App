import React from "react";

import "./SendPost.css";

import Avatar from "react-avatar";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";

function SendPost() {
  return (
    <div className="send-post">
      <div className="send-postHeader">
        <Avatar
          className="sendPost-image"
          name="Foo Bar"
          size="30"
          round="150px"
        />
        <input type="text" placeholder="what do you want to ask or share" />
      </div>
      <div className="send-postLinks">
        <div className="link-container">
          <MdOutlineLiveHelp />

          <span>Ask</span>
        </div>

        <div className="link-container">
          <HiOutlinePencilAlt />

          <span>Answer</span>
        </div>

        <div className="link-container">
          <GoPencil />

          <span>Post</span>
        </div>
      </div>
    </div>
  );
}

export default SendPost;
