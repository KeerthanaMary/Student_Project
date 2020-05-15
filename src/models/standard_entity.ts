import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne, Unique, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { StudentDetails } from "./student_entity";
import { Schools } from "./schools_entity";

@Entity()
export class Standard
{
    @PrimaryGeneratedColumn()
    @JoinColumn()
    StandardId: number;

    @Column("varchar",{length:50,unique:true})
    className: string;
    
    @OneToMany(type => StudentDetails, student => student.standard)
    student:StudentDetails[];

    @ManyToMany(type => Schools, schools => schools.standard)
    @JoinTable()
    school: Schools[];
}