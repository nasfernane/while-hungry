import { Module } from '@nestjs/common';
import { RecipesCommentsService } from './recipes-comments.service';
import { RecipesCommentsController } from './recipes-comments.controller';

@Module({
  controllers: [RecipesCommentsController],
  providers: [RecipesCommentsService]
})
export class RecipesCommentsModule {}
