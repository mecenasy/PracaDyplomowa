export interface Person {
  id: string;
  userId?: string;
  album: number;
  direction: string;
  department: string;
  specialty: string;
  year: string;
  semester: string;
  group: string;
  name: string;
  surname: string;
  email?: string;
  phone?: number;
  photo: string;
}

export enum PersonActionType {
  GetPersonRequest = 'person/GET_PERSON_REQUEST',
  GetPersonSuccess = 'person/GET_PERSON_SUCCESS',
  GetPersonFail = 'person/GET_PERSON_FAIL',
};

export type PersonAction = {
  userId: string;
} & ({
  type: PersonActionType.GetPersonRequest;
} | {
  type: PersonActionType.GetPersonSuccess;
  person: Person;
} | {
  type: PersonActionType.GetPersonFail;
  message: string,
});
