import { Module } from '@nestjs/common';
import { PremierController } from './premier/premier.controller';
import { PremierService } from './premier/premier.service';

@Module({
  controllers: [PremierController],
  providers: [PremierService]
})
export class PremierModule {}
