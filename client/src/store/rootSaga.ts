import { all, fork } from 'redux-saga/effects';
import { loginUserWatcher, logoutUserWatcher } from './User/sagas';
import { getPersonWatcher } from './Person/sagas';

export function* rootSaga() {
  yield all([
    fork(loginUserWatcher),
    fork(logoutUserWatcher),
    fork(getPersonWatcher),
  ]);
}
