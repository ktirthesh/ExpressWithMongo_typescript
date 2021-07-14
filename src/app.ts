import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import environment from "./environment";

import { Routes } from "./api/routes/index";
import UserRoutes from "./api/routes/user_routes";

class App {
  public app: Application;
  public routePre: Routes = new Routes();
  public UserRoutes1: UserRoutes = new UserRoutes();
  public mongoUrl: string = `mongodb://localhost:27017/${environment.getDBName()}`;

  constructor() {
    this.app = express();
    this.config();
    this.routePre.routes(this.app);
    this.UserRoutes1.route(this.app);
    this.mongoSetup();
  }
  private config(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
}
export default new App().app;
