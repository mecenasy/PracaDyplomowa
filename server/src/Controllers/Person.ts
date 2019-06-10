import { Router, Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { Controller } from './Controller';
import UserModel, { IUser } from '../Models/User.model';
import PersonModel, { IPerson } from '../Models/Person.model';
import UserRoleModel from '../Models/Role.model';
import Crypto from '../Auth/Crypto';
import Cookie from '../Auth/Cookie';

export class Person extends Controller {
  public routePath: string;
  public router: Router;

  constructor() {
    super('/person');

    this.initializeRoute();
  }

  public initializeRoute = () => {
    this.router
      .get(this.routePath + '/:userId', Cookie.withAuth, this.getByUserId)
      .post(this.routePath, this.addPerson);
    return this;
  }

  private addPerson = async (req: Request, res: Response) => {
    const person: IPerson = req.body;
    const user = (person.name.slice(0, 3) + person.surname).toLocaleLowerCase();
    let userName = user;

    const existingUser = await UserModel.find({ user });
    const role = await UserRoleModel.findOne({ role: person.role });

    if (existingUser && existingUser.length) {
      userName = `${user}${existingUser.length + 1}`;
    }

    const newPerson = new PersonModel(person);
    const newUser = new UserModel({
      role,
      user: userName,
      isDefaultPassword: true,
    });
    newUser.personId = newPerson;

    const crypto = new Crypto('');

    crypto.setDefaultPassword(this.setPasswordInUser(newUser));


    await newUser.save();
    await newPerson.save();

    res.status(201)
      .send({ newPerson, newUser });
  }

  private getByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const person = await PersonModel.findById(userId);

    if (person) {
      const photoName = person.photo;
      const photoLink = 'http://localhost:3005/files/' + photoName;
      person.photo = photoLink;
      res.status(200)
        .send(person);

    } else {
      res.status(404)
        .send({ message: 'person not found' });
    }
  }

  private removePersonById = async (req: Request, res: Response) => {
    throw new Error('no implemented yet');
  }

  private updatePersonById = async (req: Request, res: Response) => {
    throw new Error('no implemented yet');
  }

  private setPasswordInUser = (user: IUser) =>
    (err: Error, hash: string) => {
      user.password = hash;
      user.save();
    }
}

export default Person;
