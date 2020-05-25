import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { SchoolRepository } from "../services/schools_service";
import { SchoolModel } from "../models/schools_entity";
@controller("/school")
export class SchoolsController implements interfaces.Controller {
    public constructor(
        @inject(TYPES.schoolsRepository) private schoolservice: SchoolRepository) {

    }

    @httpPost("/")
    public async createschools(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newschool: SchoolModel;
            newschool = req.body;
            console.log(newschool, "newschool")
            console.log("newschool", newschool);
            await this.schoolservice.create(newschool).then((newschool: any) => {
                res.json("Added new schools");
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpGet("/")
    public async getschools(@request() req: express.Request, @response() res: express.Response) {
        try {
            console.log("came into controller");
            await this.schoolservice.getAll().then((schools: SchoolModel[]) => {
                console.log(schools);
                res.json(schools);
            });
        }
        catch (error) {
            res.json(error)
        }

    }
    
    @httpGet("/:id")
    public async getschool(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.schoolservice.getSchool(req.params.id).then((schools: SchoolModel) => {
                res.json(schools);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/:id")
    public async updateschools(@request() req: express.Request, @response() res: express.Response) {
        let school: SchoolModel
        let schoolsid = req.params.id;
        school = req.body;
        console.log(school, "updateone")
        try {
            await this.schoolservice.update(schoolsid, school).then((schools: any) => {
                res.json("Updated schools");
            });
        }
        catch (error) {
            res.json(error)
        }
    }
    @httpDelete("/:id")
    public async deleteschools(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.schoolservice.getSchool(req.params.id).then((schools: SchoolModel) => {
                this.schoolservice.delete(schools).then((schools: any) => {
                    res.json("deleted schools");
                });
            });
        }
        catch (error) {
            res.json(error)
        }

    }
}
