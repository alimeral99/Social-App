import React from "react";
import "./CreateAnswer.css";

function CreateAnswer() {
  return (
    <div className="createAnswer-container">
      <textarea
        placeholder="add your answer.."
        className="createAnswer-input"
      />

      <button className="createAnswer-submit">Send</button>
    </div>
  );
}

export default CreateAnswer;
