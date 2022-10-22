import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Restoration } from 'src/shared/DTO/fields.dto';
import { createToDoDToDB, updateToDoDToDB } from 'src/shared/DTO/todoDb.dto';
import { ToDoDbService } from './to-do-db.service';

@Controller('ToDoDb')
export class ToDoDbController {
    constructor(private service:ToDoDbService){}
    @Get()
    async getAll(){
        return this.service.getAllToDos()
    }
    @Post()
    async addToDo(@Body() body:createToDoDToDB){
        return this.service.addToDo(body)
    }
    @Get('counts')
    async getCounts(){
        return this.service.countGrouped()
    }
    @Get('/:id')
    async getById(@Param('id') id:string){
        return this.service.getByID(id)
    }
    @Put('restoreOne/:id')
    async restoreOne(@Param('id') id:string){
        return this.service.restoreToDo(id)
    }
    @Put('restoreMany')
    async restoreMany(@Body() body:Restoration){
        return this.service.restoreMany(body.ids)
    }
    @Put('/:id')
    async updateToDo(@Param('id') id:string,@Body() body:updateToDoDToDB){
        return this.service.updateToDo(id,body)
    }
    @Delete('/:id')
    async deleteTODO(@Param('id') id:string){
        return this.service.softDelete(id)
    }
}
