import React, { useEffect, useState } from "react";
import "./TopsQuestion.css";
import Question from "../Question";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

function TopQuestions() {
  const [questions, setQuestions] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://social-app-0otu.onrender.com/question/most?type=${type}`
        );
        console.log(response);
        setQuestions(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchQuestions();
  }, [type]);

  return (
    <div className="top-questions">
      <h2 className="topQuestions-header">Most Popular Questions</h2>

      {questions.length > 0 ? (
        questions.map((question) => (
          <Question question={question} key={question._id} />
        ))
      ) : (
        <p>No questions found</p>
      )}
    </div>
  );
}

export default TopQuestions;
