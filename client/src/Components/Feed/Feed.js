import React, { useEffect } from "react";
import "./Feed.css";
import CreateQuestion from "./Question/CreateQuestion/CreateQuestion";
import { toast } from "react-toastify";
import { reset } from "../../Features/Question/QuestionSlice/QuestionSlice";
import Question from "./Question/Question";
import { fetchQuestions } from "../../Features/Question/QuestionSlice/QuestionSlice";
import { useSelector, useDispatch } from "react-redux";

function Feed() {
  const { questions, isSuccess, isError, message } = useSelector(
    (state) => state.question
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, message, dispatch]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="feed">
      <CreateQuestion />

      {questions?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
}

export default Feed;
