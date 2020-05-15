import { BooksInfo } from "../../models/books_taken_info";

export interface IBookTakenInfo<T>{
    getBookStatus(bookId:number,bookStatus:T);
}