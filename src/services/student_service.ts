import { getManager, getRepository, Repository } from "typeorm";
import { StudentModel } from "../models/student_entity";
import { injectable, inject } from "inversify";
import { BaseRepository } from "./base_repository";
import TYPES from "../types/types";

@injectable()
export class StudentRepository extends BaseRepository<StudentModel> {
    protected readonly _repository;
    constructor( @inject(TYPES.studentORMRepository ) repository: Repository<StudentModel>,){
        super(repository);
        this._repository=repository;
    }


    async getStudent(studentId: number) {
        return await this._repository.findOne(studentId, { relations: ["standard", "booksInfo"] });
    }

}