import { Strategy } from 'passport-local';
import * as pass from 'passport';
import { Application } from 'express';
import UserModel from '../Models/User.model';
import Crypto from './Crypto';

class AuthConfiguration {
  private passport: pass.PassportStatic = pass;
  private express: Application;
  constructor(express: Application) {
    this.express = express;
    this.config()
      .serialize()
      .deSerialize()
      .initializePassport();
  }

  private serialize = (): AuthConfiguration => {
    this.passport.serializeUser((user: any, done: any) => {
      done(null, user.id);
    });
    return this;
  }

  private deSerialize = (): AuthConfiguration => {
    this.passport.deserializeUser((id: any, done: any) => {
      UserModel.findById(id, (err, user) => {
        done(err, user);
      });
    });
    return this;
  }

  private config = (): AuthConfiguration => {
    this.passport.use(
      new Strategy(
        { usernameField: 'user' },
        async (user, passport, done) => {
          const foundUser = await UserModel.findOne({ user });
          if (!foundUser) {
            done(null, false, { message: 'User not found' });
          }
          const crypto = new Crypto('Password is not correct');
          crypto.compare(passport, foundUser, done);
        }),
    );
    return this;
  }

  private initializePassport = (): AuthConfiguration => {
    this.express.use(this.passport.initialize());
    this.express.use(this.passport.session());
    return this;
  }
}

export default AuthConfiguration;
