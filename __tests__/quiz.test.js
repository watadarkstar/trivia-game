/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../src/store/quiz/actions';
import * as types from '../src/store/quiz/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

// TODO: write tests for reducers and selectors and split up tests further i.e.
// __tests_/store/quiz/actions.test.js

describe('quiz actions', () => {
  afterEach = () => {
    axiosMock.reset();
    axiosMock.restore();
  };
  
  it('should create a success action when fetch quiz is successful', () => {
    const questions = [
      { id: 1, question: 'You are playing triva crack' }
    ];
    const expectedActions = [
      { type: types.QUIZ_FETCH },
      { type: types.QUIZ_FETCH_SUCCESS, payload: questions }
    ];
    const store = mockStore({ questions: [] });
    axiosMock.onGet(types.API_URL, {}).reply(200, {
      results: questions
    });
    return store.dispatch(actions.quizFetch()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('should create a error action when fetch quiz fails', () => {
    const error = new Error('Request failed with status code 400');
    const expectedActions = [
      { type: types.QUIZ_FETCH },
      { type: types.QUIZ_FETCH_ERROR, payload: error }
    ];
    const store = mockStore({ questions: [] });
    axiosMock.onGet(types.API_URL, {}).reply(400);
    return store.dispatch(actions.quizFetch()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('should create an action to begin quiz', () => {
    const expectedAction = {
      type: types.QUIZ_BEGIN
    };
    expect(actions.quizBegin()).toEqual(expectedAction);
  });
  
  it('should create an action to mark index as correct', () => {
    const index = 1;
    const expectedAction = {
      type: types.QUIZ_CORRECT,
      payload: index
    };
    expect(actions.quizCorrect(index)).toEqual(expectedAction);
  });
});
