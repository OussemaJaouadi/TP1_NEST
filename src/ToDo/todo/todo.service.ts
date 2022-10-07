import { Injectable } from '@nestjs/common';
import { createToDo, ToDoDTO, updateToDo } from '../DTO/ToDo.dto';
import { uuidv4 } from 'uuid'
import { ToDoStatus } from '../enum/status.enum';
@Injectable()
export class TodoService {
    private todos:ToDoDTO[]
    constructor(){}
    async getToDos():Promise<ToDoDTO[]>{
        return this.todos
    }
    async getToDoById(id:string):Promise<ToDoDTO>{
        let arr = this.todos
        for (let i=0;i<arr.length;i++){
            if(arr[i]._id==id){
                return arr[i]
            }
        }
    }
    async removeToDo(id:string):Promise<string>{
        let arr = this.todos
        for (let i=0;i<arr.length;i++){
            if(arr[i].name==id){
                arr.splice(i-1,i)
            }
        }
        this.todos=arr
        return `ToDo hard deleted successfully!\nNot soft delete sorry for that`
    }
    async editToDo(data:updateToDo):Promise<string>{
        let arr = this.todos
        for (var i=0;i<arr.length;i++){
            if(arr[i].name==data.name&&arr[i]._id!=data._id){
                return `This To Do already used by another TODO !!!!!`
            }
        }
        let newdata:ToDoDTO
        newdata.creation=arr[i].creation;
        newdata.name=data.name;
        newdata.description=data.description;
        newdata.status=data.status
        arr[i]== newdata
        this.todos=arr
        return `To-Do updated successfully : ${newdata}`
    }
    async createToDo(data:createToDo):Promise<string>{
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
