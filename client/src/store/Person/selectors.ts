import { ApplicationState } from "../constants";
import { createSelector } from 'reselect';
import { Person } from "./constants";
import { PersonStateProps } from "../../modules/Person";
const getPerson = (state: ApplicationState): Person => state.person;


const personCombiner = (person: Person): PersonStateProps => ({
  album: person.album.toString(),
  direction: person.direction,
  department: person.department,
  specialty: person.specialty,
  year: person.year,
  semester: person.semester,
  group: person.group,
  photo: person.photo,
});

export const getPersonSelector = createSelector(
  getPerson,
  personCombiner,
);
