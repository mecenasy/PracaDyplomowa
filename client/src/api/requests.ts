import req from './apiProxy';
import { person, login } from './paths';
// import console = require('console');

export const getPersonByUserId = (userId: string) => {
  return req.get(person + userId, { withCredentials: true });

};

export const checkToken = () => {
  return req.get('/checkToken');
};

export const loginUser = (user: string, password: string) => {
  return req.post(
    login,
    {
      user,
      password,
    },
    { withCredentials: true }
  );
};
