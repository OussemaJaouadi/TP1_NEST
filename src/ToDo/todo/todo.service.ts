import { BadRequestException, Injectable } from '@nestjs/common';
import { createToDo, ToDoDTO, updateToDo } from '../../shared/DTO/ToDo.dto';
import { uuidv4 } from 'uuid'
import { ToDoStatus } from '../../shared/enum/status.enum';
import { isUUID } from 'class-validator';
@Injectable()
export class TodoService {
    private todos:ToDoDTO[]
    constructor(){}
    async getToDos():Promise<ToDoDTO[]>{
        return this.todos
    }
    async getToDoById(id:string):Promise<ToDoDTO>{
        if(!isUUID(id)){
            throw new BadRequestException('This is not UUID dear sir !')
        }
        let arr = this.todos
        for (let i=0;i<arr.length;i++){
            if(arr[i]._id==id){
                return arr[i]
            }
        }
    }
    async removeToDo(id:string):Promise<string>{
        if(!isUUID(id)){
            throw new BadRequestException('This is not UUID dear sir !')
        }
        let tmp=false
        let arr = this.todos
        for (let i=0;i<arr.length;i++){
            if(arr[i].name==id){
                arr.splice(i-1,i)
                tmp=true
            }
        }
        this.todos=arr
        if(!tmp){
            return `Ǹot Found Element dear sir`
        }else{
            return `ToDo hard deleted successfully!\nNot soft delete sorry for that`
        }
    }
    async editToDo(id:string,data:updateToDo):Promise<string>{
        if(!isUUID(id)){
            throw new BadRequestException('This is not UUID dear sir !')
        }
        if(!data.name.match('[0-9a-zA-Z@]')){
            throw new BadRequestException('Humm not legal my dear hacker')
        }
        let arr = this.todos
        let tmp:ToDoDTO
        for (var i=0;i<arr.length;i++){
            if(arr[i]._id==id){
                tmp=arr[i]
                break
            }
        }
        for(let j=0;j<arr.length;j++){
            if(tmp.name==arr[j].name&&tmp._id!=arr[j]._id){
                throw new BadRequestException('Name Already Taken!')
            }
        }
        let newdata:ToDoDTO
        newdata.creation=tmp.creation;
        newdata.name=data.name;
        newdata.description=data.description;
        newdata.status=data.status
        arr[i]== newdata
        this.todos=arr
        return `To-Do updated successfully : ${newdata}`
    }
    async createToDo(data:createToDo):Promise<string>{
        if(!data.name.match('[0-9a-zA-Z@]')){
            throw new BadRequestException('Humm not legal my dear hacker')
        }
        let arr = this.todos
        for (let i=0;i<arr.length;i++){
            if(arr[i].name==data.name){
                return `This To Do already exist dear sir !`
            }
        }
        let newdata:ToDoDTO
        if(!data.status){
            newdata._id=uuidv4();
            newdata.creation=new Date();
            newdata.name=data.name;
            newdata.description=data.description;
            newdata.status=ToDoStatus[1]
        }else{
            newdata._id=uuidv4();
            newdata.creation=new Date();
            newdata.name=data.name;
            newdata.description=data.description;
            newdata.status=data.status
        }
        arr.push(newdata)
        return `New To-Do added : ${newdata}`
    }
}
