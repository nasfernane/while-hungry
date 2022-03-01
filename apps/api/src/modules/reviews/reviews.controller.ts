import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// service
import { ReviewsService } from './reviews.service';

// schemas
import { RecipeReview } from '@prisma/client';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() review: RecipeReview) {
    return this.reviewsService.create(review);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() review: RecipeReview) {
    return this.reviewsService.update(+id, review);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }

  // find on recipe id
  @Get('/check/:recipeId/:userId')
  checkIfReviewed(@Param('recipeId') recipeId: number, @Param('userId') userId: number) {
    return this.reviewsService.checkIfReviewed(recipeId, userId);
  }
}
