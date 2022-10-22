import { Length, Matches } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ToDoStatus } from "../../shared/enum/status.enum";

@Entity('todo')
export class TodoEntity{
    @PrimaryGeneratedColumn('uuid')
    _id:string

    @Column({unique:true})
    @Length(3,10)
    @Matches('[0-9a-zA-Z@]')
    name:string

    @Column()
    @Length(10)
    description:string

    @Column({
        type:'enum',
        enum:ToDoStatus,
        default:ToDoStatus.waiting
    })
    status:ToDoStatus

    @CreateDateColumn({update:false})
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date
}