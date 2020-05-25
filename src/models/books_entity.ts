import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, ManyToOne, JoinTable, OneToMany, ManyToMany, PrimaryColumn } from "typeorm";
import { BooksInfoModel } from "./books_taken_info";

@Entity({name: "Books"})
export class BookModel{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;
    
    @Column("varchar",{length:200})
    author:string;

    @OneToMany(type => BooksInfoModel, Books => Books.book)
    @JoinTable()
    booksInfo: BooksInfoModel;

}