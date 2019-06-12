
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser, logoutUser } from '../../api/requests';
import { loginUserFail, loginUserSuccess, logoutUserSuccess, logoutUserFail } from './actions';
import { UserAction, UserActionType } from './constants';
import { getPersonRequest } from '../Person/actions';
import { getPersonWorker } from '../Person/sagas';

export function* userWatcher() {
  yield takeLatest<UserAction>(UserActionType.LoginUserRequest, loginUserWorker);
  yield takeLatest<UserAction>(UserActionType.LogoutUserRequest, logoutUserWorker);
}

export function* loginUserWorker(action: UserAction) {
  if (action.type === UserActionType.LoginUserRequest) {
    const { user, password } = action;
    try {
      const data = yield call(loginUser, user, password);

      yield call(getPersonWorker, getPersonRequest(data.data.userId));

      yield put(loginUserSuccess(data.data));

    } catch (error) {
      yield put(loginUserFail('undefined', 'undefined'));
    }
  }
}

export function* logoutUserWorker() {
  try {
    yield call(logoutUser);

    yield put(logoutUserSuccess());
  } catch (error) {
    yield put(logoutUserFail());
  }
}
