import React, { useState } from "react";
import "./Question.css";
import Answers from "./Answers/Answers";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";
import CreateAnswer from "./Answers/CreateAnswer/CreateAnswer";

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
          <Avatar name="Foo Bar" size="30" round="150px" />
          <div className="question-owner">
            {question.author && (
              <h4 className="questionOwner-name">{question.author.username}</h4>
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

        <LikeCommentButtons toggleComments={toggleComments} />
      </div>

      {isOpen && (
        <div className={`question-answers ${isOpen ? "open" : "close"}`}>
          <CreateAnswer />
          {question.answers.map((answer) => (
            <Answers answer={answer} key={answer._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Question;
