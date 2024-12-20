import React, { useState, useEffect } from "react";
import "./LikeCommentButtons.css";
import {
  toggleLike,
  updateQuestionLikeCount,
} from "../../../../Features/Question/QuestionSlice/QuestionSlice";

import { toast } from "react-toastify";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

function LikeCommentButtons({ questionInfo, toggleComments }) {
  const { questions, isSuccess, isError, message } = useSelector(
    (state) => state.question
  );
  const dispatch = useDispatch();

  const handleLikeQuestion = async () => {
    dispatch(toggleLike(questionInfo._id));
  };

  useEffect(() => {
    socket.on("update-like-count", (updatedPost) => {
      console.log(updatedPost);
      dispatch(updateQuestionLikeCount(updatedPost));
    });

    return () => {
      socket.off("likeUpdated");
    };
  }, [dispatch, questionInfo._id]);

  return (
    <div className="like-commentButtons">
      <div onClick={handleLikeQuestion} className="button-container">
        <SlLike style={{ color: questionInfo.hasLiked ? "red" : "black" }} />
        <span className="like-info">{questionInfo.likeCount}</span>
      </div>

      <div className="button-container">
        <SlDislike />
        <span className="dislike-info">{questionInfo.dislikes}</span>
      </div>

      <div className="button-container" onClick={toggleComments}>
        <GoComment />
        <span className="comment-info">{questionInfo.answerCount}</span>
      </div>
    </div>
  );
}

export default LikeCommentButtons;
