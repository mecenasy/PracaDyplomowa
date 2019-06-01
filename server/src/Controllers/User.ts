import { Router, Response, Request } from 'express';
import { Controller } from './Controller';
import userModel from '../Models/User.model';

export class User extends Controller {
  public routePath: string;
  public router: Router;

  constructor() {
    super('/login');

    this.initializeRoute();
  }

  public initializeRoute = () => {
    this.router
      .post(this.routePath, this.checkUserExists)
      // .post(this.routePath, this.addNewUser)
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

  private checkUserExists = async (req: Request, res: Response) => {
    const user = req.body;

    const foundUser = await userModel.findOne(user);

    if (foundUser) {
      res.status(200).send({ login: true, name: user.user, id: foundUser._id });
    } else {
      res.status(400).send({ login: false });
    }
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
