import { call, put } from 'redux-saga/effects';
import { getPersonByUserId } from '../../api/requests';
import { getPersonSuccess, getPersonFail } from './actions';
import {  PersonAction, Person } from './constants';

export function* getPersonWorker(action: PersonAction) {
  const { userId } = action;
  try {
    const { data }: { data: Person } = yield call(getPersonByUserId, userId);

    yield put(getPersonSuccess(userId, data));

  } catch (error) {
    yield put(getPersonFail(userId, 'undefined'));
  }
}

