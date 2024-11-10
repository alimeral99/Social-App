import React from "react";
import "./Answers.css";
import AnswerLikeCommentBtn from "./AnswerLikeCommentBtn";

import { format } from "date-fns";
import Avatar from "react-avatar";

function Answers({ answer }) {
  return (
    <div className="answer">
      <Avatar name={answer.author.username} size="30" round="140px" />

      <div className="answer-content">
        <div className="answer-header">
          <h3 className="answerOwner-username">{answer.author.username}</h3>

          <span className="answer-createdDate">
            {format(answer.createdAt, "dd MMMM yyyy")}
          </span>
        </div>

        <p className="answer-text">{answer.answerText}</p>

        <AnswerLikeCommentBtn />
      </div>
    </div>
  );
}

export default Answers;
