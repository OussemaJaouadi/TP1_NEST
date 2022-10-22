import { Module } from '@nestjs/common';
import { ToDoDbService } from './to-do-db.service';
import { ToDoDbController } from './to-do-db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './schemas/todo.entity';

@Module({
  providers: [ToDoDbService],
  controllers: [ToDoDbController],
  imports:[TypeOrmModule.forFeature([TodoEntity])]
})
export class ToDoDbModule {}
