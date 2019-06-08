import { Strategy } from 'passport-local';
// import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import UserModel from '../Models/User.model';

const passportConfig = (passport: any) => {
  passport.use(
    new Strategy({ usernameField: 'user' }, async (user, passport, done) => {
      const foundUser = await UserModel.findOne({ user });
      if (!foundUser) {
        done(null, false, { message: 'User not found' });
      }
      bcrypt.compare(passport, foundUser.password, (err, isMatch) => {
        if (err) {
          throw err;
        }
        if (isMatch) {
          done(null, foundUser);
        } else {
          done(null, false, { message: 'Password is not correct' });
        }
      });
    }),
  );
  passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: any, done: any) => {
    UserModel.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

export default passportConfig;
