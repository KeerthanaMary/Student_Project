import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { BooksRepository } from "../services/books_service";
import { BookModel } from "../models/books_entity";
@controller("/books")
export class BooksController implements interfaces.Controller {
    public constructor(
        @inject(TYPES.booksRepository) private bookService: BooksRepository) {
    }

    @httpPost("/")
    public async createBook(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newbook: BookModel;
            newbook = req.body;
            await this.bookService.create(newbook).then((newbook: any) => {
                res.json("Added new Book");
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpGet("/")
    public async getBooks(@request() req: express.Request, @response() res: express.Response) {
        try {
            console.log("came into controller");
            await this.bookService.getAll().then((books: BookModel[]) => {
                res.json(books);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpGet("/:id")
    public async getBook(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.bookService.getBook(req.params.id).then((book: BookModel) => {
                res.json(book);
            });
        }
        catch (error) {
            res.json(error)
        }
    }

    @httpPut("/:id")
    public async updateBook(@request() req: express.Request, @response() res: express.Response) {
        console.log("editstudentcontroller")
        let book: BookModel
        let bookId = req.params.id;
        book = req.body;
        console.log(book, "updateone")
        try {
            await this.bookService.update(bookId, book).then((books: any) => {
                res.json("Updated student");
            });
        }
        catch (error) {
            res.json(error)
        }
    }
    
    @httpDelete("/:id")
    public async deleteBook(@request() req: express.Request, @response() res: express.Response) {
        try {
            let bookId=req.params.id
            await this.bookService.getBook(bookId).then((books: BookModel) => {
                this.bookService.delete(books).then((books: any) => {
                    res.json("deleted Book");
                });
            });
        }
        catch (error) {
            res.json(error)
        }
    }
}
