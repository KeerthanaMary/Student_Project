import { getManager } from "typeorm";
import { injectable } from "inversify";
import { Books } from "../models/books_entity";
import { BaseRepository } from "./base_repository";
@injectable()
export class BooksService extends BaseRepository<Books>{

    baseRepository = new BaseRepository(Books);
    constructor(){
        super();
    }
    async createNew(books:Books)
    {
     return await this.baseRepository.createNew(books);
    }
    // async createNewBook(book: Books) {
    //     let newBook = await this.baseRepository.createNew(book);
    //     return  newBook;
    // }
    // async getAllBooks() {
    //     let books = await this.baseRepository.getAll();
    //     return  books;
    // }
    // async getBook(bookId: number) {
    //     return await getManager().getRepository(Books).findOne(bookId,{ relations: ["booksInfo"] });
    // }
    // async updateBook(bookId: number, updateBook: Books) {
    //     let book = await this.baseRepository.updateOne(bookId,updateBook);
    //     return  book;
    // }
    // async deleteBook(deleteBook: Books) {
    //     let book = await this.baseRepository.deleteOne(deleteBook);
    //     return  book;
    // }


}
