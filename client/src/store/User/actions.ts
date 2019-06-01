import { UserAction, UserActionType, User } from "./constants";

export const loginUserRequest = (user: string, password: string): UserAction => ({
  user,
  password,
  type: UserActionType.LoginUserRequest,
});

export const loginUserSuccess = (user: User): UserAction => ({
  user,
  type: UserActionType.LoginUserSuccess,
});

export const loginUserFail = (user: string, message: string): UserAction => ({
  user,
  message,
  type: UserActionType.LoginUserFail,
});
