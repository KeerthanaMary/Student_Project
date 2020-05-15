import { getManager } from "typeorm";
import { injectable } from "inversify";
import { Schools } from "../models/schools_entity";
import { BaseRepository } from "./base_repository";
@injectable()
export class SchoolService extends BaseRepository<Schools>{

    baseRepository = new BaseRepository(Schools);

    async createSchool(newSchool: Schools) {
        let school = await this.baseRepository.createNew(newSchool);
        return school;
    }
    async getAllSchools() {
        let school = await this.baseRepository.getAll();
        return school;
    }
    async getSchool(schoolId: number) {
        return await getManager().getRepository(Schools).findOne(schoolId);
    }
    async updateSchool(schoolId: number, updatedSchool: Schools) {
        let school = await this.baseRepository.updateOne(schoolId, updatedSchool);
        return school;
    }
    async deleteSchool(school: Schools) {
        let deletedSchool = await this.baseRepository.deleteOne(school);
        return deletedSchool;
    }
}