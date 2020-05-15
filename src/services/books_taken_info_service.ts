import { getManager } from "typeorm";
import { injectable } from "inversify";
import { BooksInfo } from "../models/books_taken_info";
import { BaseRepository } from "./base_repository";
@injectable()
export class BookTakenInfoService extends BaseRepository<BookTakenInfoService> {

    baseRepository = new BaseRepository(BooksInfo);

    async createBookInfo(newBookTakenInfo:BooksInfo){
        let bookInfo = await this.baseRepository.createNew(newBookTakenInfo);
        return  bookInfo;
    }
    async getAllBooksInfo() {
        let booksInfo = await this.baseRepository.getAll();
        return  booksInfo;
    }
    async getBookTakenInfo(BookTakenid:number){
        return await getManager().getRepository(BooksInfo).findOne(BookTakenid);
    }
    async updateBookInfo(bookTakenId:number,bookTakenInfo:BooksInfo){
        let bookInfo = await this.baseRepository.updateOne(bookTakenId,bookTakenInfo);
        return  bookInfo;
    }
    async deleteBookInfo(bookTakenInfo:BooksInfo){
        let bookInfo = await this.baseRepository.deleteOne(bookTakenInfo);
        return  bookInfo;
    }
    async getBookTakenStatus(bookId:number,bookStatus:BooksInfo){
        let book = await this.baseRepository.getBookStatus(bookId,bookStatus);
        return  book;
    }
}