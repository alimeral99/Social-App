import React from "react";
import "./Question.css";
import Answers from "./Answers/Answers";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";

import Avatar from "react-avatar";
import { format } from "date-fns";

function Question({ question }) {
  return (
    <div className="question">
      <div className="question-header">
        <Avatar name="Foo Bar" size="30" round="150px" />
        <div className="question-owner">
          <h4 className="questionOwner-name">{question.author.username}</h4>
          <span className="question-createdDate">
            {format(question.createdAt, "dd MMMM yyyy")}
          </span>
          <button>Follow</button>
        </div>
      </div>

      <div className="question-body">
        <h3 className="question-content">{question.questionText}</h3>
      </div>

      {question.answers.map((answer) => (
        <Answers answer={answer} />
      ))}

      <LikeCommentButtons />
    </div>
  );
}

export default Question;
