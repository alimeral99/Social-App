import axios from "axios";
import API_URL from "../../api/api";
import {} from "./QuestionSlice";

export const getAllQuestions = async () => {
  const response = await axios.get(`${API_URL}/question/getAllQuestions`);

  return response.data;
};

export const addQuestion = async (questionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}/question/add`,
    { questionData },
    config
  );

  return response.data;
};

export const likeQuestion = async (questionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/question/likes/${questionId}`,
    {},
    config
  );

  return {
    questionId,
    likeCount: response.data.likeCount,
    hasLiked: response.data.hasLiked,
  };
};

export const addAnswer = async (answerData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}/answer/create`,
    { answerData },
    config
  );

  return response.data;
};
