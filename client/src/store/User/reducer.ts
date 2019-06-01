import { UserAction, User, UserActionType } from "./constants";

const initialState: User = {
  id: '',
  name: '',
};

export const userReducer = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case UserActionType.LoginUserSuccess: {
      return action.user;
    }
    default: {
      return state;
    }
  }
};
