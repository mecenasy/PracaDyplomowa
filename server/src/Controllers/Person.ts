import { Router, Response, Request } from 'express';
import { Controller } from './Controller';
import UserModel from '../Models/User.model';
import PersonModel, { IPerson } from '../Models/Person.model';

export class Person extends Controller {
  public routePath: string;
  public router: Router;

  constructor() {
    super('/person');

    this.initializeRoute();
  }

  public initializeRoute = () => {
    this.router
      .get(this.routePath + '/:userId', this.getByUserId)
      .post(this.routePath, this.addPerson);
    return this;
  }

  private addPerson = async (req: Request, res: Response) => {
    const person: IPerson = req.body;
    const user = (person.name.slice(0, 2) + person.surname).toLocaleLowerCase();

    const existingUser = await UserModel.find({ user });
    let userName = user;

    if (existingUser && existingUser.length) {
      userName = `${user}${existingUser.length + 1}`;
    }
    const newUser = new UserModel({
      user: userName,
      password: '123456789',
      isDefaultPassword: true,
    });
    const newPerson = new PersonModel(person);
    newPerson.userId = newUser;

    await newPerson.save();
    await newUser.save();
    res.send({ newPerson, newUser }).status(201);
  }

  private getByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const person = await PersonModel.findOne({ userId });
    if (person) {
      res.send(person).status(200);

    } else {
      res.send({ message: 'person not found' }).status(404);
    }
  }

  private removePersonById = async (req: Request, res: Response) => {
    throw new Error('no implemented yet');
  }

  private updatePersonById = async (req: Request, res: Response) => {
    throw new Error('no implemented yet');
  }
}

export default Person;
