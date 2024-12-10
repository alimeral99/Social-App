import React, { useEffect, useState } from "react";
import "./TopicsQuestions.css";
import { useParams } from "react-router-dom";
import Question from "../Question";
import axios from "axios";

function TopicQuestions() {
  const [topicQuestions, setTopicQuestions] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/question/search",
          {
            params: { category },
          }
        );
        setTopicQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchCategoryData();
  }, [category]);

  return (
    <div className="topics-questions">
      <h1>Topic Questions</h1>
      {topicQuestions?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
}

export default TopicQuestions;
