import React from "react";
import "./Answer.css";

import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";

function AnswerLikeCommentBtn() {
  return (
    <div className="answer-buttons">
      <div className="button-container">
        <SlLike />
        <span className="like-info"></span>
      </div>

      <div className="button-container">
        <SlDislike />
        <span className="dislike-info"></span>
      </div>
    </div>
  );
}

export default AnswerLikeCommentBtn;
