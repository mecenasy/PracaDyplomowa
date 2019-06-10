export interface User {
  userId: string;
  name: string;
  role: string;
}

export enum UserActionType {
  LoginUserRequest = 'user/LOGIN_USER_REQUEST',
  LoginUserSuccess = 'user/LOGIN_USER_SUCCESS',
  LoginUserFail = 'user/LOGIN_USER_FAIL',
  LogoutUserRequest = 'user/LOGOUT_USER_REQUEST',
  LogoutUserSuccess = 'user/LOGOUT_USER_SUCCESS',
  LogoutUserFail = 'user/LOGOUT_USER_FAIL',
}

export type UserAction = ({
  user: string;
  type: UserActionType.LoginUserRequest;
  password: string;
} | {
  type: UserActionType.LoginUserSuccess;
  user: User;
} | {
  type: UserActionType.LoginUserFail;
  user: string;
  message: string
} | {
  type: UserActionType.LogoutUserRequest;
} | {
  type: UserActionType.LogoutUserSuccess;
} | {
  type: UserActionType.LogoutUserFail;
});
