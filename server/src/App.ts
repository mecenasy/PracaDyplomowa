import * as express from 'express';
import * as  bodyParser from 'body-parser';
import { IController } from './Interface/Controller';
import { ConnectToMongoDB } from './DataBase/MongoDB';
import * as cors from 'cors';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import AuthConfiguration from './Auth/AuthConfig';
import Cookie from './Auth/Cookie';

export default class App {
  private constructor(port: number) {
    this.port = port;
    this.app = express();
    this.setCorse()
      .setSession()
      .initializePassport()
      .initializeBodyParser()
      .initializeCookieParser()
      .initializeStatic()
      .connectToDataBase();
    this.app.get('/checkToken', Cookie.withAuth, (req, res) => {
      res.sendStatus(200);
    });

  }

  private static instance: App = null;
  private app: express.Application;
  private controllers: IController[] = [];
  private port: number;

  public setController = (controller: IController) => {
    this.controllers.push(controller);
  }

  public initializeControllers = () => {
    this.controllers.forEach((controller) => {
      this.app.use(controller.router);
    });
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log('Server started on port');
    });
  }

  public static getInstance = () => {
    if (App.instance) {
      return App.instance;
    }
    App.instance = new App(3005);
    return App.instance;
  }

  public getRootPath = () => {
    const path = __dirname.split('\\');
    return path.splice(0, path.length - 1).join('\\');
  }

  private setCorse = (): App => {
    this.app.use(cors({
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
      credentials: true,
    }));
    return this;
  }

  private setSession = (): App => {
    this.app.use(session({
      secret: Cookie.secret,
      resave: true,
      saveUninitialized: true,
      cookie: { secure: true },
    }));
    return this;

  }

  private initializePassport = (): App => {
    new AuthConfiguration(this.app);
    return this;
  }

  private initializeStatic = (): App => {
    this.app.use(
      '/files',
      express.static(
        this.getRootPath() + '\\files',
      ),
    );
    return this;
  }

  private initializeCookieParser = (): App => {
    this.app.use(cookieParser());
    return this;
  }
  private initializeBodyParser = (): App => {
    this.app.use(bodyParser.json());
    return this;
  }

  private connectToDataBase = (): App => {
    new ConnectToMongoDB();
    return this;
  }
}
