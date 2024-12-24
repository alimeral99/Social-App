import React, { useEffect } from "react";
import "./Feed.css";
import CreateQuestion from "./Question/CreateQuestion/CreateQuestion";
import Question from "./Question/Question";
import TopLinks from "./TopLinks/TopLinks";
import { fetchQuestions } from "../../Features/Question/QuestionSlice/QuestionSlice";
import { useSelector, useDispatch } from "react-redux";

function Feed() {
  const { questions, isSuccess } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="feed">
      <TopLinks />

      <CreateQuestion />

      {questions?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
}

export default Feed;
