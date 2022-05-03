import { Controller, Body, Patch, Param } from '@nestjs/common';

// service
import { UpdateService } from './update.service';

// schemas
import { RecipeReview } from '@prisma/client';

@Controller('reviews')
export class UpdateController {
  constructor(private readonly service: UpdateService) {}

  @Patch(':id')
  /**
   * update a review based on id
   * @param id
   * @param review
   * @returns updated review
   */
  update(@Param('id') id: string, @Body() review: RecipeReview) {
    return this.service.update(+id, review);
  }
}
