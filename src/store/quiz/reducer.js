import {
  QUIZ_BEGIN,
  QUIZ_FETCH,
  QUIZ_FETCH_SUCCESS,
  QUIZ_FETCH_ERROR,
  QUIZ_CORRECT
} from './types';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUIZ_BEGIN: {
      const questions = state.questions.map(question => {
        const newQuestion = { ...question, correct: false };
        return newQuestion;
      });
      return { ...state, questions };
    }
    case QUIZ_FETCH:
      return { ...state, loading: true };
    case QUIZ_FETCH_SUCCESS:
      return { ...state, questions: action.payload, loading: false };
    case QUIZ_FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    case QUIZ_CORRECT: {
      const questions = [...state.questions];
      questions[action.payload].correct = true;
      return { ...state, questions };
    }
    default:
      return state;
  }
};
