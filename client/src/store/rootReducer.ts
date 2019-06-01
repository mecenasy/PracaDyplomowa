import { combineReducers, Reducer } from 'redux';
import { ApplicationState, ApplicationAction } from './constants';
import { personReducer } from './Person/reducer';
import { userReducer } from './User/reducer';

export const rootReducer: Reducer<ApplicationState, ApplicationAction> = combineReducers({
  person: personReducer,
  user: userReducer,
});
