import { PersonAction, Person, PersonActionType } from "./constants";

const initialState: Person = {
  id: '',
  userId: '',
  album: 0,
  direction: '',
  department: '',
  specialty: '',
  year: '',
  semester: '',
  group: '',
  name: '',
  surname: '',
  photo:'',
};

export const personReducer = (state: Person = initialState, action: PersonAction): Person => {
  switch (action.type) {
    case PersonActionType.GetPersonSuccess: {
      return action.person;
    }
    default: {
      return state;
    }
  }
};
