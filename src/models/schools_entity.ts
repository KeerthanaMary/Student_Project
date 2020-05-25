import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, ManyToMany } from "typeorm";
import { StandardModel } from "./standard_entity";


@Entity({name: "Schools"})
export class SchoolModel {

    @PrimaryGeneratedColumn()
    @JoinColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;
    
    @ManyToMany(type => StandardModel, student => student.school)
    standard: StandardModel;
}