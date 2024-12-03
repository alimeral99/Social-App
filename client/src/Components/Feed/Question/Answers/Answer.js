import React, { useState, useEffect } from "react";
import "./Answer.css";
import { useSelector, useDispatch } from "react-redux";
import AnswerContent from "./AnswerContent/AnswerContent";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Answers({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const [answerText, setAnswerText] = useState("");
  const [showMore, setShowMore] = useState(true);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleAnswer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/answer/getAnswer/${questionId}`
        );

        setAnswers(response.data);
      } catch (error) {
        console.log(error);
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
    const offset = answers.length;

    try {
      const response = await axios.get(
        `http://localhost:8080/answer/getAnswer/${questionId}`,
        {
          params: { offset },
        }
      );

      const newAnswers = response.data;

      console.log(newAnswers);

      setAnswers((prev) => [...prev, ...newAnswers]);

      if (newAnswers.length === 0) {
        setShowMore(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="create-answer">
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
      {answers.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        answers.map((answer) => (
          <AnswerContent answerInfo={answer} key={answer._id} />
        ))
      )}

      {answers.length > 0 && showMore && (
        <div className="showmoreBtn-container">
          <button className="showmore-btn" onClick={handleShowMore}>
            Daha fazla yorum göster
          </button>
        </div>
      )}

      {!showMore && answers.length > 0 && (
        <p className="shomore-info">no answer more</p>
      )}
    </div>
  );
}

export default Answers;
