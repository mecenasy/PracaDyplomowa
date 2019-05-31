import * as express from 'express';
import * as  bodyParser from 'body-parser';
import { IController } from './Interface/Controller';
import { ConnectToMongoDB } from './DataBase/MongoDB';

export default class App {
  public setController(controller: IController) {
    this.controllers.push(controller)
  }

  public initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use(controller.router);
    });
  }

  public getExpressServer() {
    return this.app;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server started on port 3001');
    });
  }

  public static getInstance() {
    if (App.instance) {
      return App.instance;
    }
    App.instance = new App(3001);
    return App.instance;
  }

  private static instance: App = null;

  private app: express.Application;
  private controllers: IController[] = [];
  private port: number;

  private constructor(port: number) {
    this.port = port;
    this.app = express();

    this.initializeMiddleware();
    this.connectToDataBase();
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
  }

  private connectToDataBase() {
    new ConnectToMongoDB();
  }

}
