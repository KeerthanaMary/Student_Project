import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { SchoolService } from "../services/schools_service";
import { Schools } from "../models/schools_entity";
@controller("/school")
export class SchoolsController implements interfaces.Controller {
    public constructor(
        @inject(TYPES.schoolsRepository) private schoolservice: SchoolService) {

    }

    @httpPost("/")
    public async createschools(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newschool: Schools;
            newschool = req.body;
            console.log(newschool, "newschool")
            console.log("newschool", newschool);
            await this.schoolservice.createNew(newschool).then((newschool: any) => {
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
            await this.schoolservice.getAll().then((schools: Schools[]) => {
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
            await this.schoolservice.getSchool(req.params.id).then((schools: Schools) => {
                res.json(schools);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/:id")
    public async updateschools(@request() req: express.Request, @response() res: express.Response) {
        let school: Schools
        let schoolsid = req.params.id;
        school = req.body;
        console.log(school, "updateone")
        try {
            await this.schoolservice.updateOne(schoolsid, school).then((schools: any) => {
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
            await this.schoolservice.getSchool(req.params.id).then((schools: Schools) => {
                this.schoolservice.deleteOne(schools).then((schools: any) => {
                    res.json("deleted schools");
                });
            });
        }
        catch (error) {
            res.json(error)
        }

    }
}
