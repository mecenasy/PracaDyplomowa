import { UserAction, User, UserActionType } from './constants';

const initialState: User = {
  userId: '',
  name: '',
  role: '',
};

export const userReducer = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case UserActionType.LoginUserSuccess: {
      return action.user;
    }
    case UserActionType.LogoutUserSuccess: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
