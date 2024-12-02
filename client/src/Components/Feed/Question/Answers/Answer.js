import React, { useState, useEffect } from "react";
import "./Answer.css";
import { useSelector, useDispatch } from "react-redux";
import AnswerContent from "./AnswerContent/AnswerContent";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Answers({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const [answerError, setAnswerError] = useState("");
  const [offset, setOffset] = useState(2);
  const [answerText, setAnswerText] = useState("");
  const [showMore, setShowMore] = useState(true);
  const limit = 2;

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleAnswer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/answer/getAnswer/${questionId}`
        );

        setAnswers(response.data);
      } catch (error) {
        setAnswerError(error.response.data);
      }
    };
    handleAnswer();
  }, [questionId]);

  const handleCreateAnswer = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${currentUser.user.token}`,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/answer/create",
        { answerText, questionId },
        config
      );
      setAnswers((prev) => [...prev, response.data]);
    } catch (error) {
      toast.error(error.response.data);
    }

    setAnswerText("");
  };

  const handleShowMore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/answer/getAnswer/${questionId}`,
        {
          params: { offset, limit },
        }
      );
      const newAnswers = response.data;

      setAnswers((prev) => [...prev, ...newAnswers]);
      setOffset((prev) => prev + newAnswers.length);

      if (newAnswers.length < limit) {
        setShowMore(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="create-answer">
        {answerError && <p>{answerError}</p>}
        <form onSubmit={handleCreateAnswer} className="createAnswer-form">
          <textarea
            placeholder="plase add your answer"
            className="createAnswer-input"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />

          <button className="createAnswer-submit">Add Comment</button>
        </form>
      </div>

      {answers &&
        answers.map((answer) => (
          <AnswerContent answerInfo={answer} key={answer._id} />
        ))}

      {showMore ? (
        <div className="showmoreBtn-container">
          <button className="showmore-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      ) : (
        <p className="showmore-info">no more comments</p>
      )}
    </div>
  );
}

export default Answers;
