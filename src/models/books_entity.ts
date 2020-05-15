import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, ManyToOne, JoinTable, OneToMany, ManyToMany, PrimaryColumn } from "typeorm";
import { BooksInfo } from "./books_taken_info";

@Entity()
export class Books{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;
    
    @Column("varchar",{length:200})
    author:string;

    @OneToMany(type => BooksInfo, Books => Books.book)
    @JoinTable()
    booksInfo: BooksInfo;

}