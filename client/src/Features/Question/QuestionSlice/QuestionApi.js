import axios from "axios";
import API_URL from "../api";
import { getQuestions } from "./QuestionSlice";

export const getAllQuestions = async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/question/getAllQuestions`);

    console.log(data);
    dispatch(getQuestions(data));
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = async (question, dispatch) => {
  try {
    console.log(question);
    const { data } = await axios.post(`${API_URL}/question/add`, { question });
  } catch (error) {
    console.log(error);
  }
};
