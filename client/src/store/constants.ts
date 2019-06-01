import { Person, PersonAction } from './Person/constants';
import { User, UserAction } from './User/constants';

export interface ApplicationState {
  person: Person;
  user: User;
}

export type ApplicationAction = UserAction & PersonAction;
