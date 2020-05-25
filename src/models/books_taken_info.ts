import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { StudentModel } from "./student_entity";
import { BookModel } from "./books_entity";

@Entity({name: "BooksInfo"})
export class BooksInfoModel {

    @PrimaryGeneratedColumn()
    @JoinColumn()
    id: number;

    @Column("varchar", { length: 50 })
    time: string;

    @Column("datetime")
    toDate: Date;

    @Column("datetime")
    fromDate: Date;

    @Column("varchar",{default: false})
    active: string

    @ManyToOne(type => StudentModel, studentTaken => studentTaken.bookInfo)
    @JoinTable()
    student: StudentModel;

    @ManyToOne(type => BookModel, books => books.booksInfo)
    @JoinTable()
    book: BookModel;
}