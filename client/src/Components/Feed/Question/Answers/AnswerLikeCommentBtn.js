import React from "react";
import "./Answers.css";

import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";

function AnswerLikeCommentBtn() {
  return (
    <div className="answer-buttons">
      <div className="button-container">
        <SlLike />
        <span className="like-info">55</span>
      </div>

      <div className="button-container">
        <SlDislike />
        <span className="dislike-info">4</span>
      </div>

      <div className="button-container">
        <GoComment />
        <span className="comment-info">4</span>
      </div>
    </div>
  );
}

export default AnswerLikeCommentBtn;
