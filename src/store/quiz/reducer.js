import {
  QUIZ_BEGIN,
  QUIZ_FETCH,
  QUIZ_FETCH_SUCCESS,
  QUIZ_FETCH_ERROR,
  QUIZ_CORRECT
} from './types';

const INITIAL_STATE = {
  correct: 0,
  questions: [],
  loading: true,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUIZ_BEGIN:
      return { ...state, correct: 0 };
    case QUIZ_FETCH:
      return { ...state, loading: true };
    case QUIZ_FETCH_SUCCESS:
      return { ...state, questions: action.payload, loading: false };
    case QUIZ_FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    case QUIZ_CORRECT:
      return { ...state, correct: state.correct + 1 };
    default:
      return state;
  }
};
