import { Controller, Post, Body } from '@nestjs/common';

// service
import { CreateService } from './create.service';

// schemas
import { RecipeReview } from '@prisma/client';

@Controller('reviews')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  /**
   * create new review on recipe
   * @param review 
   * @returns new review
   */
  @Post()
  create(@Body() review: RecipeReview) {
    return this.service.create(review);
  }
}
