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

  console.log(response);

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
    hasLiked: response.data.hasLiked,
  };
};

export const getQuestionsByCategory = async (category) => {
  const response = await axios.get("socialapp-backend-lemon.vercel.app/question/search", {
    params: { category },
  });

  return response.data;
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
