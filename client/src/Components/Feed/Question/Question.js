import React, { useState, useEffect } from "react";
import "./Question.css";
import Answers from "./Answers/Answer";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";
import { updateAnswerCount } from "../../../Features/Question/QuestionSlice/QuestionSlice";

import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleComments() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    socket.on("update-answer-count", (data) => {
      dispatch(
        updateAnswerCount({
          questionId: data.questionId,
          answerCount: data.answerCount,
        })
      );
    });

    return () => {
      socket.off("update-answer-count");
    };
  }, [question.questionIdd, dispatch]);

  return (
    <div className="question">
      <div className="question-container">
        <div className="question-header">
          <Avatar name={question.author?.username} size="30" round="150px" />
          <div className="question-owner">
            {question.author && (
              <h4 className="questionOwner-name">
                {question.author?.username}
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
