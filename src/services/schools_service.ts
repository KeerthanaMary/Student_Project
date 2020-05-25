import { getManager, getRepository, Repository } from "typeorm";
import { injectable, inject } from "inversify";
import { SchoolModel } from "../models/schools_entity";
import { BaseRepository } from "./base_repository";
import TYPES from "../types/types";

@injectable()
export class SchoolRepository extends BaseRepository<SchoolModel> {
    protected readonly _repository;
    constructor(@inject(TYPES.schoolsORMRepository ) repository: Repository<SchoolModel>,){
        super(repository);
        this._repository=repository;

    }

    async getSchool(schoolId: number) {
        return await this._repository.findOne(schoolId);
    }
}