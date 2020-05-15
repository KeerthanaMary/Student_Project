import {Entity, PrimaryColumn, Column, OneToOne, Unique, JoinColumn, OneToMany, ManyToMany, PrimaryGeneratedColumn, ManyToOne, JoinTable} from "typeorm";
import { Standard } from "./standard_entity";
import { BooksInfo } from "./books_taken_info";

@Entity()
export class StudentDetails {
 
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;

    @Column("varchar",{length:30})
    rollno: string;

    @Column("bigint")
    phonenumber:number;

    @ManyToOne(type => Standard, standards => standards.student)
    standard: Standard[];

    @ManyToOne(type => BooksInfo, booksInfo => booksInfo.student)
    @JoinTable()
    bookInfo: BooksInfo;
}
