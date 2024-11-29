import React, { useState } from "react";
import "./CreateQuestion.css";
import { createQuestion } from "../../../../Features/Question/QuestionSlice/QuestionSlice";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";

function CreateQuestion() {
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();

  const handleQuestion = () => {
    dispatch(createQuestion(question));
    setQuestion("");
  };

  return (
    <div className="create-question">
      <div className="create-questionHeader">
        <Avatar
          className="createQuestion-image"
          name="Foo Bar"
          size="30"
          round="150px"
        />
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          placeholder="what do you want to ask or share"
        />
      </div>
      <div className="create-questionLinks">
        <div onClick={handleQuestion} className="link-container">
          <MdOutlineLiveHelp />

          <span>Ask</span>
        </div>

        <div className="link-container">
          <HiOutlinePencilAlt />

          <span>Answer</span>
        </div>

        <div className="link-container">
          <GoPencil />

          <span>Post</span>
        </div>
      </div>
    </div>
  );
}

export default CreateQuestion;
