import * as bcrypt from 'bcrypt';
import { IVerifyOptions } from 'passport-local';
import { IUser } from '../Models/User.model';

class Crypto {
  private failMessage: string;
  constructor(failMessage: string) {
    this.failMessage = failMessage;
  }

  public compare = (
    password: string,
    user: IUser,
    done: (error: any, user?: any, options?: IVerifyOptions) => void,
  ) => {
    bcrypt.compare(password, user.password, this.match(user, done));
  }

  private defaultHash = (setPassword: (err: Error, hash: string) => void) =>
    (err: Error, salt: string) => {
      bcrypt.hash(
        '123456789',
        salt,
        setPassword,
      );
    }

  private match = (user: IUser, done: (error: any, user?: any, options?: IVerifyOptions) => void) =>
    (err: Error, isMatch: boolean) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        done(null, user);
      } else {
        done(null, false, { message: this.failMessage });
      }
    }

  public setDefaultPassword = (setPassword: (err: Error, hash: string) => void) => {
    bcrypt.genSalt(10, this.defaultHash(setPassword));
  }

}
export default Crypto;
