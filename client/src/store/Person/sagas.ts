import { call, put, takeLatest } from 'redux-saga/effects';
import { getPersonByUserId } from '../../api/requests';
import { getPersonSuccess, getPersonFail } from './actions';
import { PersonAction, Person, PersonActionType } from './constants';

export function* getPersonWatcher() {
  yield takeLatest<PersonAction>(PersonActionType.GetPersonRequest, getPersonWorker);
}

export function* getPersonWorker(action: PersonAction) {
  const { userId } = action;
  try {
    const { data }: { data: Person } = yield call(getPersonByUserId, userId);

    yield put(getPersonSuccess(userId, data));

  } catch (error) {
    yield put(getPersonFail(userId, 'undefined'));
  }
}

