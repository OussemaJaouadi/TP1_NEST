import { IsNotEmpty } from "class-validator";

export class Restoration{
    @IsNotEmpty()
    ids:string[]
}