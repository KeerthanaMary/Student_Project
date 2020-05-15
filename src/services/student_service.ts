import { getManager } from "typeorm";
import { StudentDetails } from "../models/student_entity";
import { injectable, inject } from "inversify";
import { BaseRepository } from "./base_repository";

@injectable()
export class StudentService extends BaseRepository<StudentDetails> {

    baseRepository = new BaseRepository(StudentDetails);

    async createNewStudent(newStudent: StudentDetails) {
        let student = await this.baseRepository.createNew(newStudent);
        return student;
    }
    async getAllStudents() {
        let students = await this.baseRepository.getAll();
        return students;
    }
    async getStudent(studentId: number) {
        return await getManager().getRepository(StudentDetails).findOne(studentId, { relations: ["standard", "booksInfo"] });
    }
    async updateStudent(studentid: number, updatedStudent: StudentDetails) {
        let student = await this.baseRepository.updateOne(studentid, updatedStudent);
        return student;
    }
    async deleteStudent(deletedStudent: StudentDetails) {
        let student = await this.baseRepository.deleteOne(deletedStudent);
        return student;
    }
}