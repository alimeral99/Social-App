import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./Question/QuestionSlice/QuestionSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});
