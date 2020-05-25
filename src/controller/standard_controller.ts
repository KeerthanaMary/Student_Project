import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { StandardRepository } from "../services/standard_service";
import { StandardModel } from "../models/standard_entity";
@controller("/standard")
export class standardController implements interfaces.Controller {

    public constructor(
        @inject(TYPES.standardRepository) private standardservice: StandardRepository) {

    }

    @httpPost("/")
    public async createStudent(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newstandard: StandardModel;
            newstandard = req.body;
            await this.standardservice.create(newstandard).then((standard: any) => {
                res.json("Added new standard");
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
            await this.standardservice.getAll().then((standards: StandardModel[]) => {
                res.json(standards);
            });
        }
        catch (error) {
            res.json(error)
        }

    }

    @httpGet("/:id")
    public async getStudent(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.standardservice.getStandard(req.params.id).then((standard: any) => {
                res.json(standard);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/:id")
    public async updateStudent(@request() req: express.Request, @response() res: express.Response) {
        let standard: StandardModel = req.body;
        let standardid = req.params.id;
        try {
            await this.standardservice.update(standardid, standard).then((student: any) => {
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
            await this.standardservice.getStandard(req.params.id).then((standard: any) => {
                this.standardservice.delete(standard).then((standard: any) => {
                    res.json("deleted student");
                });
            });
        }
        catch (error) {
            res.json(error)
        }
    }
}
