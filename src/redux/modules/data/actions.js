// @flow

import { createAction } from 'redux-actions';

export const GET_NEXT_QUESTION = 'data/GET_NEXT_QUESTION';
export const GET_NEXT_QUESTION_SUCCESS = 'data/GET_NEXT_QUESTION_SUCCESS';

export const fetchDataActionCreators = {
  getNextQuestion: createAction(GET_NEXT_QUESTION),
  getNextQuestionSuccess: createAction(GET_NEXT_QUESTION_SUCCESS),
};
