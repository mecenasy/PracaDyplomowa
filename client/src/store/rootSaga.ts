import { all, fork } from 'redux-saga/effects';
import { loginUserWatcher } from './User/sagas';

export function* rootSaga() {
  yield all([
    fork(loginUserWatcher),
  ]);
}
