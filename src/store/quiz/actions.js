import axios from 'axios';
import {
  QUIZ_FETCH,
  QUIZ_FETCH_SUCCESS,
  QUIZ_FETCH_ERROR,
  QUIZ_CORRECT,
  QUIZ_BEGIN,
  API_URL
} from './types';

export const quizFetch = () => {
  return async (dispatch) => {
    dispatch({ type: QUIZ_FETCH });
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: QUIZ_FETCH_SUCCESS, payload: response.data.results });
    } catch (err) {
      dispatch({ type: QUIZ_FETCH_ERROR, payload: err });
    }
  };
};

export const quizBegin = () => {
    return { type: QUIZ_BEGIN };
};

export const quizCorrect = (index) => {
    return { type: QUIZ_CORRECT, payload: index };
};
