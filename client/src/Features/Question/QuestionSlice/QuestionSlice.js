import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllQuestions,
  addQuestion,
  likeQuestion,
  getQuestionsByCategory,
} from "./QuestionApi";

const initialState = {
  questions: [],
  filteredQuestions: [],
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

export const fetchQuestionsByCategory = createAsyncThunk(
  "questions/fetchQuestionsBycategory",
  async (category, thunkAPI) => {
    try {
      return await getQuestionsByCategory(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
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

export const createAnswer = createAsyncThunk(
  "questions/createAnswer",
  async (answerData, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState().user.currentUser;

      return await addQuestion(answerData, user.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    updateAnswerCount: (state, action) => {
      const { questionId, answerCount } = action.payload;
      const question = state.questions.find((q) => q._id === questionId);

      if (question) {
        question.answerCount = answerCount;
      }

      const filteredQuestion = state.filteredQuestions.find(
        (q) => q._id === questionId
      );
      if (filteredQuestion) {
        filteredQuestion.answerCount = answerCount;
      }
    },
    updateQuestionLikeCount: (state, action) => {
      const { questionId, likeCount } = action.payload;
      const question = state.questions.find(
        (question) => question._id === questionId
      );

      if (question) {
        question.likeCount = likeCount;
      }

      const filteredQuestion = state.filteredQuestions.find(
        (question) => question._id === questionId
      );

      if (filteredQuestion) {
        filteredQuestion.likeCount = likeCount;
      }
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
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
        const { questionId, hasLiked } = action.payload;
        const question = state.questions.find(
          (question) => question._id === questionId
        );

        if (question) {
          question.hasLiked = hasLiked;
        }

        const filteredQuestion = state.filteredQuestions.find(
          (q) => q._id === questionId
        );
        if (filteredQuestion) {
          filteredQuestion.hasLiked = hasLiked;
        }
        state.isLoading = false;
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchQuestionsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestionsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredQuestions = action.payload;
      })
      .addCase(fetchQuestionsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { updateAnswerCount, updateQuestionLikeCount, reset } =
  questionSlice.actions;

export default questionSlice.reducer;
