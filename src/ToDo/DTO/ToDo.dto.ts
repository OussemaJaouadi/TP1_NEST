import {IsNotEmpty,IsEnum,IsOptional} from 'class-validator'
import { ToDoStatus } from '../enum/status.enum'
export class ToDoDTO{
    @IsNotEmpty()
    _id:string
    
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    description:string
    
    @IsNotEmpty()
    creation:Date

    @IsNotEmpty()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}
export class createToDo{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    description:string
    @IsOptional()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}
export class updateToDo{
    @IsNotEmpty()
    _id:string
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    description:string
    @IsOptional()
    creation:Date
    @IsNotEmpty()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}



