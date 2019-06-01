
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser } from '../../api/requests';
import { loginUserFail, loginUserSuccess } from './actions';
import { UserAction, UserActionType, User } from './constants';
import { getPersonRequest } from '../Person/actions';
import { getPersonWorker } from '../Person/sagas';

export function* loginUserWatcher() {
  yield takeLatest<UserAction>(UserActionType.LoginUserRequest, loginUserWorker);
}
export function* loginUserWorker(action: UserAction) {
  if (action.type === UserActionType.LoginUserRequest) {
    const { user, password } = action;
    try {
      const { data }: { data: User } = yield call(loginUser, user, password);

      yield call(getPersonWorker, getPersonRequest(data.id));

      yield put(loginUserSuccess(data));

    } catch (error) {
      yield put(loginUserFail('undefined', 'undefined'));
    }
  }
}
