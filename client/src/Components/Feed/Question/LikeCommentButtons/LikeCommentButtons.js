import React from "react";
import "./LikeCommentButtons.css";

import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";

function LikeCommentButtons({ questionInfo, toggleComments }) {
  return (
    <div className="like-commentButtons">
      <div className="button-container">
        <SlLike />
        <span className="like-info">{questionInfo.likes}</span>
      </div>

      <div className="button-container">
        <SlDislike />
        <span className="dislike-info">{questionInfo.dislikes}</span>
      </div>

      <div className="button-container">
        <GoComment onClick={toggleComments} />
        <span className="comment-info">{questionInfo.answerCount}</span>
      </div>
    </div>
  );
}

export default LikeCommentButtons;
