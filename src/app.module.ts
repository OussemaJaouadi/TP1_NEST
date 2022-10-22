import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './PremierModule/premier.module';
import { ToDoModule } from './ToDo/to-do.module';
import { ToDoDbModule } from './to-do-db/to-do-db.module';
import { TodoEntity } from './to-do-db/schemas/todo.entity';

@Module({
  imports: [
    PremierModule,
     ToDoModule,
     ConfigModule.forRoot({
      isGlobal:true
     }),
     TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:parseInt(process.env.DB_PORT),
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_NAME,
      entities:[TodoEntity],
      synchronize:true
     }),
     ToDoDbModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
