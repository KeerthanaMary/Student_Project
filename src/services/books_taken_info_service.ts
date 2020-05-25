import { getManager, getRepository, Repository } from "typeorm";
import { injectable, inject } from "inversify";
import { BooksInfoModel } from "../models/books_taken_info";
import { BaseRepository } from "./base_repository";
import { IBookTakenInfo } from "./interfaces/books_taken_info_interfaces";
import TYPES from "../types/types";
@injectable()
export class BookTakenInfoRepository extends BaseRepository<BooksInfoModel> implements IBookTakenInfo<BooksInfoModel>{
    protected readonly _repository
    constructor(@inject(TYPES.booksInfoORMRepository ) repository: Repository<BooksInfoModel>){
        super(repository);
        this._repository=repository
    }

    async getBookTakenInfo(BookTakenid:number){
        return await this._repository.findOne(BookTakenid);
    }

    async getBookStatus(bookId: number, bookStatus:BooksInfoModel) {
        return await this._repository.findOne(bookId, {
            relations: ['booksInfo'],
            where: {
                booksInfo: {
                    active: bookStatus
                }
            }
        })
    }
}