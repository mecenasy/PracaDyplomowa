import { IController } from 'Interface/Controller';
import * as express from 'express';

export abstract class Controller implements IController {
  public routePath: string;
  public router: express.Router;

  constructor(routePath: string) {
    this.routePath = routePath;
    this.router = express.Router();
  }
}
