import { Router, Response, Request } from 'express';
import { Controller } from './Controller';
import UserModel from '../Models/User.model';
import PersonModel, { IPerson } from '../Models/Person.model';
import UserRoleModel from '../Models/Role.model';
import * as bcrypt from 'bcrypt';

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
    const user = (person.name.slice(0, 3) + person.surname).toLocaleLowerCase();

    const existingUser = await UserModel.find({ user });
    let userName = user;

    if (existingUser && existingUser.length) {
      userName = `${user}${existingUser.length + 1}`;
    }
    const role = await UserRoleModel.findOne({ role: person.role });

    const newPerson = new PersonModel(person);
    const newUser = new UserModel({
      role,
      user: userName,
      isDefaultPassword: true,
    });
    newUser.personId = newPerson,

    bcrypt.genSalt(10, (err, salt) => {
      return bcrypt.hash('123456789', salt, (err, hash) => {
        newUser.password = hash;
        newUser.save();
      });
    });

    await newUser.save();
    await newPerson.save();
    res.status(201).send({ newPerson, newUser });
  }

  private getByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const person = await PersonModel.findById( userId );
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
