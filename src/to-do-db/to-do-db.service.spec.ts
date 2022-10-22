import { Test, TestingModule } from '@nestjs/testing';
import { ToDoDbService } from './to-do-db.service';

describe('ToDoDbService', () => {
  let service: ToDoDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoDbService],
    }).compile();

    service = module.get<ToDoDbService>(ToDoDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
