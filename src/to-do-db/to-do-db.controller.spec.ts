import { Test, TestingModule } from '@nestjs/testing';
import { ToDoDbController } from './to-do-db.controller';

describe('ToDoDbController', () => {
  let controller: ToDoDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDoDbController],
    }).compile();

    controller = module.get<ToDoDbController>(ToDoDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
