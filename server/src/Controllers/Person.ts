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
    res.status(201).send({ newPerson, newUser });
  }

  private getByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const person = await PersonModel.findOne({ userId });
    const photoName = person.photo;
    const d = 'http://localhost:3001/files/' + photoName;
    person.photo = d;
    if (person) {
      res.status(200).send(person);

    } else {
      res.status(404).send({ message: 'person not found' });
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
