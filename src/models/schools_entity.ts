import { Entity, Unique, PrimaryGeneratedColumn, JoinColumn, Column, ManyToMany } from "typeorm";
import { Standard } from "./standard_entity";


@Entity()
export class Schools {

    @PrimaryGeneratedColumn()
    @JoinColumn()
    id: number;

    @Column("varchar",{length:50,unique:true})
    name: string;
    
    @ManyToMany(type => Standard, student => student.school)
    standard: Standard;
}