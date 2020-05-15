import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterStudentAddNewColumn1587637382491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Student" RENAME COLUMN "classId" TO "standardId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
