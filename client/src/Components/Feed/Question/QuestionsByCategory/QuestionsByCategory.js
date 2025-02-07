import React, { useEffect, useState } from "react";
import "./QuestionsByCategory.css";
import { fetchQuestionsByCategory } from "../../../../Features/Question/QuestionSlice/QuestionSlice";

import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Question from "../Question";
import axios from "axios";

function QuestionsByCategory() {
  const { filteredQuestions } = useSelector((state) => state.question);

  const { category } = useParams();
  const location = useLocation();
  const { photo } = location.state || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionsByCategory(category));
  }, [category]);

  return (
    <div className="questionsbycategory">
      <div className="category-info">
        {photo && <img className="category-photo" src={photo} alt="Profile" />}
        <h2 className="category-name">{category}</h2>
      </div>
      {filteredQuestions?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
}

export default QuestionsByCategory;
