import { getManager } from "typeorm";
import { Standard } from "../models/standard_entity";
import { injectable } from "inversify";
import { BaseRepository } from "./base_repository";
@injectable()
export class StandardService extends BaseRepository<Standard> {
    
    baseRepository = new BaseRepository(Standard);

    async createStandard(newStandard:Standard){
        let standard = await this.baseRepository.createNew(newStandard);
        return  standard;
    }
    async getStandards() {
        let standards = await this.baseRepository.getAll();
        return  standards;
    }
    async getStandard(classId:number){
        return await getManager().getRepository(Standard).findOne(classId,{ relations: ["student","schools"] });
    }
    async updateStandard(standardId:number,updateStandard:Standard){
        let standard = await this.baseRepository.updateOne(standardId,updateStandard);
        return  standard;
    }
    async deleteStandard(deleteStandard:Standard){
        let standard = await this.baseRepository.deleteOne(deleteStandard);
        return  standard;
    }
}