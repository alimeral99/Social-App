import React, { useState, useEffect } from "react";
import "./Answer.css";
import { useSelector, useDispatch } from "react-redux";
import AnswerContent from "./AnswerContent/AnswerContent";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Answers({ questionId, answerCount }) {
  const [answerText, setAnswerText] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  console.log(questionId);

  useEffect(() => {
    // there is no answer
    if (answerCount > 0) {
      setLoading(true);

      const handleAnswer = async () => {
        try {
          const response = await axios.get(
            `sa-backend-eta.vercel.app/answer/getAnswer/${questionId}`
          );

          setAnswers(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      handleAnswer();
    }
  }, [questionId, answerCount]);

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

      setAnswers((prev) => [...prev, ...newAnswers]);

      if (newAnswers.length === 0) {
        setShowMore(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) return <p>Loading answers...</p>;

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
      {answers?.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        answers?.map((answer) => (
          <AnswerContent answerInfo={answer} key={answer._id} />
        ))
      )}

      {answers?.length > 0 && showMore && (
        <div className="showmoreBtn-container">
          <button className="showmore-btn" onClick={handleShowMore}>
            Daha fazla yorum göster
          </button>
        </div>
      )}

      {!showMore && answers?.length > 0 && (
        <p className="showmore-info">no answer more</p>
      )}
    </div>
  );
}

export default Answers;
