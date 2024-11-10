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
