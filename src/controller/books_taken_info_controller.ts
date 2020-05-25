import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { BookTakenInfoRepository } from "../services/books_taken_info_service";
import { BooksInfoModel } from "../models/books_taken_info";
import { StudentRepository } from "../services/student_service";
@controller("/Books-info")
export class BooksTakenInfoController implements interfaces.Controller {

    public constructor(
        @inject(TYPES.booksInfoRepository) private bookTakenInfoService: BookTakenInfoRepository,
        @inject(TYPES.studentRepository) private studentService: StudentRepository) {
    }

    @httpPost("/")
    public async createBookTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        try {
            let BookTakeninfo: BooksInfoModel;
            BookTakeninfo = req.body;
            let bookInfoId=req.body.id;
            let studentId=req.body.student;
            console.log(BookTakeninfo, "newschool")
            console.log(BookTakeninfo);
            await this.bookTakenInfoService.create(BookTakeninfo).then((booktakeninfo: any) => {
                res.json("Added new bookinfotaken");
                 
            });


        }
        catch (error) {
            res.json(error)
        }
    }

    @httpGet("/")
    public async getBooksTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        try {
            console.log("came into controller");
            await this.bookTakenInfoService.getAll().then((bookinfostaken: BooksInfoModel[]) => {
                console.log(bookinfostaken);
                res.json(bookinfostaken);
            });
        }
        catch (error) {
            res.json(error)
        }

    }

    @httpGet("/:id")
    public async getBookTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.bookTakenInfoService.getBookTakenInfo(req.params.id).then((bookinfotaken: BooksInfoModel) => {
                res.json(bookinfotaken);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/edit/:id")
    public async updateBookTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        console.log("editstudentcontroller")
        let bookTakenInfo: BooksInfoModel
        let bookTakenInfoId = req.params.id;
        bookTakenInfo = req.body;
        console.log(bookTakenInfo, "updateone")
        try {
            await this.bookTakenInfoService.update(bookTakenInfoId, bookTakenInfo).then((bookinfotaken: any) => {
                res.json("Updated bookinfotaken");
            });
        }
        catch (error) {
            res.json(error)
        }
    }
    @httpGet("/:id/:status")
    public async getBookStatus(@request() req: express.Request, @response() res: express.Response) {
        try {
            let id=req.params.id;
            let status=req.params.status;
            console.log()
            await this.bookTakenInfoService.getBookStatus(id,status).then((book: BooksInfoModel) => {
                res.json(book);
            });
        }
        catch (error) {
            res.json(error)
        }
    }
    @httpDelete("/delete/:id")
    public async deleteBookTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        try {
            let bookTakenId=req.params.id;
            await this.bookTakenInfoService.getBookTakenInfo(bookTakenId).then((bookinfotaken: BooksInfoModel) => {
                this.bookTakenInfoService.delete(bookinfotaken).then((bookinfotaken: any) => {
                    res.json("deleted book info taken");
                });
            });
        }
        catch (error) {
            res.json(error)
        }

    }
}
