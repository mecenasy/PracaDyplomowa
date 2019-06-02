import { all, fork } from 'redux-saga/effects';
import { loginUserWatcher } from './User/sagas';
import { getPersonWatcher } from './Person/sagas';

export function* rootSaga() {
  yield all([
    fork(loginUserWatcher),
    fork(getPersonWatcher),
  ]);
}
