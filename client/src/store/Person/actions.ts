import { PersonAction, PersonActionType, Person } from "./constants";

export const getPersonRequest = (userId: string): PersonAction => ({
  userId,
  type: PersonActionType.GetPersonRequest,
});

export const getPersonSuccess = (userId: string, person: Person): PersonAction => ({
  userId,
  person,
  type: PersonActionType.GetPersonSuccess,
});

export const getPersonFail = (userId: string, message: string): PersonAction => ({
  userId,
  message,
  type: PersonActionType.GetPersonFail,
});
