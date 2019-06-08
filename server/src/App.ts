import * as express from 'express';
import * as  bodyParser from 'body-parser';
import { IController } from './Interface/Controller';
import { ConnectToMongoDB } from './DataBase/MongoDB';
import * as cors from 'cors';
import * as session from 'express-session';
import * as passport from 'passport';
import passportConfig from './Passport/PassportConfig';

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

  private setCorse = () => {
    this.app.use(cors())
    this.app.options('*', cors());
    return this;
  }

  private setSession = () => {
    this.app.use(session({
      secret: 'secred',
      resave: true,
      saveUninitialized: true,
      cookie: { secure: true },
    }));
    return this;

  }
  private static instance: App = null;

  private app: express.Application;
  private controllers: IController[] = [];
  private port: number;

  private constructor(port: number) {
    this.port = port;
    this.app = express();
    this.setCorse()
      .setSession()
      .initilizePassport()
      .initializeMiddleware()
      .initializeStatic()
      .connectToDataBase();
  }

  private initilizePassport() {
    passportConfig(passport);
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    return this;
  }

  private initializeStatic() {
    this.app.use(
      '/files',
      express.static(
        this.getRootPath() + '\\files',
      ),
    );
    return this;
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    return this;
  }

  private connectToDataBase() {
    new ConnectToMongoDB();
  }

}
