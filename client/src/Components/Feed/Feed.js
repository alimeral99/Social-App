import React, { useEffect } from "react";
import "./Feed.css";
import SendPost from "./SendPost/SendPost";
import Question from "./Question/Question";
import { getAllQuestions } from "../../Features/Question/QuestionSlice/QuestionApi";

import { useSelector, useDispatch } from "react-redux";

function Feed() {
  const { questions } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllQuestions(dispatch);
  }, []);

  return (
    <div className="feed">
      <SendPost />

      {questions?.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

export default Feed;
