import {Entity, PrimaryColumn, Column, OneToOne, Unique, JoinColumn, OneToMany, ManyToMany, PrimaryGeneratedColumn, ManyToOne, JoinTable} from "typeorm";
import { StandardModel } from "./standard_entity";
import { BooksInfoModel } from "./books_taken_info";

@Entity({name: "StudentDetails"})
export class StudentModel {
 
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;

    @Column("varchar",{length:30})
    rollno: string;

    @Column("bigint")
    phonenumber:number;

    @ManyToOne(type => StandardModel, standards => standards.student)
    standard: StandardModel[];

    @ManyToOne(type => BooksInfoModel, booksInfo => booksInfo.student)
    @JoinTable()
    bookInfo: BooksInfoModel;
}
