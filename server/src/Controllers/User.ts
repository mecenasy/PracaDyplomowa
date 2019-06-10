import { Router, Response, Request } from 'express';
import * as jct from 'jsonwebtoken';
import * as passport from 'passport';
import { Controller } from './Controller';
import userModel from '../Models/User.model';
import userRoleModel from '../Models/Role.model';
import Cookie from '../Auth/Cookie';
export class User extends Controller {
  public routePath: string;
  public router: Router;
  constructor() {
    super('/login');

    this.initializeRoute();
  }

  public initializeRoute = () => {
    this.router
      .get('/logout', this.logout)
      .post(this.routePath, this.login)
      .put(this.routePath, this.updateUserPassword)
      .delete(this.routePath, this.removeUser);
    return this;
  }

  private addNewUser = async (req: Request, res: Response) => {
    const user = req.body.user;
    const password = req.body.password;

    const foundUser = await userModel.findOne({ user });
    if (foundUser) {
      res.status(400).send({ message: 'user exists' });
    } else {
      const newUser = await userModel.insertMany({ user, password });
      res.send(newUser).status(201);
    }
  }

  private login = async (req: Request, res: Response, next: any) => {
    passport.authenticate('local', async (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(400)
          .send({
            login: false,
            name: user.user,
            message: 'unregistred',
          });
      }
      req.logIn(user, async (err) => {
        if (err) {
          return next(err);
        }
        const role = await userRoleModel.findOne(user.role);
        const token = new Cookie({ user }).getCookieToken();

        res.status(200)
          .cookie('token', token, { httpOnly: true })
          .send({
            login: true,
            name: user.user,
            userId: user.personId,
            role: role.role,
          });
      });
    })(req, res, next);
  }

  private logout = async (req: Request, res: Response) => {
    req.logOut();
    res.clearCookie('token');
    req.session.destroy((err) => {
      res.status(200).send({
        login: false,
      });
    });
  }
  private removeUser = async (req: Request, res: Response) => {
    const user = req.body;

    const foundUser = await userModel.findOne(user);
    if (foundUser) {
      res.status(400).send({ message: 'user not exists' });
    } else {
      await userModel.findOneAndDelete(user);
      res.send({ message: 'user removed' }).status(201);
    }
  }

  private updateUserPassword = async (req: Request, res: Response) => {
    // TODO: update for autentication
    const user = req.body.user;
    const password = req.body.password;
    const newPassword = req.body.newPassword;

    const foundUser = await userModel.findOne({ user, password, isDefaultPassword: false });
    if (foundUser) {
      await userModel.update({ user, password }, { set: { user, password: newPassword } });
      res.status(201).send({ message: 'password updated' });
    } else {
      res.status(400).send({ message: 'user not exists' });
    }
  }
}
