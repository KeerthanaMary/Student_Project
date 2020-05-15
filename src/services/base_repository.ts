import { IBase } from "./interfaces/base_interface";
import { getManager, ObjectType } from "typeorm";
import { IBookTakenInfo } from "./interfaces/books_taken_info_interfaces";


export class BaseRepository<T> implements IBase<T>, IBookTakenInfo<T> {
    private type: ObjectType<T>;
    constructor(type: ObjectType<T>) {
        this.type = type;
    }
    async createNew(data: T): Promise<T> {
        return await getManager().getRepository(this.type).save(data);
    }
    async getAll(): Promise<T[]> {
        return await getManager().getRepository(this.type).find();
    }
    async updateOne(id: any, data: T) {
        return await getManager().getRepository(this.type).update(id, data);
    }
    async deleteOne(data: T) {
        return await getManager().getRepository(this.type).delete(data);
    }
    async getBookStatus(bookId: number, bookStatus: T) {
        return await getManager().getRepository(this.type).findOne(bookId, {
            relations: ['booksInfo'],
            where: {
                booksInfo: {
                    active: bookStatus
                }
            }
        })
    }

}