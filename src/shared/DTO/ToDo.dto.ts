import {IsNotEmpty,IsEnum,IsOptional, MinLength, MaxLength, IsArray} from 'class-validator'
import { ToDoStatus } from '../enum/status.enum'
export class ToDoDTO{
    @IsNotEmpty()
    _id:string
    
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name:string
    
    @IsNotEmpty()
    @MinLength(10)
    description:string
    
    @IsNotEmpty()
    creation:Date

    @IsNotEmpty()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}
export class createToDo{
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name:string

    @IsNotEmpty()
    @MinLength(10)
    description:string

    @IsOptional()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}
export class updateToDo{
    @IsNotEmpty()
    _id:string

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name:string

    @IsNotEmpty()
    @MinLength(10)
    description:string
    
    @IsOptional()
    creation:Date
    @IsNotEmpty()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}



