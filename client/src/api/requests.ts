import req from './apiProxy';
import { person, login } from './paths';

export const getPersonByUserId = (userId: string) => {
  return req.get(person + userId);
};

export const loginUser = (user: string, password: string) => {
  return req.post(login, {
    user,
    password,
  });
};
