import React from "react";
import "./Question.css";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";

import Avatar from "react-avatar";
import { format } from "date-fns";

function Question({ question }) {
  return (
    <div className="question">
      <div className="question-header">
        <Avatar name="Foo Bar" size="30" round="150px" />
        <div className="post-owner">
          <h4 className="questionOwner-name">{question.author.username}</h4>
          <span className="question-createdDate">
            {format(question.createdAt, "dd MMMM yyyy")}
          </span>
          <button>Follow</button>
        </div>
      </div>

      <div className="question-body">
        <h3 className="question-name">{question.questionText}</h3>
        <div className="question-content">
          <p></p>
        </div>
      </div>
      <LikeCommentButtons />
    </div>
  );
}

export default Question;
