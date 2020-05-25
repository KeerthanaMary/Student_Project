import { getManager, getRepository, Repository } from "typeorm";
import { StandardModel } from "../models/standard_entity";
import { injectable, inject } from "inversify";
import { BaseRepository } from "./base_repository";
import TYPES from "../types/types";

@injectable()
export class StandardRepository extends BaseRepository<StandardModel> {
    protected readonly _repository;
    constructor(@inject(TYPES.standardORMRepository ) repository: Repository<StandardModel>,){
        super(repository);
        this._repository=repository;
    }

    async getStandard(classId:number){
        return await this._repository.findOne(classId,{ relations: ["student","schools"] });
    }

}