import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './PremierModule/premier.module';
import { ToDoModule } from './ToDo/to-do.module';

@Module({
  imports: [PremierModule, ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
