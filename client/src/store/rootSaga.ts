import { all, fork } from 'redux-saga/effects';
import { userWatcher } from './User/sagas';
import { getPersonWatcher } from './Person/sagas';

export function* rootSaga() {
  yield all([
    fork(userWatcher),
    fork(getPersonWatcher),
  ]);
}
