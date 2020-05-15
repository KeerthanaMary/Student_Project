import { ConnectionOptions } from "typeorm"
import { StudentDetails } from "../models/student_entity"
import { Standard } from "../models/standard_entity"
import { BooksInfo } from "../models/books_taken_info"
import { Schools } from "../models/schools_entity"
import { Books } from "../models/books_entity"

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
        StudentDetails,
        Standard,
        BooksInfo,
        Schools,
        Books
    ],
    synchronize: false,
}

