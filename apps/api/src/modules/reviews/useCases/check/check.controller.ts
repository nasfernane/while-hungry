import { Controller, Get, Param } from '@nestjs/common';

// service
import { CheckService } from './check.service';

@Controller('reviews')
export class CheckController {
  constructor(private readonly service: CheckService) {}

  /**
   * check if user already reviewed a recipe
   * @param recipeId
   * @param userId
   * @returns review
   */
  @Get('/check/:recipeId/:userId')
  check(@Param('recipeId') recipeId: number, @Param('userId') userId: number) {
    return this.service.check(recipeId, userId);
  }
}
