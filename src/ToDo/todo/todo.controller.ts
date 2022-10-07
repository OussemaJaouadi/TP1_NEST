import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createToDo, updateToDo } from '../DTO/ToDo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private service:TodoService){}
    @Get("")
    async getToDos(){
        return  this.service.getToDos()
    }
    @Get('/:id')
    async getToDoById(@Param('id') id:string){
        return this.service.getToDoById(id)
    }
    @Post('')
    async createTODO(@Body() data:createToDo){
        return this.service.createToDo(data)
    }
    @Put('/:id')
    async editToDo(@Param('id') id:string,@Body() newData:updateToDo){
        return this.service.editToDo(id,newData)
    }
    @Delete('/:id')
    async deleteToDo(@Param('id') id:string){
        return this.service.removeToDo(id)
    }
}
