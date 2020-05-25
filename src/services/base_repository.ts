import { IBase } from "./interfaces/base_interface";
import { getManager, ObjectType, Repository, getConnectionManager, DbOptions } from "typeorm";
import { injectable, unmanaged } from "inversify";

@injectable()
export class BaseRepository<T> implements IBase<T>{

    protected readonly _repository: Repository<T>;
    constructor(@unmanaged() repository: Repository<T>) {
        this._repository = repository;

    }

    async create(data: T): Promise<T> {
        return await this._repository.save(data);
    }
    async getAll(): Promise<T[]> {
        return await this._repository.find();
    }
    async update(id: any, data: T) {
        return await this._repository.update(id, data);
    }
    async delete(data: T) {
        return await this._repository.delete(data);
    }

    

}