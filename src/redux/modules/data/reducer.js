// @flow

import {
  GET_NEXT_QUESTION_SUCCESS, GET_NEXT_QUESTION
} from './actions';

export const DEFAULT = {
  user : {
    name : "twake",
    id : 123
  },
};

export default function data(state = DEFAULT, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEXT_QUESTION: {
      return {
        ...state,
        nextQuestion: null
      };
    }
    case GET_NEXT_QUESTION_SUCCESS: {
      return {
        ...state,
        nextQuestion: payload
      };
    }
    default:
      return state;
  }
}
