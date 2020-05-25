import "reflect-metadata";
import express = require("express");
import {  createConnection } from "typeorm";
import * as appConfig from "./services/sql_connection";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify/inversify.config";
import  "./controller/index";

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
appConfig.connection;







