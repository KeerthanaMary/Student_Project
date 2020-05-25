import { getManager, Repository, getRepository, getConnectionManager } from "typeorm";
import { injectable, inject } from "inversify";
import { BookModel } from "../models/books_entity";
import { BaseRepository } from "./base_repository";
import TYPES from "../types/types";

@injectable()
export class BooksRepository extends BaseRepository<BookModel> {
    protected readonly _repository;
    constructor(@inject(TYPES.booksORMRepository ) repository: Repository<BookModel>){
        super(repository);
        this._repository=repository;
    }

    async getBook(bookId: number) {
        return await this._repository.findOne(bookId,{ relations: ["booksInfo"] });
    }


}
