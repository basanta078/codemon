// @flow

import { App_Service } from 'AppServices';

import {
  take,
  put,
  call,
  fork,
  all
} from 'redux-saga/effects';

import {
  GET_NEXT_QUESTION,
  fetchDataActionCreators
} from './actions';

export function* asyncGetNextQuestion(data) {

  // eslint-disable-next-line
  const url = `http://192.168.1.13:8080/questions/getNextQuestion:123`;

  try {
    const response = yield call(App_Service, { url, method: 'GET' });

    if (response.result === 'ok') {
      yield put(fetchDataActionCreators.getNextQuestionSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetNextQuestion() {
  while (true) {
    const action = yield take(GET_NEXT_QUESTION);
    yield* asyncGetNextQuestion(action);
  }
}

export default function* () {
  yield all([
    fork(watchGetNextQuestion),
  ]);
}
