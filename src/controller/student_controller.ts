import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { StudentRepository } from "../services/student_service";
import { inject } from "inversify";
import TYPES from "../types/types";
import { StudentModel } from "../models/student_entity";
@controller("/student")
export class StudentController implements interfaces.Controller {
    public constructor(
        @inject(TYPES.studentRepository) private studentservice: StudentRepository) {

    }

    @httpPost("/")
    public async createStudent(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newstudent: StudentModel;
            newstudent = req.body;
            console.log(newstudent, "newstudent")
            console.log("new student", newstudent);
            await this.studentservice.create(newstudent).then((students: any) => {
                console.log("new student");
                res.json("Added new student");
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpGet("/")
    public async getStudents(@request() req: express.Request, @response() res: express.Response) {
        try {
            console.log("came into controller");
            await this.studentservice.getAll().then((students: StudentModel[]) => {
                console.log(students);
                res.json(students);
            });
        }
        catch (error) {
            res.json(error)
        }

    }

    @httpGet("/:id")
    public async getStudent(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.studentservice.getStudent(req.params.id).then((student: StudentModel) => {
                res.json(student);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/:id")
    public async updateStudent(@request() req: express.Request, @response() res: express.Response) {
        console.log("editstudentcontroller")
        let student: StudentModel
        let studentid = req.params.id;
        student = req.body;
        console.log(student, "updateone")
        try {
            await this.studentservice.update(studentid, student).then((student: any) => {
                res.json("Updated student");
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpDelete("/:id")
    public async deleteStudent(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.studentservice.getStudent(req.params.id).then((student: StudentModel) => {
                this.studentservice.delete(student).then((student: any) => {
                    res.json("deleted student");
                });
            });
        }
        catch (error) {
            res.json(error)
        }

    }
}
