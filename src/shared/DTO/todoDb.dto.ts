//Since the db will create the good result for us

import { IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator"
import { ToDoStatus } from "../enum/status.enum"
import { PartialType } from '@nestjs/mapped-types';
import { Exclude } from "class-transformer";
//Let things be easier 0:)
export class createToDoDToDB{
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name:string

    @IsNotEmpty()
    @MinLength(10)
    description:string
}
export class updateToDoDToDB extends PartialType(createToDoDToDB){
    @IsOptional()
    @IsEnum(ToDoStatus)
    status:ToDoStatus
}