import "reflect-metadata";
import express = require("express");
import {  createConnection } from "typeorm";
import * as appConfig from "./services/sql_connection";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify/inversify.config";
import  "./controller/index";
// import "./controller/student_controller";
// import "./controller/standard_controller";

var bodyParser = require('body-parser')
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true}));
  });
const app = server.build();
app.listen(3000);
console.log("App is running");

createConnection(appConfig.dbOptions).then(async connection => {
console.log("conected to db");
}).catch(error => console.log("TypeORM connection error: ", error));





