import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllQuestions, addQuestion, likeQuestion } from "./QuestionApi";

const initialState = {
  questions: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const createQuestion = createAsyncThunk(
  "questions/create",
  async (questionData, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState().user.currentUser;

      return await addQuestion(questionData, user.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await getAllQuestions();
    return response;
  }
);

export const toggleLike = createAsyncThunk(
  "question/toggleLike",
  async (questionId, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState().user.currentUser;

      return await likeQuestion(questionId, user.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions.push(action.payload);
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(toggleLike.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const { questionId, likeCount, hasLiked } = action.payload;
        const question = state.questions.find(
          (question) => question._id === questionId
        );
        if (question) {
          question.likeCount = likeCount;
          question.hasLiked = hasLiked;
        }
        state.isLoading = false;
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const {} = questionSlice.actions;

export default questionSlice.reducer;
