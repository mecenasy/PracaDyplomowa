import * as express from 'express';
import * as  bodyParser from 'body-parser';
import { IController } from './Interface/Controller';
import { ConnectToMongoDB } from './DataBase/MongoDB';
import * as cors from 'cors';

export default class App {
  public setController(controller: IController) {
    this.controllers.push(controller)
  }

  public initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use(controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server started on port');
    });
  }

  public static getInstance() {
    if (App.instance) {
      return App.instance;
    }
    App.instance = new App(3005);
    return App.instance;
  }

  public getRootPath() {
    const path = __dirname.split('\\');
    return path.splice(0, path.length - 1).join('\\');

  }

  private static instance: App = null;

  private app: express.Application;
  private controllers: IController[] = [];
  private port: number;

  private constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(cors())
    this.app.options('*', cors());
    this.initializeMiddleware();
    this.initializeStatic();
    this.connectToDataBase();
  }

  private initializeStatic() {
    this.app.use(
      '/files',
      express.static(
        this.getRootPath() + '\\files',
      ),
    );
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
  }

  private connectToDataBase() {
    new ConnectToMongoDB();
  }

}
