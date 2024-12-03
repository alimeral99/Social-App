import React, { useState } from "react";
import "./Question.css";
import Answers from "./Answers/Answer";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";

import Avatar from "react-avatar";
import { format } from "date-fns";

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleComments() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="question">
      <div className="question-container">
        <div className="question-header">
          <Avatar
            name={question.authorDetails?.username}
            size="30"
            round="150px"
          />
          <div className="question-owner">
            {question.authorDetails && (
              <h4 className="questionOwner-name">
                {question.authorDetails.username}
              </h4>
            )}
            <span className="question-createdDate">
              {format(question.createdAt, "dd MMMM yyyy")}
            </span>
            <button>Follow</button>
          </div>
        </div>

        <div className="question-body">
          <h3 className="question-content">{question.questionText}</h3>
        </div>

        <LikeCommentButtons
          questionInfo={question}
          toggleComments={toggleComments}
        />
      </div>

      {isOpen && (
        <div className={`question-answers ${isOpen ? "open" : "close"}`}>
          <Answers
            questionId={question._id}
            answerCount={question.answerCount}
          />
        </div>
      )}
    </div>
  );
}

export default Question;
