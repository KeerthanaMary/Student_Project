import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { BookTakenInfoService } from "../services/books_taken_info_service";
import { BooksInfo } from "../models/books_taken_info";
import { StudentService } from "../services/student_service";
@controller("/Books-info")
export class BooksTakenInfoController implements interfaces.Controller {

    public constructor(
        @inject(TYPES.booksInfoRepository) private bookTakenInfoService: BookTakenInfoService,
        @inject(TYPES.studentRepository) private studentService: StudentService) {
    }

    @httpPost("/")
    public async createBookTakenInfo(@request() req: express.Request, @response() res: express.Response) {
        try {
            let BookTakeninfo: BooksInfo;
            BookTakeninfo = req.body;
            let bookInfoId=req.body.id;
            let studentId=req.body.student;
            console.log(BookTakeninfo, "newschool")
            console.log(BookTakeninfo);
            await this.bookTakenInfoService.createBookInfo(BookTakeninfo).then((booktakeninfo: any) => {
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
            await this.bookTakenInfoService.getAllBooksInfo().then((bookinfostaken: BooksInfo[]) => {
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
            await this.bookTakenInfoService.getBookTakenInfo(req.params.id).then((bookinfotaken: BooksInfo) => {
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
        let bookTakenInfo: BooksInfo
        let bookTakenInfoId = req.params.id;
        bookTakenInfo = req.body;
        console.log(bookTakenInfo, "updateone")
        try {
            await this.bookTakenInfoService.updateBookInfo(bookTakenInfoId, bookTakenInfo).then((bookinfotaken: any) => {
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
            await this.bookTakenInfoService.getBookTakenStatus(id,status).then((book: BooksInfo) => {
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
            await this.bookTakenInfoService.getBookTakenInfo(bookTakenId).then((bookinfotaken: BooksInfo) => {
                this.bookTakenInfoService.deleteBookInfo(bookinfotaken).then((bookinfotaken: any) => {
                    res.json("deleted book info taken");
                });
            });
        }
        catch (error) {
            res.json(error)
        }

    }
}
