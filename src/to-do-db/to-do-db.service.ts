import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import {  createToDoDToDB, updateToDoDToDB } from 'src/shared/DTO/todoDb.dto';
import { ToDoStatus } from 'src/shared/enum/status.enum';
import { Repository, UpdateResult } from 'typeorm';
import { TodoEntity } from './schemas/todo.entity';

@Injectable()
export class ToDoDbService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepo:Repository<TodoEntity>
    ){}
    async addToDo(data:createToDoDToDB):Promise<TodoEntity>{
        if(!data.name.match('[0-9a-zA-Z@#]')){
            throw new BadRequestException('Restricted input my dear hacker')
        }
        try{
            return await this.todoRepo.save(data)
        }catch(QueryFailedError){
            throw new ForbiddenException('Name Already in Use dear sir!')
        }
        
    }
    async updateToDo(id:string,data:updateToDoDToDB):Promise<TodoEntity>{
        const updated = await this.todoRepo.preload({
            _id:id,
            ...data
        })
        if(!updated){
            throw new NotFoundException('ToDo don\'t exist')
        }
        return this.todoRepo.save(updated)
    }
    async softDelete(id:string):Promise<UpdateResult>{
        return this.todoRepo.softDelete(id)
    }
    async restoreToDo(id:string){
        return this.todoRepo.restore(id)
    }
    async restoreMany(arr:string[]){
        let tmp = ""
        for(let i=0;i<arr.length;i++){
            try{
                await this.todoRepo.restore(arr[i])
            }catch(err){
                tmp+=" "+i+" ,"
            }
            if(tmp!=""){
                return `Enable to restore : [${tmp}]`
            }else{
                return `All Restored Sucessfully`
            }
        }

    }
    async getAllToDos():Promise<TodoEntity[]>{
        return this.todoRepo.find()
    }
    async countGrouped():Promise<any>{
        let tmp={
            actif:0,
            waiting:0,
            done:0
        }
        await (await this.todoRepo.find()).map(el=>{
            if(el.status==ToDoStatus.actif){
                tmp.actif+=1
            }else if(el.status==ToDoStatus.done){
                tmp.done+=1
            }else{
                tmp.waiting+=1
            }
        })
        return tmp
    }
    async getByID(id:string):Promise<TodoEntity>{
        return this.todoRepo.findOneBy({_id:id}).catch(err=>{
            throw new NotFoundException('To Do Not Found !')
        })
    } 
}
