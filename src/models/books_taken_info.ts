import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { StudentDetails } from "./student_entity";
import { Books } from "./books_entity";

@Entity()
export class BooksInfo {

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

    @ManyToOne(type => StudentDetails, studentTaken => studentTaken.bookInfo)
    @JoinTable()
    student: StudentDetails;

    @ManyToOne(type => Books, books => books.booksInfo)
    @JoinTable()
    book: Books;
}