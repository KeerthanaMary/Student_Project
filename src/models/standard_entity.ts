import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne, Unique, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { StudentModel } from "./student_entity";
import {  SchoolModel } from "./schools_entity";

@Entity({name: "Standard"})
export class StandardModel
{
    @PrimaryGeneratedColumn()
    @JoinColumn()
    StandardId: number;

    @Column("varchar",{length:50,unique:true})
    className: string;
    
    @OneToMany(type => StudentModel, student => student.standard)
    student:StudentModel[];

    @ManyToMany(type => SchoolModel, schools => schools.standard)
    @JoinTable()
    school: SchoolModel[];
}