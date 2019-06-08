export interface User {
  id: string;
  name: string;
  role: string;
}

export enum UserActionType {
  LoginUserRequest = 'user/LOGIN_USER_REQUEST',
  LoginUserSuccess = 'user/LOGIN_USER_SUCCESS',
  LoginUserFail = 'user/LOGIN_USER_FAIL',
};

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
});
