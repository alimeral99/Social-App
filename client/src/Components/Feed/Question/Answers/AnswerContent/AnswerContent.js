import React from "react";
import "./AnswerContent.css";
import AnswerLikeCommentBtn from "../AnswerLikeCommentBtn";

import { format } from "date-fns";
import Avatar from "react-avatar";

function AnswerContent({ answerInfo }) {
  return (
    <div className="answer-content">
      <div className="answerContent-box">
        <Avatar size="30" round="140px" />
        <div className="answerContent-body">
          <h3 className="answerOwner-username">{answerInfo.author.username}</h3>

          <span className="answerContent-createdDate">
            {format(answerInfo.createdAt, "dd MMMM yyyy")}
          </span>

          <p className="answerContent-text">{answerInfo.answerText}</p>
        </div>
      </div>

      <AnswerLikeCommentBtn />
    </div>
  );
}

export default AnswerContent;
