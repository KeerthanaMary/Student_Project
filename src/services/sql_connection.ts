import { ConnectionOptions, createConnection } from "typeorm"
import { StudentModel } from "../models/student_entity"
import {  StandardModel } from "../models/standard_entity"
import {  BooksInfoModel } from "../models/books_taken_info"
import {  SchoolModel } from "../models/schools_entity"
import {  BookModel } from "../models/books_entity"

export let dbOptions: ConnectionOptions = {
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Admin1234567890",
    database: "student",
    options: {
        enableArithAbort: true
    },
    entities: [
        StudentModel,
        StandardModel,
        BookModel,
        BooksInfoModel,
        SchoolModel

],
    synchronize: false,
}
export let connection=createConnection(dbOptions).then(async connection => {
    console.log("conected to db");
  }).catch(error =>
     console.log("TypeORM connection error: ", error));
  
