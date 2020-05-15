import express = require("express");
import { interfaces, controller, httpGet, httpPost, request, response, httpPatch, httpDelete, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../types/types";
import { BooksService } from "../services/books_service";
import { Books } from "../models/books_entity";
@controller("/books")
export class BooksController implements interfaces.Controller {
    public constructor(
        @inject(TYPES.booksRepository) private bookService: BooksService) {
    }

    @httpPost("/")
    public async createBook(@request() req: express.Request, @response() res: express.Response) {
        try {
            let newbook: Books;
            newbook = req.body;
            await this.bookService.createNew(newbook).then((newbook: any) => {
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
            await this.bookService.getAll().then((books: Books[]) => {
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
            await this.bookService.getBook(req.params.id).then((book: Books) => {
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
        let book: Books
        let bookId = req.params.id;
        book = req.body;
        console.log(book, "updateone")
        try {
            await this.bookService.updateOne(bookId, book).then((books: any) => {
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
            await this.bookService.getBook(bookId).then((books: Books) => {
                this.bookService.deleteBook(books).then((books: any) => {
                    res.json("deleted Book");
                });
            });
        }
        catch (error) {
            res.json(error)
        }
    }
}
