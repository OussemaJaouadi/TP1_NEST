import { Module } from '@nestjs/common';
import { ToDoControllerController } from './to-do-controller/to-do-controller.controller';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

@Module({
  controllers: [ToDoControllerController, TodoController],
  providers: [TodoService]
})
export class ToDoModule {}
