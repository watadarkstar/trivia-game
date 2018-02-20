import axios from 'axios';
import {
  QUIZ_FETCH_SUCCESS,
  QUIZ_FETCH_ERROR,
  QUIZ_CORRECT
} from './types';

export const quizFetch = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
      dispatch({ type: QUIZ_FETCH_SUCCESS, payload: response.data.results });
    } catch (err) {
      dispatch({ type: QUIZ_FETCH_ERROR, payload: err });
    }
  };
};

export const quizCorrect = () => {
    return { type: QUIZ_CORRECT };
};
