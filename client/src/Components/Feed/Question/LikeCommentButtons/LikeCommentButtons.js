import React from "react";
import "./LikeCommentButtons.css";

import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";

function LikeCommentButtons({ toggleComments }) {
  return (
    <div className="like-commentButtons">
      <div className="button-container">
        <SlLike />
        <span className="like-info">55</span>
      </div>

      <div className="button-container">
        <SlDislike />
        <span className="dislike-info">4</span>
      </div>

      <div className="button-container">
        <GoComment onClick={toggleComments} />
        <span className="comment-info">4</span>
      </div>
    </div>
  );
}

export default LikeCommentButtons;
