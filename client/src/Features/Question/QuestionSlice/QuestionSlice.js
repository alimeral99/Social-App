import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: null,
  error: null,
  alert: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { getQuestions } = questionSlice.actions;

export default questionSlice.reducer;
