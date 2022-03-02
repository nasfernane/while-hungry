import { Test, TestingModule } from '@nestjs/testing';
import { RecipesCommentsController } from './recipes-comments.controller';
import { RecipesCommentsService } from './recipes-comments.service';

describe('RecipesCommentsController', () => {
  let controller: RecipesCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesCommentsController],
      providers: [RecipesCommentsService],
    }).compile();

    controller = module.get<RecipesCommentsController>(RecipesCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
