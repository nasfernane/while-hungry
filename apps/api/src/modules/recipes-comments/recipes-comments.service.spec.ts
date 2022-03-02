import { Test, TestingModule } from '@nestjs/testing';
import { RecipesCommentsService } from './recipes-comments.service';

describe('RecipesCommentsService', () => {
  let service: RecipesCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesCommentsService],
    }).compile();

    service = module.get<RecipesCommentsService>(RecipesCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
